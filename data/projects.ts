export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "SaaS" | "Automation" | "Tool" | "Data Asset";
  status: "LIVE" | "BETA" | "BUILDING" | "PROFITABLE";
  metrics?: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  codeSnippet?: string;
}

export const projects: Project[] = [
  {
    id: "auto-scraper-v3",
    title: "ApexScrape Engine",
    tagline: "High-throughput headless browser scraper & data pipeline",
    description:
      "Distributed extraction engine running 24/7 on edge workers. Automatically bypasses bot protections, structures unstructured web data, and streams clean JSON to analytics lakes.",
    category: "Automation",
    status: "PROFITABLE",
    metrics: "4.2M Records / Mo • $1.8k MRR",
    techStack: ["Next.js", "TypeScript", "Python", "Playwright", "PostgreSQL", "Redis"],
    demoUrl: "/links",
    githubUrl: "https://github.com",
    featured: true,
    codeSnippet: `// Edge Worker Pipeline\nexport async function handleStream(req: Request) {\n  const worker = new ScrapeCluster({\n    concurrency: 128,\n    stealth: true,\n    cache: 'redis-edge'\n  });\n  return worker.execute(req);\n}`,
  },
  {
    id: "content-matrix-saas",
    title: "OmniMatrix Automation",
    tagline: "Autonomous visual asset generator & multi-platform distributor",
    description:
      "Algorithmic content engine that generates high-converting Pinterest visuals, micro-infographics, and viral distribution assets without manual human intervention.",
    category: "SaaS",
    status: "LIVE",
    metrics: "320k Views / Wk • 100% Automated",
    techStack: ["React", "Tailwind CSS", "Node.js", "Sharp", "Pinterest API"],
    demoUrl: "/links",
    githubUrl: "https://github.com",
    featured: true,
    codeSnippet: `const asset = await Matrix.render({\n  template: 'dark-minimal-v2',\n  palette: ['#0A0A0A', '#00FF9D'],\n  dimensions: { w: 1000, h: 1500 }\n});`,
  },
  {
    id: "affiliate-sentinel",
    title: "AffiliateSentinel AI",
    tagline: "Real-time price & affiliate conversion monitor",
    description:
      "Micro-service that listens to affiliate feed Webhooks, tracks commission volatility across Amazon, Impact, and ShareASale, and automatically updates outbound routing nodes.",
    category: "Tool",
    status: "LIVE",
    metrics: "99.98% Uptime • Sub-50ms Routing",
    techStack: ["Next.js", "TypeScript", "Cloudflare Workers", "D1 SQLite"],
    demoUrl: "/links",
    featured: true,
  },
  {
    id: "terminal-agent-kit",
    title: "GhostTerminal OS",
    tagline: "Minimalist CLI toolkit for anonymous builders",
    description:
      "A fast, zero-telemetry CLI suite to deploy isolated micro-services, manage ephemeral proxies, and track daily MRR directly from your shell.",
    category: "Tool",
    status: "BUILDING",
    metrics: "v0.9.4 Beta • 450+ Stars",
    techStack: ["Rust", "TypeScript", "WebSockets"],
    demoUrl: "/links",
    githubUrl: "https://github.com",
    featured: false,
  },
];
