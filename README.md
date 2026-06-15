# Altadena Recovery Watch — website

A simple 3-page static site. No server, no build step — just upload the files.

## Files (keep them all in the same folder)
**Pages**
- **index.html** — home page (problem, asks, stats, show up, share, join the list).
- **altadena_lots_map.html** — interactive map of confirmed/flagged subdivision sites.
- **altadena_action_app.html** — "take action" tool (personalized emails to officials) + sign-up.
- **resources.html** — downloads page (flyer, scripts, talking points, graphics).

**Graphics** (also used for link previews + Instagram)
- **social-card.png** (1200×630), **instagram-square.png** (1080×1080), **instagram-story.png** (1080×1920).

**Downloadable PDFs linked from resources.html** — upload these two:
`Altadena_action_flyer.pdf`, `Altadena_quick_talking_points.pdf`.

*(Organizer/internal — used by the team, NOT linked on the public site: public-comment toolkit, Barger/Pérez talking points, council leave-behind, media advisory, model executive order, one-page summary, Master Brief, Messaging Memo, idea log, media distribution list, call-prep doc.)*

## Build the sign-up database
The "Join the list" forms (home page + action tool) save to the visitor's device by default. To collect everyone into one place, create a free **Formspree** form (or a Google Form) and paste its URL into `FORM_ENDPOINT` (in index.html's script) and `CONFIG.formEndpoint` (in altadena_action_app.html's script). Submissions then flow to one dashboard you can export.

## Before you publish (5 quick edits)
1. **Campaign name:** the working name is "Altadena Recovery Watch." To rename, find-and-replace that text in `index.html` (nav brand + footer).
2. **Take Action button:** in `altadena_lots_map.html` and `index.html` it points to `altadena_action_app.html` — works as-is if all three files are together.
3. **"Report a lot" link:** in `altadena_lots_map.html`, change `info@save-altadena.org` to your real inbox.
4. **Map pin reliability (recommended for traffic):** the map looks up addresses live in each visitor's browser. For a public launch, paste exact coordinates into the `COORDS = {}` object at the top of the map's script so it never depends on live lookups. (Ask Claude to fill these in once it's hosted, or read them off Google Maps.)
5. **Social image (optional):** add `social-card.png` for link previews.

## Publish on GitHub Pages (free, ~3 minutes)
1. Create a new **public** repo (e.g., `altadena-recovery-watch`).
2. Upload `index.html`, `altadena_lots_map.html`, `altadena_action_app.html` (and `social-card.png` if you made one).
3. Repo **Settings → Pages**.
4. Under "Build and deployment," Source = **Deploy from a branch**; Branch = **main**, folder = **/ (root)**; Save.
5. Wait ~1–2 minutes. Your site is live at `https://YOURUSERNAME.github.io/altadena-recovery-watch/`.
6. Test it on a phone: home → "See the Map," home → "Take Action," and send yourself a test email from the action tool.

## Custom domain (optional, later)
If you get your own domain, add it in **Settings → Pages → Custom domain**, then add these DNS records at your registrar:
- Four **A records** for the apex domain pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- One **CNAME** for `www` → `YOURUSERNAME.github.io`
GitHub will provision HTTPS automatically.

## Note
Community advocacy material — not legal advice. Map data is from LA County permit records (EPIC-LA); confirm any specific parcel at the source before relying on it.
