#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const DEFAULT_SPEC = join(ROOT, "skills", "landscape-router", "api", "openapi.sample.json")
const DEFAULT_OUT = join(ROOT, "skills", "landscape-router", "api", "domains")

const args = process.argv.slice(2)
const specPath = args[0] ?? DEFAULT_SPEC
const outDir = args[1] ?? DEFAULT_OUT

const spec = JSON.parse(readFileSync(specPath, "utf8"))
const schemas = spec.components?.schemas ?? {}
const specVersion = spec.info?.version ?? "unknown"
const METHODS = ["get", "post", "put", "delete"]

function deref(ref) {
  return schemas[ref.split("/").pop()]
}

function schemaName(sch) {
  if (sch && typeof sch === "object" && sch.$ref) return sch.$ref.split("/").pop()
  return null
}

function collectRefs(sch, acc, seen = new Set()) {
  if (!sch || typeof sch !== "object") return
  if (sch.$ref) {
    const name = sch.$ref.split("/").pop()
    acc.add(name)
    if (seen.has(name)) return
    seen.add(name)
    collectRefs(deref(sch.$ref), acc, seen)
    return
  }
  for (const key of ["items", "additionalProperties"]) {
    if (sch[key]) collectRefs(sch[key], acc, seen)
  }
  for (const listKey of ["oneOf", "allOf", "anyOf", "prefixItems"]) {
    if (Array.isArray(sch[listKey])) for (const s of sch[listKey]) collectRefs(s, acc, seen)
  }
  if (sch.properties) for (const p of Object.values(sch.properties)) collectRefs(p, acc, seen)
}

function esc(v) {
  return String(v ?? "").replace(/\n/g, " ")
}

function fieldType(sch) {
  if (sch == null) return "any"
  if (sch.$ref) return schemaName(sch)
  if (sch.oneOf) {
    const parts = sch.oneOf.map(fieldType).filter(Boolean)
    const simplified = parts.filter((p) => p !== "null")
    if (simplified.length === 1 && parts.length === 2) return `${simplified[0]} | null`
    return parts.join(" | ")
  }
  if (sch.allOf) return sch.allOf.map(fieldType).filter(Boolean).join(" + ")
  if (sch.type === "array") return `${fieldType(sch.items) ?? "any"}[]`
  if (sch.type === "object") {
    const t = sch.properties?.t?.enum?.[0]
    return t ? `t=${t}` : "object"
  }
  if (sch.enum) return `\`${sch.enum.join("` | `")}\``
  return sch.type ?? "any"
}

function enumStr(sch) {
  const arr = sch?.enum ?? (sch?.type === "array" ? sch.items?.enum : null)
  return arr ? arr.join(", ") : ""
}

function requiredSet(sch) {
  return new Set(sch?.required ?? [])
}

function propTable(sch) {
  if (!sch || typeof sch !== "object") return "> 无字段"
  if (sch.$ref) sch = deref(sch.$ref)
  if (sch.oneOf) return oneOfSummary(sch)
  if (sch.allOf) return sch.allOf.map(propTable).filter(Boolean).join("\n")
  const props = sch.properties
  if (!props || !Object.keys(props).length) {
    return `> 类型: ${esc(fieldType(sch))}${sch.description ? ` — ${esc(sch.description)}` : ""}`
  }
  const req = requiredSet(sch)
  const rows = Object.entries(props).map(([name, p]) => {
    const parts = [`\`${esc(name)}\`: ${esc(fieldType(p))}`]
    if (req.has(name)) parts.push("(required)")
    if (enumStr(p)) parts.push(`枚举: ${esc(enumStr(p))}`)
    if (p.description) parts.push(`— ${esc(p.description)}`)
    return `- ${parts.join(" ")}`
  })
  return rows.join("\n")
}

function oneOfSummary(sch) {
  const parts = sch.oneOf.map((v) => {
    if (v.$ref) return schemaName(v)
    if (v.type === "null") return "null"
    const inner = v.allOf?.find((x) => x.$ref)
    const label = inner ? schemaName(inner) : undefined
    const t = v.properties?.t?.enum?.join("/") ?? v.properties?.t?.enum?.[0]
    if (label) return t ? `${label}(t=${t})` : label
    if (v.properties) {
      if (t) return `t=${t}`
      return `object(${Object.keys(v.properties).join(", ")})`
    }
    return `${v.type ?? "object"}${t ? `(t=${t})` : ""}`
  })
  return `> 变体: ${parts.join(" | ")}`
}

function paramTable(params) {
  if (!params?.length) return "> 无"
  const rows = params.map((p) => {
    const sch = p.schema ?? {}
    const parts = [`\`${esc(p.name)}\` (${esc(p.in)}): ${esc(fieldType(sch))}`]
    if (p.required) parts.push("(required)")
    if (p.description) parts.push(`— ${esc(p.description)}`)
    return `- ${parts.join(" ")}`
  })
  return rows.join("\n")
}

