# Domain Setup - moiwak.com on Vercel via Cloudflare

## Step 1 - Add domain in Vercel

1. Go to the Vercel project dashboard for the marketing site
2. Settings > Domains
3. Add `moiwak.com`
4. Add `www.moiwak.com`
5. Vercel will confirm what DNS records are needed (should match Step 2 below)
6. Choose which one is the primary domain and which redirects (recommended: `www.moiwak.com` as primary, `moiwak.com` redirects to www - or vice versa, your call)

## Step 2 - Add DNS records in Cloudflare

Log in to Cloudflare and go to the moiwak.com zone > DNS > Records.

Add these two records:

| Type | Name | Value | Proxy status |
|------|------|-------|--------------|
| A | `@` | `76.76.21.21` | DNS only (gray cloud) |
| CNAME | `www` | `cname.vercel-dns.com` | DNS only (gray cloud) |

### Important: Proxy must be OFF

Toggle the proxy to **DNS only** (gray cloud icon, not orange). If Cloudflare's proxy is on (orange cloud), it will conflict with Vercel's automatic SSL certificate provisioning and you'll get SSL errors.

If you already have existing A or CNAME records for `@` or `www`, delete them first before adding the new ones.

## Step 3 - Wait for DNS propagation

- Usually takes a few minutes, can take up to 48 hours in rare cases
- Vercel will automatically provision an SSL certificate once DNS resolves correctly
- Check the Vercel Domains settings page - it will show green checkmarks when everything is working

## Step 4 - Verify

- Visit https://www.moiwak.com - should show the landing page
- Visit https://moiwak.com - should redirect to www (or vice versa, depending on your choice in Step 1)
- Check that the SSL padlock icon appears in the browser

## Troubleshooting

- **SSL errors or certificate issues**: Make sure Cloudflare proxy is OFF (gray cloud). Vercel needs to handle SSL directly.
- **Page not loading**: Check that the A record points to `76.76.21.21` and the CNAME points to `cname.vercel-dns.com`. Run `dig moiwak.com` and `dig www.moiwak.com` in terminal to verify.
- **"Domain not configured" in Vercel**: The domain must be added in the correct Vercel project. Check that you're in the marketing site project, not a different one.
- **Cloudflare SSL settings**: If you want, you can set Cloudflare's SSL/TLS mode to "Full" under SSL/TLS > Overview, but with proxy OFF it doesn't matter since Cloudflare isn't terminating SSL.
