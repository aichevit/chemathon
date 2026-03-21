# Chem-A-Thon 7.0 — Landing Page

> **Initiate. Innovate. Invent.**
> Official landing page for Chem-A-Thon 7.0, the flagship event of AIChE VIT.

## Tech Stack

| Layer       | Library / Tool                     |
|-------------|------------------------------------|
| Framework   | React 18 + TypeScript (TSX)        |
| Build Tool  | Vite 5                             |
| Styling     | Tailwind CSS 3                     |
| Animations  | Framer Motion 11                   |
| Icons       | Lucide React                       |
| Fonts       | Orbitron · Exo 2 · JetBrains Mono |
| Hosting     | Vercel (pre-configured)            |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview build locally
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Molecular canvas + countdown + CTAs
│   ├── About.tsx           # Chem-A-Thon 7.0 & 6.0 overview + stats
│   ├── EventDetails.tsx    # Date / venue / duration / prize grid
│   ├── EventsSection.tsx   # 36-hr hackathon + Chem-E-Car cards
│   ├── Timeline.tsx        # Animated alternating vertical timeline
│   ├── TalkShow.tsx        # Dual speaker cards
│   ├── Sponsors.tsx        # Marquee strip + tier grid + CTA
│   └── Footer.tsx          # Contact info + socials + quick links
├── hooks/
│   └── useCountdown.ts     # Real-time countdown hook
├── App.tsx
├── main.tsx
└── index.css               # Tailwind + custom utilities (glass, neon, etc.)
```

---

## Customisation Checklist

- [ ] **`src/components/Hero.tsx` line 14** — Update `EVENT_DATE` to the actual date
- [ ] **`src/components/EventDetails.tsx`** — Update Date, Venue, Prize Pool values
- [ ] **`src/components/Sponsors.tsx`** — Replace placeholder sponsor names/logos
- [ ] **`src/components/Footer.tsx`** — Verify phone numbers, email, LinkedIn URL
- [ ] **`src/components/TalkShow.tsx`** — Add speaker photos (replace icon placeholders)
- [ ] **Registration link** — Point `#register` hrefs to the actual registration form URL
- [ ] **`index.html`** — Update `og:image` meta tag with a real social preview image

---

## Deploying to Vercel

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — Git integration
# Push to GitHub → import repo in vercel.com → auto-deploy on every push
```

`vercel.json` is pre-configured for SPA routing and Vite builds.

---

## Design Tokens

| Token         | Value        | Usage                      |
|---------------|--------------|----------------------------|
| `chem-dark`   | `#050B1A`    | Primary background         |
| `chem-darker` | `#030710`    | Footer / deep sections     |
| `chem-blue`   | `#00C2FF`    | Primary neon accent        |
| `chem-green`  | `#00FF87`    | Secondary accent           |
| `chem-purple` | `#7B5BF2`    | Tertiary accent            |
| `chem-text`   | `#E8F0FF`    | Primary text               |
| `chem-muted`  | `#6B82A8`    | Secondary / body text      |

---

Built for **Chem-A-Thon 7.0** · AIChE Student Chapter · VIT Vellore