function requestBodyTable(op) {
  const body = op.requestBody
  if (!body) return "> 无"
  const sch = body.content?.["application/json"]?.schema
  if (!sch) return "> 无"
  return propTable(sch)
}

function responseDataTable(op) {
  const resp = op.responses?.["200"] ?? op.responses?.["default"]
  const sch = resp?.content?.["application/json"]?.schema
  if (!sch) return "> 未定义"
  const name = schemaName(sch)
  if (name?.startsWith("LandscapeApiResp_")) {
    let innerName = name.slice("LandscapeApiResp_".length)
    const isVec = innerName.startsWith("Vec_")
    if (isVec) innerName = innerName.slice("Vec_".length)
    if (schemas[innerName]) {
      let inner = propTable(schemas[innerName])
      if (isVec) inner = `> 数组: \`${innerName}\`[]\n\n${inner}`
      const note = `> 外层包装 \`${name}\`: \`data\` 即上表;另有 \`message\`/\`error_id\`/\`args\``
      return `${inner}\n\n${note}`
    }
    return `> \`${name}\``
  }
  return propTable(sch)
}

function moduleTitle(relPath, ops) {
  if (relPath.startsWith("services/")) {
    return `Services: ${relPath.slice("services/".length)}`
  }
  return relPath.slice(0, -3)
}

function renderOperation(op) {
  const lines = []
  if (op.operationId) lines.push(`- operationId: \`${op.operationId}\``)
  if (op.summary) lines.push(`- 说明: ${op.summary}`)
  if (op.description) lines.push(`- 描述: ${op.description.replace(/\n/g, " ")}`)
  lines.push(`\n**参数**\n\n${paramTable(op.parameters)}`)
  lines.push(`\n**请求体**\n\n${requestBodyTable(op)}`)
  lines.push(`\n**响应 data**\n\n${responseDataTable(op)}`)
  return lines.join("\n")
}

function renderSchema(name, acc) {
  const sch = schemas[name]
  if (!sch) return ""
  const desc = sch.description ? `\n> ${sch.description}` : ""
  let body
  if (sch.oneOf) {
    body = oneOfSummary(sch)
  } else {
    body = propTable(sch)
  }
  return `\n#### \`${name}\`${desc}\n\n${body}\n`
}

const groups = new Map()
const groupRefs = new Map()

for (const [path, item] of Object.entries(spec.paths)) {
  const parts = path.split("/")
  let rel
  if (parts[1] === "api" && parts[2] === "auth") {
    rel = "auth.md"
  } else if (parts[1] === "api" && parts[2] === "v1") {
    const mod = parts[3] ?? "misc"
    if (mod === "services" && parts[4]) {
      rel = `services/${parts[4]}.md`
    } else {
      rel = `${mod}.md`
    }
  } else {
    rel = "misc.md"
  }
  if (!groups.has(rel)) groups.set(rel, [])
  if (!groupRefs.has(rel)) groupRefs.set(rel, new Set())
  for (const method of METHODS) {
    const op = item[method]
    if (!op) continue
    groups.get(rel).push({ method, path, op })
    for (const p of op.parameters ?? []) collectRefs(p.schema, groupRefs.get(rel))
    collectRefs(op.requestBody?.content?.["application/json"]?.schema, groupRefs.get(rel))
    collectRefs(op.responses?.["200"]?.content?.["application/json"]?.schema, groupRefs.get(rel))
  }
}

rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })

const summary = []
for (const [rel, ops] of groups) {
  const outPath = join(outDir, rel)
  mkdirSync(dirname(outPath), { recursive: true })
  const refs = [...groupRefs.get(rel)]
  refs.sort()

  const parts = []
  parts.push(`# ${moduleTitle(rel, ops)}`)
  parts.push("")
  parts.push(`> 由 \`gen-api-docs.js\` 基于 \`openapi.sample.json\`(v${specVersion}) 自动生成,端点与字段以实际设备 spec 为准。`)
  parts.push("")
  parts.push("## 端点")
  parts.push("")
  for (const { method, path, op } of ops) {
    parts.push(`### ${method.toUpperCase()} ${path}`)
    parts.push("")
    parts.push(renderOperation(op))
    parts.push("")
  }
  parts.push("## Schema")
  parts.push("")
  for (const name of refs) {
    const body = renderSchema(name)
    if (body) parts.push(body)
  }
  writeFileSync(outPath, parts.join("\n"))
  summary.push(`${rel}: ${ops.length} ops`)
}

console.log(`spec: ${specPath} (v${specVersion})`)
console.log(`output: ${outDir}`)
for (const line of summary) console.log(line)
