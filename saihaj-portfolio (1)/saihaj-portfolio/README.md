# Saihaj Kaur — Portfolio

A single-page portfolio site. Pure HTML/CSS/JS — no build step, no
framework, no install required.

## Run it locally
Just open `index.html` in a browser. Or, in VS Code, install the
"Live Server" extension and click "Go Live" for auto-reload while editing.

## Project files
- `index.html` — page structure and content
- `style.css` — all styling
- `script.js` — the small 3D accent animation (next to the Projects heading)
- `SAIHAJ_KAUR_RESUME.pdf`, `InAmigos-Certificate.pdf` — linked directly
  from the page, no external hosting needed
- `PRD.md`, `ARCHITECTURE.md`, `DESIGN.md`, `MEMORY.md` — project docs

## Deploy

### Option A: Vercel
1. Push this folder to a GitHub repo (steps below).
2. Go to vercel.com → New Project → import that repo.
3. Framework preset: "Other" (no build command needed). Deploy.

### Option B: GitHub Pages
1. Push this folder to a GitHub repo (steps below).
2. In the repo: Settings → Pages → Source → select the `main` branch and
   `/ (root)` folder → Save.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`
   after a minute or two.

## Push to GitHub (first time)
```bash
cd saihaj-portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## To-do
- Replace the placeholder photo div in `index.html` (`.photo-frame`) with
  your real photo — ideally a cutout/transparent PNG for the blob effect
  to look best
