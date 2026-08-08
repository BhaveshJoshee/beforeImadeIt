export interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  category: "Pinterest" | "Affiliates & Gear" | "Open Source & Code" | "Products & Playbooks";
  badge?: string;
  iconName: "pinterest" | "github" | "terminal" | "zap" | "shopping-bag" | "book" | "external";
  isFeatured?: boolean;
}

export const linkCategories = [
  "All",
  "Pinterest",
  "Products & Playbooks",
  "Affiliates & Gear",
  "Open Source & Code",
] as const;

export const linkHubData: LinkItem[] = [
  {
    id: "pinterest-dark-tech",
    title: "Minimalist Dark Tech & Workstation Aesthetics",
    subtitle: "Curated Pinterest Board • 100k+ Monthly Impressions • Workspace Inspiration",
    url: "https://in.pinterest.com/nocturnestudeo",
    category: "Pinterest",
    badge: "Trending",
    iconName: "pinterest",
    isFeatured: true,
  },
  {
    id: "pinterest-digital-assets",
    title: "Digital Asset Systems & Product Blueprint Pins",
    subtitle: "Visual breakdowns of automated micro-SaaS architecture and workflows",
    url: "https://in.pinterest.com/nocturnestudeo",
    category: "Pinterest",
    iconName: "pinterest",
  },
  {
    id: "apex-scraper-source",
    title: "ApexScrape Edge Engine (GitHub Repo)",
    subtitle: "Open-source core of our distributed Playwright scraper & edge pipeline",
    url: "https://github.com",
    category: "Open Source & Code",
    badge: "MIT License",
    iconName: "github",
    isFeatured: true,
  },
  {
    id: "nextjs-boilerplate-minimal",
    title: "Vercel-Ready Dark Studio Template",
    subtitle: "The exact Next.js 14 + Tailwind + Framer Motion foundation powering this site",
    url: "https://github.com",
    category: "Open Source & Code",
    badge: "Free",
    iconName: "terminal",
  },
  {
    id: "gear-m3-max",
    title: "MacBook Pro M3 Max Engineering Config",
    subtitle: "Direct Amazon link to the exact spec used for all 24/7 product compilations",
    url: "https://amazon.com",
    category: "Affiliates & Gear",
    badge: "Daily Driver",
    iconName: "shopping-bag",
    isFeatured: true,
  },
  {
    id: "gear-dell-4k",
    title: "Dell UltraSharp 32” 4K IPS Black Monitor",
    subtitle: "High-contrast monitor tuned specifically for endless dark-mode code sessions",
    url: "https://amazon.com",
    category: "Affiliates & Gear",
    iconName: "shopping-bag",
  },
  {
    id: "gear-hhkb",
    title: "HHKB Professional Hybrid Type-S Keyboard",
    subtitle: "Topre switch keyboard for ultra-fast, fatigue-free terminal scripting",
    url: "https://amazon.com",
    category: "Affiliates & Gear",
    iconName: "shopping-bag",
  },
  {
    id: "playbook-automation",
    title: "The $0 to $5k Micro-Automation Playbook",
    subtitle: "Step-by-step markdown documentation on building self-sustaining web scrapers",
    url: "/#projects",
    category: "Products & Playbooks",
    badge: "Guide",
    iconName: "book",
  },
];
