#!/usr/bin/env node
import { createRequire } from "node:module"
import { mkdirSync, writeFileSync, rmSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const require = createRequire(import.meta.url)
const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")
const SAMPLE = join(ROOT, "skills", "landscape-router", "api", "openapi.sample.json")
const GITHUB_REPO = "ThisSeanZhang/landscape"
const CACHE_DIR = join(process.env.TMPDIR ?? "/tmp", "landscape-openapi")

const usage = `Usage:
  fetch-openapi.js                      Print the bundled sample spec path
  fetch-openapi.js --url <router-url>   Extract OpenAPI spec from a running router (/api/docs)
  fetch-openapi.js --version <vX.Y.Z>   Download openapi.json for a specific release from GitHub`

function validateSpec(json) {
  if (!json || typeof json !== "object" || !json.openapi || !json.paths) {
    throw new Error("response is not a valid OpenAPI spec")
  }
}

async function fetchFromRouter(baseUrl) {
  const base = baseUrl.replace(/\/+$/, "").replace(/\/api\/docs$/, "")
  console.error(`fetching spec from ${base}/api/docs ...`)
  const res = await fetch(`${base}/api/docs`, {
    redirect: "follow",
    headers: { "User-Agent": "landscape-router-skill" },
  })
  if (!res.ok) throw new Error(`GET /api/docs failed: HTTP ${res.status}`)
  const html = await res.text()
  const marker = '<script id="api-reference" type="application/json">'
  const start = html.indexOf(marker)
  if (start === -1) throw new Error("could not find embedded spec in /api/docs page")
  const contentStart = start + marker.length
  const contentEnd = html.indexOf("</script>", contentStart)
  if (contentEnd === -1) throw new Error("unterminated embedded spec in /api/docs page")
  let spec
  try {
    spec = JSON.parse(html.slice(contentStart, contentEnd))
  } catch {
    throw new Error("embedded spec in /api/docs page is not valid JSON")
  }
  validateSpec(spec)
  mkdirSync(CACHE_DIR, { recursive: true })
  const out = join(CACHE_DIR, `openapi.${Date.now()}.json`)
  writeFileSync(out, JSON.stringify(spec, null, 2))
  console.log(out)
}

async function downloadByVersion(version) {
  const url = `https://github.com/${GITHUB_REPO}/releases/download/${version}/openapi.json`
  console.error(`downloading ${url} ...`)
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "User-Agent": "landscape-router-skill" },
  })
  if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`)
  let spec
  try {
    spec = await res.json()
  } catch {
    throw new Error("downloaded file is not valid JSON")
  }
  validateSpec(spec)
  mkdirSync(CACHE_DIR, { recursive: true })
  const out = join(CACHE_DIR, `openapi.${version}.json`)
  writeFileSync(out, JSON.stringify(spec, null, 2))
  console.log(out)
}

const args = process.argv.slice(2)

if (args.length === 0) {
  console.log(SAMPLE)
} else if (args[0] === "--url") {
  if (args.length < 2) { console.error(usage); process.exit(1) }
  fetchFromRouter(args[1]).catch((err) => { console.error(`error: ${err.message}`); process.exit(1) })
} else if (args[0] === "--version") {
  if (args.length < 2) { console.error(usage); process.exit(1) }
  downloadByVersion(args[1]).catch((err) => { console.error(`error: ${err.message}`); process.exit(1) })
} else {
  console.error(usage)
  process.exit(1)
}
