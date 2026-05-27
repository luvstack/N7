# N7 — Banking Platform Landing Page

A modern, fully responsive landing page for **N7 & CB7** banking solutions, built with React + Vite and styled with Tailwind CSS v4.

---

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool with HMR
- **Tailwind CSS v4** — utility-first styling
- **Inter** — primary font (via Google Fonts)

---

## Project Structure

```
src/
├── assets/              # Images, logos, icons
├── components/
│   ├── Navbar.jsx        # Responsive navbar with hamburger menu
│   ├── Banner.jsx        # Hero section (section 1)
│   ├── Solutions.jsx     # Solutions grid (section 2)
│   ├── CloudBanking.jsx  # Cloud banking feature (section 3)
│   ├── CoreBankingFeatures.jsx  # CKYC feature (section 4)
│   ├── CallToAction.jsx  # CTA card with ghost text (section 5)
│   ├── MarqueeBanner.jsx # Infinite scrolling ticker (section 6)
│   ├── DigitalBanking.jsx # Digital banking showcase (section 7)
│   ├── Insights.jsx      # Fintech blog/articles (section 8)
│   ├── CaseStudies.jsx   # Case studies carousel (section 9)
│   ├── CtaBanner.jsx     # Full-width CTA (section 10)
│   └── Footer.jsx        # Footer with N7 logo + links (section 11)
└── pages/
    └── Index.jsx         # Page composition
```

---

## Sections

| # | Component | Description |
|---|---|---|
| 1 | `Banner` | Hero with headline, hero image, and trusted-by logos |
| 2 | `Solutions` | Sticky left heading + 2-col solutions grid with icons |
| 3 | `CloudBanking` | AML dashboard mockup with grid background |
| 4 | `CoreBankingFeatures` | CKYC laptop mockup + feature checklist |
| 5 | `CallToAction` | Dark card with ghost CB7/B7 text + CTA buttons |
| 6 | `MarqueeBanner` | Infinite scrolling ticker with hand wave and star icons |
| 7 | `DigitalBanking` | Light-gradient section with 3 iPhone mockups + features |
| 8 | `Insights` | Featured + two smaller fintech article cards |
| 9 | `CaseStudies` | 3D depth carousel with dot indicators |
| 10 | `CtaBanner` | Full-width dark CTA strip |
| 11 | `Footer` | N7 logo, office addresses, nav links, copyright |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Notes

- All section images and logos are stored in `src/assets/`
- The site is fully mobile responsive with a hamburger navbar on small screens
- The CaseStudies carousel degrades gracefully to a single-card layout on mobile
