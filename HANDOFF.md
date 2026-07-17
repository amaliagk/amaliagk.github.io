# Handoff — Portfolio project

_Living status doc. Update at the end of each working session. Last updated: 2026-07-17._

## What this is
Portfolio landing site for **Amalia Gkigkolian**, graphic designer & marketing
creative (Limassol, Cyprus). **Actively job hunting** — bias toward shipping.
Primary audience **tech**, then iGaming / FinTech. Next.js 16 (App Router,
`src/`), Tailwind v4, React 19, TypeScript. Holographic-glassmorphism identity;
DM Serif Text headings + Plus Jakarta Sans body; blue/purple/cyan palette.
Full design system + locked decisions: **`architecture/design.md`**.

## Project direction (the north star)
Goal: **land Amalia an in-house design / marketing-creative role.** The site
_is_ the work sample — hiring managers judge its type, spacing, and contrast as
evidence of skill, so craft matters as much as content. Strategy: lead with the
**work** (View Selected Work is the primary CTA), tell the strategic-designer
story (marketing-manager-turned-designer — every case study frames business
objective → approach → outcome, not just visuals), and surface **AI fluency** as
a 2026 tech differentiator (two AI certs + daily ChatGPT/Claude use).

Locked decisions (don't reopen without an explicit "update design.md"):
| Decision | Answer |
|---|---|
| Primary audience | Tech first; iGaming/FinTech flex around it |
| Visual direction | Holographic/glass at full intensity (deliberate, bolder than typical tech restraint) |
| Inspiration | `References/hol1.jpeg`+`hol2.jpeg` pearlescent _blend quality_ only; palette stays blue/purple/cyan |
| Type | DM Serif Text (local, headings, never faux-bold) + Plus Jakarta Sans (body) |
| Structure | Long-scroll home + a dedicated `/work/[slug]` page per category |
| Primary CTA | View Selected Work (CV + contact secondary) |
| Hosting | Vercel free tier, `.vercel.app` for v1; custom domain later |
| Ship gate | 2+ categories populated **and** `cv.pdf` present |
| AI positioning | Surface prominently (intro + a tag + certification weight) |

Iteration on top of this baseline is welcome; the locked rows are the guardrails.

## Current status
- Single-page site (`src/app/page.tsx`) + 4 case-study routes `/work/[slug]`.
- **3 of 4 categories populated with real work**; past the "2+ categories" ship gate.
- Git repo, 5 commits on `master`. **Not yet pushed to GitHub / not deployed.**
- Runs locally only (no live URL yet).

### Pending at a glance
- [ ] `cv.pdf` (buttons 404 without it) — **launch blocker**
- [ ] AI-positioning copy (intro + tag + certs) — agreed, not yet written
- [ ] Corporate Presentations content (category still "coming soon")
- [ ] Sailing Regatta photos (3rd event collage is a placeholder)
- [ ] Push to GitHub → deploy to Vercel — **launch step**
- [ ] Post-launch: responsive/contrast/Lighthouse pass, `impeccable` polish, custom domain

Detail + ownership for each below.

### Case studies
| Slug | State |
|---|---|
| `corporate-branding` | ✅ Fameline business-card cover, logo grid (Tideway/Unichem/ZenGlobal/ShipWell/Zoomline), letterhead, 3-page Luminar brochure |
| `digital-campaigns` | ✅ tree-planting cover, 3 social graphics, **Motion & video** section (5 self-hosted videos) |
| `exhibitions-events` | ✅ 3 event sections w/ collage: Global STSS (5), EastMed (7), **Sailing Regatta = "coming soon" placeholder (folder empty)** |
| `corporate-presentations` | ⬜ no assets yet → card + page show "coming soon" |

## Blockers / needs from Amalia
1. **`cv.pdf`** — all 3 "Download CV" buttons 404. Drop the PDF → wire to `public/cv.pdf`.
2. **Corporate Presentations** work — none provided yet.
3. **Sailing Regatta** photos — `Designs/Exhibitions & Events/Sailing Regatta/` is empty.
4. **GitHub account** confirmation for the deploy step (email is set repo-local to `am.gigolian@gmail.com`).

## Next actions (priority order)
1. When `cv.pdf` arrives → place at `public/cv.pdf` (buttons already point there).
2. **AI positioning copy** (agreed, not yet done): weave AI fluency into the intro
   paragraph + add a "What I Do" tag + give the two AI certifications more weight.
   Copy lives in `src/lib/content.ts` (`introduction`, `certifications`).
3. Populate Corporate Presentations + Sailing Regatta as assets land (pipeline below).
4. **Deploy**: `git push` → GitHub repo (Amalia's account) → Vercel import →
   set `NEXT_PUBLIC_SITE_URL` env var → redeploy. `.vercel.app` subdomain for v1.
   Optional `@vercel/analytics`.
5. Post-launch: responsive/contrast/Lighthouse pass; `impeccable` plugin polish;
   custom domain; smoother hol1/hol2-style pearlescent backgrounds (consult skills first).

## Asset pipeline (reproduce in a fresh session)
Raw work lives in git-ignored `Designs/<Category>/`. Optimize → `public/work/<slug>/`.
Tooling is installed `--no-save` (reinstall if missing): `sharp` (ships with Next),
`ffmpeg-static`, `pdf-to-img`. Run scripts from the project dir.
- **Images** → `sharp`: `.rotate()`, resize `fit:inside` max 1600–1800px,
  `.webp({quality: 78–82})`, target < 400 KB. Logos: keep alpha, `quality:92`,
  and mark `contain: true` in the data model (render on padded white cards).
  Capture output `width`/`height` into the data model (required — avoids CLS).
- **Videos** → `ffmpeg-static`: transcode `scale=1280:1280:force_original_aspect_ratio=decrease:force_divisible_by=2`,
  `libx264 -crf 26 -preset veryfast -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k`.
  Poster: seek to ~45% of duration (parse `Duration:` from ffmpeg stderr), frame → webp q78.
- **PDFs** → `pdf-to-img` (`pdf(path,{scale:2.5})`, `for await` pages) → sharp → webp q82.
  Dynamic-import the ESM entry via `pathToFileURL(...).href`.
- `.ai` files: skip (editable source, not a render) unless exported to PNG/PDF first.

## Key files
- `src/lib/case-studies.ts` — case-study data + types (`CaseStudy`, `CaseStudyImage`
  w/ `contain`, `CaseStudyVideo`, `CaseStudySection` w/ `collage`/`comingSoon`).
  Single source of truth; `content.ts` re-exports `caseStudies`.
- `src/app/work/[slug]/page.tsx` — case-study page; has `GalleryFigure` + `Collage` helpers.
- `src/lib/content.ts` — profile, intro, experience, tools, education, certifications.
- `src/app/layout.tsx` — fonts, metadata, `viewport`, `data-scroll-behavior`.
- `src/app/globals.css` — all design tokens (`@theme`) + glass/holo/cursor utilities.
- `src/components/` — Hero, HeroBlobs, RotatingWord, SelectedWork, Experience,
  ToolsEducation, Contact, Header, Footer, Reveal, CursorGlow, SectionDivider.
- Metadata: `opengraph-image.png`, `icon.svg`, `apple-icon.png`, `sitemap.ts`, `robots.ts`.

## Recent commits
```
1be9b79 Restructure Exhibitions into 3 event sections with collage galleries
d5b9ad0 Add videos and print pieces to case studies
d2e3b58 Populate 3 case studies with real work; fix heading descenders
81c7331 Add case-study pages, metadata, and share-readiness
73e5d3e Initial commit: portfolio v1 baseline
```
