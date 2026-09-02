# Marketing Site - Tasks

Active work items. Future ideas go in `backlog.md`.

## Done

- [x] Confirm final project name + domain (Moiwak, moiwak.com)
- [x] Scaffold Next.js 16 project (TypeScript, Tailwind v4, shadcn/ui, Zod v4, motion, Prettier, Playwright)
- [x] Initialize git repo, push to github.com/Moiwak/moiwak-marketing-site
- [x] Connect Vercel project - deployed and live
- [x] Landing page with hero photo, logo, contact info, KH Teka/KH Teka Mono fonts
- [x] First iteration of full launch page on `feat/launch-page`: sticky nav (About / Brands / Contact), hero, About (image-left + text-right), Concept (text-left + image-right), Brands grid (placeholders), Sustainability, footer with social icons + contact info
- [x] Centralized spacing system: `--section-y` / `--section-x` CSS variables in `app/globals.css`; inter-section spacing owned by `<main>` via `gap-(--section-y)` so a section's content can grow without affecting siblings
- [x] Disabled Vercel SSO protection on previews so URLs are publicly shareable with the team
- [x] Added hard rules to `marketing-site/CLAUDE.md` and `../CLAUDE.md` to prevent any merge to `main` or `vercel --prod` until launch
- [x] **Launch (2026-06-28):** Swedish localisation of nav + sections (Om Moiwak / Varumärken / Go Ghost / Community / Kontakta oss), restructured hero (85vh, single "Stenegård, Järvsö" line under right-aligned logo), reframed first section as "Moiwak Outdoor Supply" with Kläder/Utrustning/Proviant/Cabin, added Go Ghost poetic copy, added Community section with events grouped by Sommar 2026 / Höst 2026, restructured footer into 3 columns (logo, Kontakta oss + socials, Öppettider + Hitta hit grayscale map embed), swapped first/second section images to `images/general/sunset_milsjon.jpeg` and `images/general/jessica_lake.jpeg`, hid Sustainability behind `SHOW_SUSTAINABILITY` flag, public images reorganised into `public/images/{general,mock,products}/`
- [x] Merged `feat/launch-page` → `main` and deployed to prod (`vercel --prod`) — live at https://moiwak.com (confirmed Swedish nav serving)
- [x] Vercel CLI updated 52.0.0 → 54.18.1

## Up next

- [ ] Run the marketing site brainstorm session - populate `spec.md`
- [ ] Real brand logos to replace the placeholder Moiwak wordmark tiles in the Brands grid (8 slots, `app/page.tsx` `Brands` section) — waiting on assets
- [ ] Real social account URLs (Instagram, YouTube) — placeholders in `components/site-footer.tsx` — waiting on URLs (LinkedIn + Snapchat removed)
- [ ] Hero video — replace the static `images/mock/hero.jpg` once the launch video is delivered — waiting on video
- [ ] Real product photography to replace `images/mock/*` placeholders; `public/images/products/` is empty awaiting real assets
- [ ] Verify SV-only copy decision (no SV/EN toggle for launch). Reassess if/when EN audience matters.
- [x] Founder names — decision: omit (no founder names on site)
- [ ] Re-evaluate whether to keep the product photo strip section — currently hidden via `SHOW_PHOTO_STRIP=false` flag in `app/page.tsx`; intended for reuse on the planned Abril Aventura clone
- [ ] Decide whether to re-enable the Sustainability section (currently hidden via `SHOW_SUSTAINABILITY=false`) — content currently in English; would need Swedish version first
- [ ] Real event content / link URLs in `communitySeasons` (placeholder `karin.trollin@xxxxxx.se`, `https://äventyr.se`, etc.)

## Later (after brainstorm)

- [ ] Set up Resend account + domain verification
- [ ] Configure SPF / DKIM / DMARC on the domain
- [ ] Set up PostHog + GA4 + Sentry
- [ ] Set up Google Search Console + Bing Webmaster
