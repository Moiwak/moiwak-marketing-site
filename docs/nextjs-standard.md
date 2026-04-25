---
created: 2025-04-25
updated: 2025-04-25
status: draft
applies-to: all Next.js projects
fast-changing: true
---

# Next.js Project Standard

Standard tech stack and conventions for all Next.js projects. Serves as a team reference, onboarding guide, and project setup checklist.

All framework APIs should be verified against current documentation before use. Next.js releases frequently and patterns may change between versions.

---

## Core Stack

- **Framework**: Next.js (App Router) - 16+
- **Language**: TypeScript (strict mode) - 5.9+
- **Font**: Inter
- **CSS**: Tailwind CSS - v4
- **Components**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion (`motion` package) - 12+
- **Validation**: Zod - v4
- **Dark/light mode**: next-themes
- **Linting**: ESLint + eslint-config-next
- **Formatting**: Prettier + prettier-plugin-tailwindcss
- **Testing**: Playwright (E2E), Vitest (unit)
- **Package manager**: pnpm

### Optional (per project)

- **i18n**: next-intl - multi-language sites
- **Email**: Resend - transactional email
- **CMS**: WordPress REST API, Sanity, or similar - content-heavy sites
- **ORM**: Prisma - for direct Postgres connections without a database SDK. Not needed when using Supabase SDK, which provides its own query layer via PostgREST
- **Auth**: Clerk - multi-user apps
- **Database**: Postgres (Supabase, Coolify, or cloud) - data persistence. When using Supabase, its SDK handles queries, auth, and realtime. For plain Postgres (e.g. via Coolify), use Prisma for schema management, migrations, and type-safe queries

---

## Architecture Rules

### Server components by default

Every component is a server component unless it explicitly needs browser APIs, state, or event handlers. Only add `'use client'` when required.

```
Server component (default)     → fetches data, renders HTML
  └─ Client component island   → interactive elements (forms, animations, modals)
```

### No legacy patterns

- `getServerSideProps` / `getStaticProps` → Server components + `fetch`
- `getInitialProps` → Server components
- Client-side fetching (`useEffect` + `fetch`) → Server components or server actions
- `<a>` tags for internal links → `<Link>` from `next/link` (or `next-intl` `Link`)
- `middleware.ts` → `proxy.ts` (Next.js 16+)
- `src/` folder → Root-level `app/`, `components/`, `lib/`
- Class components → Function components
- `.then()` / `.catch()` → `async` / `await`
- Manual if/else validation → Zod schemas
- CSS modules or styled-components → Tailwind CSS

### Component architecture

- **Reusable components are mandatory.** Any UI pattern that appears in 2+ places must be extracted into a shared component with props for variations. No duplicated markup.
- **Small, focused files.** One responsibility per file. ~150 lines of JSX indicates the file should be split.
- **Avoid deep prop drilling.** Fetch data in server components as close to the consumer as possible. Use React context for shared client state. Props should not pass through more than 2 levels.
- **Functions over classes.** Function components and plain functions only, no class components or ES6 classes.

### File organization

```
app/
  layout.tsx              ← root layout (metadata, fonts, theme provider)
  template.tsx            ← re-renders on navigation (shared UI wrapper, animations)
  page.tsx                ← home page
  globals.css             ← Tailwind base + CSS variables
  manifest.ts             ← PWA manifest
  robots.ts               ← search engine rules
  sitemap.ts              ← auto-generated sitemap
  proxy.ts                ← request proxy (replaces middleware.ts)
  [route]/
    page.tsx
    loading.tsx           ← streaming loading state
    error.tsx             ← error boundary
    not-found.tsx         ← 404 page

components/
  ui/                     ← shadcn/ui components (auto-generated)
  [component-name].tsx    ← shared components

lib/
  utils.ts                ← Tailwind merge, helpers
  seo.ts                  ← SEO constants, JSON-LD generators
  actions/                ← server actions
  schemas/                ← Zod validation schemas
```

### `template.tsx` vs `layout.tsx`

- **`layout.tsx`** - persists across navigations. Use for `<html>`, `<body>`, metadata, font loading, theme provider, and global context providers.
- **`template.tsx`** - re-renders on every navigation. Use for page transition animations, shared UI wrappers that require fresh state per route, and elements that should reset on navigation (e.g., scroll position, active nav state).

---

## SEO, Metadata & Structured Data

### Metadata

Every page should export metadata via `generateMetadata` (dynamic) or `metadata` (static).

