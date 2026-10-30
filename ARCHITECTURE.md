# ARCHITECTURE — Saihaj Kaur Portfolio

## Overview
Everything lives in one file: `portfolio.html`. No build step, no package
manager, no backend. Open it in a browser and it works; host it anywhere
that serves static files.

## File shape
```
portfolio.html
├── <head>
│   ├── Google Fonts (Unbounded + Space Grotesk, via <link>)
│   └── <style> — all CSS, scoped with CSS custom properties in :root
├── <body>
│   ├── <nav>            fixed top bar, smooth-scroll anchor links
│   ├── #hero             intro (left) + photo blob frame (right)
│   ├── #about
│   ├── #mantra           solid-color full-bleed statement
│   ├── #stats            3 big-number highlights
│   ├── #education
│   ├── #journey          5-step numbered timeline
│   ├── #projects         3 project cards (1 featured) + 3D canvas accent
│   ├── #experience
│   ├── #skills           grouped skill pills
│   ├── #contact
│   └── <footer>
└── <script>
    ├── Three.js (r128, loaded from cdnjs as a <script> tag — no bundler)
    └── inline IIFE that builds and animates the small 3D cluster
        rendered into #proj-canvas
```

## External dependencies
- **Google Fonts** — `fonts.googleapis.com` / `fonts.gstatic.com`
- **Three.js r128** — loaded from `cdnjs.cloudflare.com` as a classic
  `<script>` (UMD build), not an ES module import — keeps the page usable
  without any bundler
- No other libraries, no analytics, no backend calls

## 3D rendering
A single Three.js scene is scoped to a small canvas (`#proj-canvas`) next
to the Projects heading — not the full page background. It renders three
shapes (icosahedron, torus, sphere) in the site's accent colors, rotating
slowly and tilting gently toward the mouse. It respects
`prefers-reduced-motion` (tilt response is disabled, though the base
rotation still runs).

The hero previously had a full-background 3D "data network" animation;
this was removed per feedback and the hero is now plain CSS (blob shape +
floating dots), with the 3D kept to one focused spot instead of the whole
page.

## Assets
The resume (`SAIHAJ_KAUR_RESUME.pdf`) and internship certificate
(`InAmigos-Certificate.pdf`) live as plain files in the project folder,
linked with relative `<a href="SAIHAJ_KAUR_RESUME.pdf" download>` tags —
matching the structure of her previous portfolio. An earlier version
embedded these as base64 `data:` URIs directly inside `index.html` to
avoid depending on the old Vercel-hosted links, but that bloated the HTML
file to ~470 KB and made it hard to read/edit. Separate files are
cleaner and work the same way once deployed (Vercel/GitHub Pages both
serve them as static assets alongside `index.html`).

## Responsiveness
Plain CSS flexbox/grid throughout, with breakpoints at roughly 700px,
850px, and 900px to stack the hero, collapse the nav links, and resize
the photo frame and 3D canvas for smaller screens.

## What's intentionally absent
- No JS framework (React/Vue) — not needed for a static one-page site
- No CMS or data file — all content is hardcoded directly in the HTML,
  since it's a personal site maintained by one person
- No image assets yet — the hero photo is a placeholder div until she
  supplies a real (ideally cutout/transparent PNG) photo
