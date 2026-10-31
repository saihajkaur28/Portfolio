# MEMORY — Current Status

_Last updated: after embedding resume/certificate, adding journey hover,
and removing the "currently building this portfolio" line._

## Done
- Single self-contained `portfolio.html` built — hostable anywhere,
  no build step
- Light pastel theme locked in (lavender/mint/violet/coral) — dark theme
  explicitly rejected
- Hero rebuilt to match reference designs Saihaj shared: intro left,
  blob-shaped cutout photo frame right, "Hire Me" / "Resume" buttons,
  social icon row (Email, GitHub, LinkedIn)
- Fixed top nav with smooth-scroll links to every section
- Full-background hero 3D animation removed (didn't land well) — 3D now
  lives only as a small rotating cluster next to the Projects heading
- All content replaced with Saihaj's real information, pulled from her
  live portfolio (saihaj-portfolio.vercel.app) and resume PDF:
  - About, Education (GTBIT, 2025–2029)
  - Skills, grouped by category (Data Analysis, Programming & Databases,
    Visualization, Machine Learning, Web Development, Tools)
  - Learning Journey (5 real steps: fundamentals → data science → ML →
    deep learning → web dev)
  - Projects: Women Safety AI App (🥇 1st place, featured card), USA
    House Price Prediction (with real GitHub link), Expense Tracker
    (with real GitHub link)
  - Experience: AI Research Intern, InAmigos Foundation, Aug 2026
  - Contact: real email (kaursaihaj28@gmail.com), GitHub, LinkedIn
- Resume and internship certificate PDFs embedded directly in the page as
  base64 downloads — no more dependency on the old Vercel-hosted links
- Hover interactions added consistently: Education card, Experience card,
  skill pills, and (most recently) the Journey timeline steps

## Still pending
- **Her actual photo** — the hero photo frame is still a placeholder div.
  Ideally a cutout/transparent PNG, to be dropped into the `.photo-frame`
  blob in place of the placeholder text
- Nothing else outstanding as of the last message — site content,
  structure, and interactions all reflect her confirmed real information

## Known preferences to keep in mind going forward
- Wants to be asked clarifying questions rather than having to repeat
  herself — ask before guessing on ambiguous requests
- Prefers light/pastel over dark themes
- Prefers 3D kept to one deliberate, purposeful spot rather than spread
  across the page
- Likes consistent hover feedback across interactive elements
