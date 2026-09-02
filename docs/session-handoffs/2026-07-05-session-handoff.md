Continue Moiwak marketing-site. Next.js 16 launch page for a physical outdoor shop, iterating on the pre-launch page against Figma. Both desktop and mobile now essentially done — pending real content (brand PNGs, two Community links) before we can ship.

**Current state:** `feat/launch-page`, clean, pushed (HEAD `8054ff1`). No open PRs. Production stays frozen on the existing holding page — NEVER merge to `main`, NEVER `vercel --prod`, NEVER `vercel link --yes`.

**Where we left off:**
Long session polishing mobile + Community. Big picture: mobile hero swapped to a dedicated portrait mp4 (Thomas delivered `Moiwak_Mobile.mov`, transcoded to H.264 CRF 18, 3.1 MB, served via `matchMedia` swap in `hero.tsx`, `object-bottom` so baked-in wordmark stays visible). Footer got real Instagram/Facebook/TikTok/YouTube icons + address update to Portlidret / Stenegård 1 / 827 54 Järvsö (mobile footer height bumped to 520px so icons aren't clipped). Community mobile is now full-featured: cards 2/3/4 rendered from the same `communitySeasons` data as desktop, full-bleed dark cards, fixed `h-[320px]`, flush stacked (no gap). Behind flag `SHOW_MOBILE_EXTRA_COMMUNITY_CARDS = true` — that's the shipping default. Utefest card 4 got a background image + rotated title matching Klätterkurs card 3. Peters paella card 1 desktop text now anchored at `absolute right-8 bottom-8 left-8` to match cards 3/4 exactly. HorizontalScroll rewritten with capture-phase + stopPropagation so Lenis never sees the wheel event during a horizontal swipe, and with immediate lock-release when user pivots to vertical (no "dead first burst"). About: `Outdoor Supply` capitalized + `&nbsp;` + `whitespace-nowrap` so it never wraps between the two words; `yellow_raincoat.png` replaces the old outfit image.

Also today: paella copy shortened to a single paragraph, sardin.se label + https://solnasardin.se/ url, Karin Trolin body shortened, Klätterkurs link `www.explore61n.se`, Utefest date `Järvsö 4–6 september 2026`.

Deploy hygiene mistake and recovery: `cd public/videos/` for ffmpeg persisted across Bash calls, and later `vercel --yes` ran from there without `.vercel/project.json`. Vercel auto-created a stray `videos` project under `hannafmws-projects`. Caught, deleted via `vercel rm videos --yes --scope hannafmws-projects`, redeployed correctly. **Rule for next session:** always prefix Vercel commands with `cd /Users/hanna/Documents/personal/clients/moiwak/marketing-site &&`.

**Key files to read first:**
- `~/.claude/projects/-Users-hanna-Documents-personal-clients-moiwak-marketing-site/memory/project_launch_page_status.md` — full state
- `~/.claude/projects/-Users-hanna-Documents-personal-clients-moiwak-marketing-site/memory/feedback_nbsp_multiword_names.md` — new rule this session: multi-word brand/product names use `&nbsp;` + `whitespace-nowrap`; apply proactively
- `app/page.tsx` — all sections, top-to-bottom. Mobile `lg:hidden`, desktop `hidden lg:block`. `communitySeasons` at top is single source of truth for both Community views.
- `components/horizontal-scroll.tsx` — capture-phase wheel handler, do not simplify
- `components/hero.tsx` — matchMedia swap between mobile/desktop video, do not touch the desktop video
- `marketing-site/CLAUDE.md` — deploy safety, port checks, Vercel CLI safety

**Next step:** Await brand PNGs from Thomas — 12 of ~24 brand logos currently rendered. Missing files that need to be dropped in `/public/brands/`: Leatherman, Morakniv, MSR, Nalgene, Primus, POC, Rab, Silva, Stanley, Therm-a-Rest, Trangia, UCO, Victorinox, and whoever's under the Miro "M" avatar in the Figma screenshot Hanna sent. When they arrive, add to both `brands-mobile` grid (Figma px positions) and `brands` desktop grid (heights). Also swap the two Community placeholders when real content arrives: trail run linkLabel `@placeholder`, Klätterkurs may still need proofing.

**Context not in files:**
- Iteration mode: Hanna prefers dev-server iteration over deploy-per-tweak. Use `pnpm dev` locally for a batch of changes, only preview-deploy when reviewing / sharing with designer.
- Community mobile flush-no-gap is the approved variant. Do not add margin between cards 2/3/4.
- The Community text `sardin.se` label with `https://solnasardin.se/` url is intentional — they are two different names for the same place. Do not "fix" this.
- Vercel Git integration is NOT connected (Hobby plan email-mismatch blocks it). All deploys are manual `vercel --yes` from the marketing-site root. This is intentional and is the safety mechanism.
- The stray `videos` project was cleaned up; do not touch it if it somehow reappears — tell Hanna first.
