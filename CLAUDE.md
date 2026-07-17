@AGENTS.md

# Portfolio project — operating guide

Personal portfolio site for **Amalia Gkigkolian** (graphic designer & marketing
creative, Limassol) — actively job hunting, targeting **tech** first, then
iGaming / FinTech. Next.js 16 + Tailwind v4, holographic-glassmorphism identity.

## Read these first, every session
1. **`HANDOFF.md`** — current status, what's done, what's next, blockers.
2. **`architecture/design.md`** — locked design decisions + design system.
   Don't change locked decisions (palette, DM Serif headings, layout) without an
   explicit "update design.md" from Amalia.

## Environment (Windows 11 / PowerShell) — IMPORTANT
`node` and `git` are **not on the default PATH**. Prepend them at the start of
any shell command that needs them (they don't persist between tool calls):
```powershell
$nodeRoot = (Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages" -Directory -Filter "OpenJS.NodeJS*" | Get-ChildItem -Directory -Filter "node-v*-win-x64" | Select-Object -First 1).FullName
$env:PATH = "$nodeRoot;$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
```

## Commands
- Build / typecheck: `npm run build` (run after any change — must stay green).
- Dev server: `npm run dev` (run in background). **Dev servers do NOT survive
  across sessions** — if the site "isn't working," just restart it. Port 3000;
  if taken by a stale process it uses 3001.
- Visual verify: drive a headless browser with Playwright and screenshot. The
  Chromium binary is cached at `%LOCALAPPDATA%\ms-playwright`, but the
  `playwright` npm package lives only in a scratchpad install — a fresh session
  reinstalls it with `npm install --no-save playwright` (no re-download).

## Working protocol
- **Before any visual/design change**, consult the `frontend-design` skill
  (avoid templated defaults) and the `ui-ux-pro-max` skill's database
  (palettes / typography / UX rules), then propose — don't unilaterally
  restyle. See `architecture/design.md` § Workflow protocol.
- **Next.js 16 has breaking changes** vs training data (async `params`,
  `preload` not `priority`, separate `viewport` export, `metadataBase`
  required). Check `node_modules/next/dist/docs/` before routing/metadata/image
  work.
- Verify with `npm run build` + a screenshot pass, then commit in logical
  chunks. Commit messages: short subject + a `-m` body. `Designs/`,
  `References/`, `*.docx`, and `node_modules/` are git-ignored — never commit
  raw source assets.
