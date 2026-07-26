# Doing2Gether — website

A Vite + React + Tailwind project. `src/App.jsx` contains the entire site
(navigation, all pages, and the interactive valuation tool).

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173. To produce a production build:

```bash
npm run build
```

This outputs static files to `dist/` — that folder is what gets deployed.

---

## Getting this live at www.doing2gether.com

You need two separate things: **hosting** (somewhere that runs `npm run build`
and serves the result) and **DNS** (pointing your domain at that host). The
steps below use Vercel, but Netlify or Cloudflare Pages work the same way.

### 1. Push this project to GitHub

Create a new repository (e.g. `doing2gether-website`) and push this folder
to it. Vercel and Netlify both deploy by connecting to a GitHub repo.

### 2. Deploy to Vercel

1. Go to vercel.com and sign in (or create an account) with GitHub.
2. Click "Add New… → Project" and import the repository you just pushed.
3. Vercel auto-detects Vite — leave the build command as `npm run build`
   and the output directory as `dist`. Click Deploy.
4. You'll get a live URL like `doing2gether-website.vercel.app`. Confirm
   the site looks right there before moving to the domain.

### 3. Connect www.doing2gether.com

1. In the Vercel project, go to **Settings → Domains** and add
   `www.doing2gether.com` (and `doing2gether.com` if you want the bare
   domain to work too — Vercel will offer to redirect one to the other).
2. Vercel will show you DNS records to add. Typically:
   - A **CNAME** record: host `www`, value `cname.vercel-dns.com`
   - For the bare domain (`doing2gether.com`), an **A** record pointing to
     Vercel's IP (Vercel shows the exact value in that screen).
3. Log in to wherever you registered the domain (GoDaddy, Namecheap,
   Google Domains, etc.) — this is the "DNS" or "DNS management" section
   for the domain — and add the records exactly as Vercel showed you.
4. DNS changes can take anywhere from a few minutes to ~48 hours to
   propagate. Vercel's dashboard will show the domain status flip to
   "Valid Configuration" once it's live, and it issues an SSL certificate
   automatically.

### If you'd rather use Netlify instead of Vercel

Same idea: "Add new site → Import an existing project" from GitHub, build
command `npm run build`, publish directory `dist`. Then Site settings →
Domain management → Add a domain, and Netlify will give you the DNS
records to add at your registrar the same way.

---

## Before you consider this "done"

- Replace `public/og-image.jpg` (referenced in `index.html`'s Open Graph
  tags but not included here) with an actual 1200×630 image for link
  previews on social media and iMessage.
- The listings, market figures, and testimonials in `src/App.jsx` are
  illustrative placeholders — swap them for real data before launch.
- The contact form in the Contact page doesn't send anywhere yet — it just
  shows a confirmation message. Wire it to an email service (e.g. a simple
  serverless function, Formspree, or your CRM's form API) before relying
  on it for real leads.
