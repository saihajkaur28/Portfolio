# DESIGN — Saihaj Kaur Portfolio

## Direction
Light, pastel, and playful — a deliberate move away from the dark/neon
"tech portfolio" cliché, while still reading as AI/ML-focused through one
purposeful 3D moment rather than generic effects everywhere.

## Color palette
| Token      | Hex       | Used for |
|------------|-----------|----------|
| `--bg`     | `#F5F1FF` | Page background (light lavender) |
| `--panel`  | `#EAF8F0` | Alternating section background (mint) |
| `--violet` | `#7C5CFC` | Primary accent — buttons, links, headline highlight |
| `--mint`   | `#2BBE8C` | Secondary accent |
| `--coral`  | `#FF8A65` | Tertiary accent — stats, badges |
| `--text`   | `#211D33` | Body text |
| `--dim`    | `#5B5673` | Secondary/muted text |
| `--card`   | `#FFFFFF` | Card and pill surfaces |

Sections alternate between `--bg` and `--panel` to create rhythm without
needing borders or dividers everywhere.

## Typography
- **Headings:** `Unbounded` (weights 500/700/900) — chunky, geometric,
  gives the site its "playful but bold" personality
- **Body:** `Space Grotesk` (weights 400/500/600) — techy, legible,
  pairs cleanly with Unbounded without competing with it

## Layout patterns
- **Buttons:** fully rounded pills (`border-radius: 999px`), solid violet
  for primary actions, outlined for secondary
- **Cards:** 20px rounded corners, soft drop shadow, white surface on
  tinted section backgrounds
- **Hero photo frame:** an organic blob shape (irregular `border-radius`
  percentages) rather than a plain rectangle, with small floating accent
  dots and a triangle — modeled on the reference hero designs Saihaj
  shared (name/tagline left, cutout photo right, pill CTA buttons, social
  icon row underneath)
- **Projects:** one "featured" card spans two grid columns (used for the
  1st-place project) so the grid has visual hierarchy instead of three
  identical boxes
- **Journey:** numbered timeline (01–05), since it's a genuine sequence of
  stages rather than an arbitrary list

## Motion
- **Hover lift:** cards (Education, Experience, Projects) and skill pills
  lift slightly (`translateY(-6px)` or similar) with a soft shadow on
  hover
- **Journey hover:** each step shifts right slightly and its number pops
  in coral on hover, for consistency with the rest of the page
- **Hero dots:** two small accent dots float gently up and down
  (CSS `@keyframes`), paused under `prefers-reduced-motion`
- **3D cluster (Projects section):** three rotating shapes, tilting
  toward the mouse — the one deliberate "wow" moment on the page

## Personality touches
- **Mantra section:** a single bold statement ("I'd rather experiment and
  build than just read about it.") on a solid violet background — the
  one place the palette inverts, used sparingly for impact
- **Stats strip:** three real numbers (1st place win, 3 projects shipped,
  7 skill areas) instead of generic filler text, to make an immediate
  impression before the reader scrolls further

## What was deliberately avoided
- Dark theme (explicitly rejected)
- Generic floating 3D shapes with no purpose
- A full 3D background behind the hero photo (felt distracting — removed)
- Identical repeating section rhythm (heading → paragraph → list on every
  section) — broken up with the mantra, stats, and featured project card
