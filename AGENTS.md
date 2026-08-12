# AGENTS.md

This is the development repository for the landscape-router skill.

## Development Constraints

- The `refs/` directory is reference material used only during skill development (initialized by `scripts/init-refs.sh`). It is not distributed with the skill and is unavailable in the target user environment.
- Never reference `refs/` paths in the body or description of any `skills/*/SKILL.md`.
- The official reference documentation for the skill will be written separately by the repository owner. Once ready, reference it in the "参考文档" section of the SKILL.md.
- `scripts/init-refs.sh` is only for development environment initialization; it is not part of the skill runtime logic.

## Commit Message

- Commit messages must be written in English.
