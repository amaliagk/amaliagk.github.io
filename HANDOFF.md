# Handoff — Portfolio project

_Living status doc. Update at the end of each working session. Last updated: 2026-07-17._

## What this is
Portfolio landing site for **Amalia Gkigkolian**, graphic designer & marketing
creative (Limassol, Cyprus). **Actively job hunting** — bias toward shipping.
Primary audience **iGaming** (pivoted 2026-07-17), then tech / FinTech. Next.js 16 (App Router,
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
| Primary audience | **iGaming first**; tech/FinTech flex around it (updated 2026-07-17). Copy targets iGaming by *emphasis, not naming* |
| Visual direction | Holographic/glass at full intensity (deliberate, bolder than typical tech restraint) |
| Inspiration | `References/hol1.jpeg`+`hol2.jpeg` pearlescent _blend quality_ only; palette stays blue/purple/cyan |
| Type | DM Serif Text (local, headings, never faux-bold) + Plus Jakarta Sans (body) |
| Structure | Long-scroll home + a dedicated `/work/[slug]` page per **project** (restructured 2026-07-17 from categories, per `Portfolio Structure v2.docx`) |
| Primary CTA | View Selected Work (CV + contact secondary) |
| Hosting | Vercel free tier, `.vercel.app` for v1; custom domain later |
| Ship gate | 2+ categories populated **and** `cv.pdf` present |
| AI positioning | Surface prominently (intro + a tag + certification weight) |

Iteration on top of this baseline is welcome; the locked rows are the guardrails.

## Current status
- Single-page site (`src/app/page.tsx`) + **project-led** case-study routes `/work/[slug]`
  (restructured 2026-07-17 after a grilling session with Amalia — see decisions below).
- **3 of 4 projects populated with real work**; past the "2+" ship gate.
- Copy repositioned for iGaming-by-emphasis + AI fluency (intro, What-I-Do, certs).
- Git repo on `master`. **Not yet pushed to GitHub / not deployed.**
- Runs locally only (no live URL yet).

### Pending at a glance
- [ ] `cv.pdf` (buttons 404 without it) — **launch blocker**
- [ ] Fameline rebrand **"before" assets** + rebrand presentation (for the before/after chapter)
- [ ] Sailing Regatta photos + logo-development work (teaser card until then)
- [ ] EastMed additional content (page live with 7 photos; Amalia will provide more)
- [ ] Global STSS presentation work (chapter to add when provided)
- [ ] Push to GitHub → deploy to Vercel — **launch step**
- [ ] Post-launch: pearlescent-background polish pass, responsive/contrast/Lighthouse, `impeccable`, custom domain

Detail + ownership for each below.

### Projects (restructured 2026-07-17)
| Slug | State |
|---|---|
| `fameline-holding-group` | ✅ Flagship, narrative chapters: Context → Rebrand & creative direction (rebrand video; before/after pending) → Brand family (5 logos) → Applications (cards, letterhead) → Social collage (4 posts) → Video & motion (3 videos) |
| `global-stss` | ✅ Launch-event collage (5), Luminar Marine brochure (3 pages), announcement video; presentations chapter when provided |
| `eastmed-exhibition` | ✅ 7 booth photos (Elite Blue Group etc.); more content coming |
| `sailing-regatta` | ⬜ `comingSoon: true` → non-clickable teaser card on home; page excluded from build/sitemap until assets land |

## Blockers / needs from Amalia
1. **`cv.pdf`** — all 3 "Download CV" buttons 404. Drop the PDF → wire to `public/cv.pdf`.
2. **Fameline rebrand "before" assets + rebrand presentation** — v2 doc asks for a
   before/after chapter; no "before" material exists in the repo.
3. **Sailing Regatta** photos + logo work — `Designs/Exhibitions & Events/Sailing Regatta/` is empty.
4. **EastMed** additional content; **Global STSS** presentation work.
5. **GitHub account** confirmation for the deploy step (email is set repo-local to `am.gigolian@gmail.com`).

## Next actions (priority order)
1. When `cv.pdf` arrives → place at `public/cv.pdf` (buttons already point there).
2. **Deploy**: `git push` → GitHub repo (Amalia's account) → Vercel import →
   set `NEXT_PUBLIC_SITE_URL` env var → redeploy. `.vercel.app` subdomain for v1.
   Optional `@vercel/analytics`.
3. Slot in Amalia's assets as they land (pipeline below): rebrand before/after →
   Fameline chapter 2; Regatta photos → un-`comingSoon` the study; EastMed extras;
   GSTSS presentations chapter.
4. Post-launch polish pass (consult `frontend-design` + `ui-ux-pro-max` first):
   smoother hol1/hol2-style pearlescent backgrounds, richer card hovers,
   responsive/contrast/Lighthouse audit, `impeccable` plugin, custom domain.

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