Root layout sets defaults:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [TWITTER_IMAGE_PATH],
  },
}
```

### Open Graph & Twitter Cards

Social media preview metadata that controls how links appear when shared on LinkedIn, X (Twitter), Slack, and other platforms. Configured via the `openGraph` and `twitter` fields in the metadata export. Recommended image size: 1200x630px. Can be generated dynamically using Next.js `ImageResponse`.

### JSON-LD structured data

Structured data for search engines and AI assistants. Injected as `<script type="application/ld+json">` in the page markup.

All JSON-LD generators live in `lib/seo.ts`:

```typescript
// Organization + WebSite schema (root layout)
export const structuredData = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  },
])

// Per-page schemas: BlogPosting, JobPosting, Product, Course, etc.
export function generateArticleSchema(article: ArticleSchemaProps): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    // ... rest of fields
  })
}
```

### PWA manifest, robots, sitemap

- `manifest.ts` - PWA configuration (app name, icons, theme color)
- `robots.ts` - search engine crawling directives
- `sitemap.ts` - auto-generated sitemap from routes and dynamic content

---

## Styling & Design System

### Tailwind CSS v4

- Define color palette as CSS variables (OKLCH recommended) in `globals.css`
- Use `tailwind-merge` via `cn()` utility for conditional classes
- Prettier plugin (`prettier-plugin-tailwindcss`) auto-sorts classes
- Mobile-first: start with mobile styles, add `md:` / `lg:` breakpoints

### shadcn/ui

- All UI elements should be built on shadcn/ui primitives when a matching component exists.
- Components live in `components/ui/` (auto-generated by shadcn CLI)
- Customize via CSS variables, not by modifying component source directly
- Use `class-variance-authority` (CVA) for component variants

### Dark/light mode

- Use `next-themes` for theme switching
- Wrap app in `<ThemeProvider>` in root layout
- Define both light and dark color variables in `globals.css`
- Test both modes before shipping

### Switchable themes / brandings

For projects that need multiple design systems:

```
themes/
  company/          ← company colors, fonts, logo
  personal/         ← personal style, different font
  clean/            ← neutral, no branding
```

Each theme is a set of CSS variables. Switching theme swaps which variables are active. Same Tailwind classes, different visual output.

### Component documentation

Include a `/design-system` route in the application for visual component documentation:

- All shared components with props variations
- Color palette with variable names
- Typography scale
- Spacing and layout patterns
- Icons in use
- Dark/light mode comparison

Built into the application itself - always up to date, no external tooling required.

---

## Validation

### Zod for all validation

- Form inputs (client + server side)
- Server action inputs
- API request/response validation
- Environment variable validation
- Any data parsing from external sources

```typescript
const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})

// In server action:
export async function submitContact(formData: FormData) {
  const parsed = ContactSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) return { errors: parsed.error.flatten().fieldErrors }
  // ... process
}
```

---

## Server Actions

Use for all mutations (form submissions, data writes, state changes):

```typescript
// app/actions/contact.ts
'use server'

export async function submitContact(formData: FormData) {
  const data = ContactSchema.parse(Object.fromEntries(formData))
  // validate, process, save, send email, etc.
}
```

- Validate all inputs with Zod
- Return typed results (success/error)
- Organize in `lib/actions/` or `app/actions/`
- Server actions replace client-side fetching for all mutations

---

## Project Setup Checklist

Steps for initializing a new Next.js project:

1. `npx create-next-app@latest` with TypeScript, Tailwind, App Router, no `src/`
2. Set up pnpm
3. Initialize shadcn/ui: `npx shadcn@latest init`
4. Add dependencies: `zod`, `next-themes`, `lucide-react`, `motion`
5. Add dev dependencies: `prettier`, `prettier-plugin-tailwindcss`, `playwright`
6. Configure ESLint + Prettier
7. Set up `lib/seo.ts` with site constants
8. Set up `lib/utils.ts` with `cn()` helper
9. Create `manifest.ts`, `robots.ts`, `sitemap.ts`
10. Create `proxy.ts` (if needed)
11. Set up root `layout.tsx` with metadata, fonts, ThemeProvider
12. Set up `template.tsx` for shared UI wrapper
13. Add `.env.example` with placeholder values
14. Add CLAUDE.md with project-specific instructions
15. Ensure `.gitignore` includes `CLAUDE.md`, `.claude/`, `.env`
16. Create a `/design-system` page for component documentation
17. Set up dark/light mode toggle
18. TypeScript strict mode in `tsconfig.json`
19. Run `pnpm build` to verify clean setup
