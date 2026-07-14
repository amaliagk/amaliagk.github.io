# Portfolio — Design & Architecture Reference

> Source of truth for design decisions. Established 2026-07-14 after a structured
> review session. Current state is the baseline; previous iterations are irrelevant.
> Deliberate iteration on top of this is welcome — but changes to the locked
> decisions below require an explicit "update design.md" from Amalia.

## Purpose & audience

- **Goal:** get Amalia Gkigkolian hired as an in-house designer / marketing creative.
- **Primary audience: tech companies.** iGaming and FinTech are secondary — the design
  flexes around a tech-credible baseline, not the reverse. All three sectors hire
  in-house creatives in Limassol, Cyprus (her location).
- She is **actively job hunting** — bias toward shipping over polishing.
- **Primary CTA: "View Selected Work."** CV download and contact are secondary actions.
- The site itself is a work sample: hiring managers will judge typography, spacing,
  and contrast rigor as evidence of design skill.

## Locked decisions

| Decision | Answer |
|---|---|
| Primary audience | Tech first; iGaming/FinTech flex around it |
| Visual direction | Holographic/glassmorphism identity at full intensity (user's explicit call — bolder than typical tech restraint, kept deliberately) |
| Inspiration | `References/hol1.jpeg` + `hol2.jpeg` for pearlescent *blend quality* only; palette stays blue/purple/cyan (no mint/coral expansion) |
| Structure | Single long-scroll home + dedicated case-study page per work category (`/work/<slug>`) |
| Hosting | Vercel free tier, `.vercel.app` subdomain for v1; custom domain later |
| Version control | git + GitHub (user's account) + Vercel auto-deploy |
| Ship gate | 2+ work categories populated with real work AND `public/cv.pdf` present |
| AI positioning | Surfaced prominently: intro copy + What-I-Do tag + certification weight |
| Email | `am.gigolian@gmail.com` as written (user confirmed, spelling intentional) |

## Design system

### Colour
Defined in `src/app/globals.css` `:root` + `@theme inline`. Light theme only.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#f5f6fd` | Page base (tinted, never flat grey) |
| `--bg-elevated` | `#ffffff` | Clean sections, cards |
| `--surface` | `#ece9fb` | Tinted section (Experience) |
| `--border` | `#d9d9e2` | Borders/dividers |
| `--text` / `--text-muted` | `#18181b` / `#62626a` | Body / secondary text |
| `--primary` | `#2f8af5` | Vivid blue — decorative (glows, gradients, borders) |
| `--secondary` | `#b24bf3` | Vivid purple — decorative |
| `--cyan` | `#22e0ff` | Interactive accent (cursor, hover glows) |
| `--primary-strong` / `--secondary-strong` | `#175ca8` / `#7c1fb0` | AA-safe variants for small text/links |

Rule: **pastel/vivid tones are decorative; text always uses `--text`, `--text-muted`,
or the `-strong` variants.** Gradient headings (`.gradient-text`, blue→purple 135deg)
appear only at display sizes (≥3:1 large-text contrast).

### Typography
- **Headings: DM Serif Text** (`src/fonts/dm-serif-text/`, next/font/local,
  `--font-display`). Regular 400 + italic only — **never synthesize bold**
  (`font-normal` on all display headings).
- **Body/UI: Plus Jakarta Sans** (Google, `--font-sans`), weights 400–800.

### Holographic language
- Blurred gradient blobs (`blur-3xl`, blue/purple/cyan) with `holo-drift` breathing
  animation; mouse-parallax via rAF lerp in `HeroBlobs.tsx`.
- `.section-holo` full-bleed washes where blue+purple deliberately overlap;
  `.grain` noise overlay; `.glass-sheen` diagonal reflection streak.
- Section rhythm alternates: Hero (holo) → Intro (white) → Selected Work (holo wash)
  → Experience (tinted) → Tools/Education (white) → Contact (glass panel).
  `SectionDivider` = iridescent blurred band.
- Glassmorphism: `.btn-glass` **neutral at rest — gradient ring + glow appear only on
  hover/focus**; `.card-glass` static (no hover cues on non-interactive surfaces).
- Custom cursor: glow dot + trailing ring + fading particles. Desktop
  (`pointer: fine`) only; respects `prefers-reduced-motion`.

### Motion rules
- Easing `cubic-bezier(0.16, 1, 0.3, 1)`, 450ms hovers, 900ms scroll-reveals.
- Animate only `transform`/`opacity` on blurred layers (blur re-raster is expensive).
- Every animation has a reduced-motion fallback. No constant movement, no parallax
  tilting, nothing that impedes reading.

## Layout

- **Hero:** two columns — left: name (gradient serif), role badge, rotating
  "Specialized in …", description, CTAs; right: What-I-Do tag cloud. Animated glow
  blobs behind.
- **Case studies:** each of the 4 categories is a page at `/work/<slug>`
  (slugs: `corporate-branding`, `corporate-presentations`, `digital-campaigns`,
  `exhibitions-events`). Data in `src/lib/case-studies.ts`; images in
  `public/work/<slug>/` (web-optimized: ≤2000px, JPEG q~80, <400KB — raw sources
  stay in git-ignored `Designs/`). Copy structure per study: **Context → Approach →
  Outcome** (evidences the strategic-designer story).
- Nav uses `/#anchor` links (works from subpages); `data-scroll-behavior="smooth"`
  on `<html>` (Next 16 requirement).

## Workflow protocol

1. **Before any visual change:** consult `frontend-design:frontend-design`
   (non-templated-defaults critique) and `ui-ux-pro-max:ui-ux-pro-max` database
   (styles/palettes/typography/UX guidelines) — then propose to Amalia; don't act
   unilaterally on aesthetics.
2. **Next.js 16.2.10 has breaking changes** — check `node_modules/next/dist/docs/`
   before writing routing/metadata/image code (async `params`, `preload` not
   `priority`, separate `viewport` export, `metadataBase` required).
3. Verify with `npm run build` + Playwright screenshots after visual changes.
4. Post-v1: `impeccable` plugin polish pass; custom domain; remaining case studies.
