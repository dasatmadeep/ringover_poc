# Ask Empower – One Page

Static, mobile-responsive frontend for the Ask Empower V2 internal launch brief. Built with HTML/CSS/JS, following the [Empower Design Guidelines](Design_Guidelines.md). Ready to deploy on [Vercel](https://vercel.com).

## Deploy to Vercel

**Option 1 – Vercel Dashboard**

1. Push this folder to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
3. Import the repository. Vercel will detect it as a static site.
4. Deploy. The root URL will serve `one_page.html` (via `vercel.json` rewrites).

**Option 2 – Vercel CLI**

```bash
npm i -g vercel
cd "Ask Empower - One Page"
vercel
```

Follow the prompts. Your site will be live at the given URL.

**Option 3 – Drag & drop**

1. Zip the folder (include `one_page.html` and `vercel.json`).
2. Go to [vercel.com/new](https://vercel.com/new) and deploy by uploading the zip or connecting the repo.

## Project structure

- `one_page.html` – Single-page app (nav, hero, evolution, capabilities, use cases, industries, competitive, sales pitch, footer).
- `vercel.json` – Rewrites so `/` and `/index.html` serve `one_page.html`.
- `Design_Guidelines.md` – Empower design token system and UI rules.

## Features

- **Mobile-first responsive**: Breakpoints at 1024px, 768px, 480px; stacked layouts and touch-friendly nav on small screens.
- **Hamburger menu** on viewports &lt; 768px with accessible toggle and focus states.
- **Design tokens**: Colors, spacing, and typography aligned with the Empower design system.
- **Accessibility**: Focus outlines, semantic HTML, ARIA on menu toggle, sufficient contrast.

## Local preview

Open `one_page.html` in a browser, or use a simple static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open the URL shown (e.g. http://localhost:3000).
