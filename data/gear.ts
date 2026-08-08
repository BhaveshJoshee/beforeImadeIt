export interface GearItem {
  id: string;
  name: string;
  category: "Hardware" | "Desk Setup" | "Software Stack" | "Hosting & Cloud";
  specs: string;
  description: string;
  badge?: string;
  affiliateUrl: string;
  isFavorite?: boolean;
}

export const gearCategories = [
  "All",
  "Hardware",
  "Desk Setup",
  "Software Stack",
  "Hosting & Cloud",
] as const;

export const curatedGear: GearItem[] = [
  {
    id: "workstation-m3",
    name: "MacBook Pro M3 Max (64GB)",
    category: "Hardware",
    specs: "16-core CPU • 40-core GPU • 64GB Unified Memory • 2TB SSD",
    description:
      "The primary headless build and development machine. Compiles heavy Rust binaries and runs local 70B LLM agents effortlessly in silent operation.",
    badge: "Primary Workstation",
    affiliateUrl: "/links",
    isFavorite: true,
  },
  {
    id: "monitor-dell-32",
    name: "Dell UltraSharp 32” 4K USB-C Hub (U3223QE)",
    category: "Desk Setup",
    specs: "IPS Black • 2000:1 Contrast • 90W Power Delivery • Daisy-chain",
    description:
      "Incredible deep black levels for dark-mode IDEs and terminal workflows. Built-in KVM allows switching between scrapers and daily driver with one keystroke.",
    badge: "Display",
    affiliateUrl: "/links",
    isFavorite: true,
  },
  {
    id: "keyboard-hhkb",
    name: "HHKB Professional Hybrid Type-S",
    category: "Desk Setup",
    specs: "Topre Electrostatic Capacitive Switches • 45g • Bluetooth 4.2",
    description:
      "The quintessential engineer keyboard. Compact UNIX layout keeps hands centered on home row with unmatched acoustic feedback.",
    badge: "Daily Driver",
    affiliateUrl: "/links",
    isFavorite: true,
  },
  {
    id: "stack-vercel",
    name: "Vercel Enterprise Edge Runtime",
    category: "Hosting & Cloud",
    specs: "Global Anycast • Serverless Functions • Instant Preview Deployments",
    description:
      "Where all frontend assets and micro-SaaS sites live. Zero-ops infrastructure allowing seamless automated deployments straight from GitHub actions.",
    badge: "Hosting",
    affiliateUrl: "/links",
  },
  {
    id: "stack-cloudflare",
    name: "Cloudflare Workers & D1 Edge DB",
    category: "Hosting & Cloud",
    specs: "Sub-10ms Cold Starts • Distributed SQLite • Zero-Egress Storage",
    description:
      "Runs all automated scraping proxies, redirect layers, and low-latency API routers without cold start penalties.",
    badge: "Edge Compute",
    affiliateUrl: "/links",
  },
  {
    id: "software-cursor",
    name: "Cursor IDE & Raycast Pro",
    category: "Software Stack",
    specs: "AI-Augmented Development • Custom Bash Extensions • Quick Scripts",
    description:
      "Essential command center for rapid asset building, multi-file refactors, and clipboard automation.",
    badge: "Tooling",
    affiliateUrl: "/links",
  },
];
