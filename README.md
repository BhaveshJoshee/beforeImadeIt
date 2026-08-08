# Before I Made It — Anonymous Software Studio

A production-ready, Vercel-optimized web platform for **"Before I Made It"**—an anonymous software engineer building automated SaaS products, distributed scrapers, and digital assets in public.

---

## ⚡ Quickstart & Installation Commands

Navigate into the project directory and install all required dependencies:

```bash
cd Before-I-Made-It

# Install dependencies (Next.js, Tailwind CSS, Framer Motion, Lucide, etc.)
npm install

# Run development server
npm run dev
```

The application will be live at `http://localhost:3000`.

---

## 🚀 One-Click Deployment to Vercel

1. Push this directory to your GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit: Before I Made It production scaffold"
git branch -M main
git remote add origin https://github.com/your-username/before-i-made-it.git
git push -u origin main
```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: `Next.js` (detected automatically).
4. Click **Deploy**.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js (App Router, Server Components & Client Interactivity)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Tailored dark slate palette `#0A0A0A`, cyber neon accents `#00FF9D` & `#10B981`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter (Body) & JetBrains Mono (Technical telemetry & terminal code)
- **SEO & Compliance**: Built-in dynamic sitemap, robots.txt, OpenGraph cards, and strict Privacy Policy / FTC Affiliate disclosures for API approvals.

---

## 📂 Project Structure

```
Before-I-Made-It/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, Navbar, Footer, BackgroundGrid
│   ├── page.tsx                # Home: Hero, Manifesto, Live metrics, SaaS grid, Curated Gear
│   ├── globals.css             # Tailwind base, dark scrollbars, custom glow utilities
│   ├── privacy-policy/
│   │   └── page.tsx            # Legal compliance, cookie disclosures & affiliate transparency
│   ├── links/
│   │   └── page.tsx            # Minimal Link Hub (Pinterest, Repos, Gear, Playbooks)
│   ├── robots.ts               # Robots.txt configuration
│   └── sitemap.ts              # Dynamic XML sitemap
├── components/
│   ├── BackgroundGrid.tsx      # Ambient cyber grid & radial glowing beams
│   ├── Navbar.tsx              # Sticky glassmorphic navbar with active indicator & mobile drawer
│   ├── Footer.tsx              # Minimal studio footer with uptime stats & legal routes
│   ├── Hero.tsx                # Bold typography headline, manifesto, and live terminal simulation
│   ├── ProjectCard.tsx         # SaaS & automation card with copyable code snippets
│   ├── GearCard.tsx            # Curated hardware & software items with affiliate badge
│   └── LinkHubCard.tsx         # High-converting link-tree item with copy URL action
├── data/
│   ├── projects.ts             # SaaS products and automation pipelines data
│   ├── gear.ts                 # Curated engineering workstation & cloud stack data
│   └── links.ts                # Link hub categories and destinations
├── lib/
│   └── utils.ts                # Tailwind class merger (clsx + twMerge)
├── tailwind.config.ts          # Custom color tokens & animations
├── tsconfig.json               # Strict TypeScript config
├── package.json                # Project scripts & dependencies
├── vercel.json                 # Security headers and clean URLs
└── README.md
```
