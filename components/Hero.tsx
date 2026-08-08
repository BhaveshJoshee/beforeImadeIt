"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 flex flex-col items-center text-center">
      {/* Top Tagline Pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] text-zinc-300 text-xs font-mono mb-8 shadow-inner"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-zinc-400">ENGINEERING_LOG //</span>
        <span className="text-emerald-400 font-medium">AUTONOMOUS_ASSET_CREATION</span>
      </motion.div>

      {/* Main Bold Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.08]"
      >
        Building Assets. <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
          Writing Code.
        </span>{" "}
        <br className="hidden sm:inline" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
          Documenting The Process.
        </span>
      </motion.h1>

      {/* Manifesto */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed"
      >
        Trading time for linear income is an outdated paradigm. I build autonomous SaaS products,
        distributed automation pipelines, and scalable digital assets in public—refining the
        architecture until code works harder than human effort.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <Link
          href="#projects"
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm shadow-neon-md transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Explore Projects & SaaS</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <Link
          href="/links"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.12] font-medium text-sm transition-all flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4 text-emerald-400" />
          <span>Access Minimal Link Hub</span>
        </Link>
      </motion.div>

      {/* Live Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
      >
        {[
          { label: "Active Pipelines", val: "4 Micro-SaaS", sub: "24/7 autonomous uptime" },
          { label: "Data Throughput", val: "4.2M Records", sub: "Monthly web stream" },
          { label: "Architecture", val: "Edge & Serverless", sub: "Sub-50ms latency" },
          { label: "Human Faces Used", val: "0.00%", sub: "100% anonymous & pure code" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-[#0D1117]/70 border border-white/[0.08] backdrop-blur-md flex flex-col justify-between group hover:border-emerald-500/40 transition-colors"
          >
            <span className="text-[11px] font-mono text-zinc-500 uppercase">{item.label}</span>
            <div className="text-lg sm:text-xl font-bold font-mono text-white mt-1 group-hover:text-emerald-300 transition-colors">
              {item.val}
            </div>
            <span className="text-[10px] text-zinc-400 mt-1">{item.sub}</span>
          </div>
        ))}
      </motion.div>

      {/* High-Tech Terminal Simulation Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 w-full max-w-4xl rounded-2xl bg-[#0B0F15] border border-white/[0.12] shadow-2xl text-left overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#080B10] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-400">
              engine@before-i-made-it:~/pipeline-v4
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>CRON_ACTIVE</span>
          </div>
        </div>

        {/* Terminal Code Body */}
        <div className="p-5 font-mono text-xs text-zinc-300 space-y-2 overflow-x-auto">
          <div className="text-zinc-500">// Deploying Next.js edge runtime & automated scrapers...</div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-white">apex-scrape deploy --cluster=edge-workers-us-east --stealth</span>
          </div>
          <div className="text-emerald-400/90 pl-4">
            ✔ Verified proxy network (1,024 rotating IPs)
            <br />
            ✔ Ingesting Pinterest trend signals & Amazon affiliate feeds
            <br />
            ✔ Zero personal branding detected. Brand output: PURE CODE & REVENUE
          </div>
          <div className="flex items-center gap-2 pt-1 text-zinc-400">
            <span className="text-emerald-400">&gt;</span>
            <span className="animate-pulse">Status: Listening for incoming webhooks [200 OK]</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
