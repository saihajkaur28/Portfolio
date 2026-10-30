# PRD — Saihaj Kaur Portfolio

## What this is
A personal portfolio website for Saihaj Kaur, a second-year B.Tech Computer
Science Engineering student (GTBIT, New Delhi, 2025–2029) building toward a
career in AI/ML. It replaces her existing, simpler portfolio
(saihaj-portfolio.vercel.app) with a more distinctive, visually bold version.

## Why
The original portfolio was functional but plain. The goal is a site that:
- Feels memorable and "worth considering" to someone skimming many student
  portfolios (recruiters, hackathon organizers, internship reviewers)
- Signals AI/ML focus through both content and a deliberate (not generic)
  interactive 3D touch
- Still reads as credible and professional — not flashy at the expense of
  substance

## Audience
Recruiters and internship/placement reviewers, hackathon teams, and anyone
she shares the link with directly (LinkedIn, resume, applications).

## Core requirements (as they evolved through the build)
- **Format:** a single self-contained `.html` file she can host anywhere
  (Vercel, GitHub Pages) — no build step, no external backend
- **Visual direction:** light, pastel theme (lavender/mint), not dark —
  bold colorful accents, playful but purposeful
- **3D animation:** one deliberate, AI/ML-flavored 3D moment rather than
  decorative floating shapes — currently a small interactive 3D cluster
  next to the Projects heading
- **Hero layout:** intro text on the left, her photo on the right in a
  blob-shaped cutout frame (not a plain rectangle), modeled after reference
  hero designs she shared — includes "Hire Me" / "Resume" buttons and a
  social icon row (Email, GitHub, LinkedIn)
- **Navigation:** fixed top nav bar with smooth-scroll links to each section
- **Content:** real, not placeholder — pulled from her existing live
  portfolio and resume: About, Education, Skills (grouped by category),
  Learning Journey (5 steps), Projects (3 real projects, including a 1st
  place hackathon win), Experience (AI Research Internship), Contact
- **Documents:** resume and internship certificate embedded directly in the
  page (base64) so the site has no external file dependencies
- **Interaction polish:** consistent hover feedback across cards, pills,
  and the journey timeline

## Still open
- Her actual photo is not yet in the page (placeholder frame currently)
- Everything else reflects her real, confirmed information
