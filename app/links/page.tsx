"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkHubCard } from "@/components/LinkHubCard";
import { linkHubData, linkCategories } from "@/data/links";
import { Terminal, Shield, ArrowLeft, Zap, Search, Pin, Github, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LinksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLinks = linkHubData.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-28 sm:py-36 px-4 sm:px-6 max-w-2xl mx-auto flex flex-col items-center">
      {/* Back Link */}
      <div className="w-full flex items-center justify-between mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK_TO_ROOT</span>
        </Link>
        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ROUTING_ACTIVE</span>
        </div>
      </div>

      {/* Profile / Brand Header (Anonymous High-Tech Studio) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center mb-8 w-full"
      >
        {/* Brand Icon Monogram */}
        <div className="w-16 h-16 rounded-2xl bg-black border border-white/20 flex items-center justify-center text-emerald-400 shadow-neon-md mb-4 relative group">
          <Terminal className="w-8 h-8 text-emerald-400" />
          <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
          BEFORE_I_MADE_IT
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-sm">
          Verified directory of Pinterest boards, automated SaaS engines, open-source repositories, and
          curated developer gear.
        </p>

        {/* Quick Quicklinks Pills */}
        <div className="flex items-center gap-2 mt-4">
          <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-zinc-400">
            0% Face / 100% Code
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
            Verified Links
          </span>
        </div>
      </motion.div>

      {/* Search Input */}
      <div className="w-full relative mb-6">
        <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Pinterest, Repos, Gear, or Playbooks..."
          className="w-full bg-[#0D1117] border border-white/[0.1] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50 transition font-mono"
        />
      </div>

      {/* Category Pills */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
        {linkCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono rounded-xl transition whitespace-nowrap border shrink-0",
              activeCategory === cat
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-neon-sm"
                : "bg-white/[0.03] text-zinc-400 hover:text-white border-white/[0.06] hover:bg-white/[0.06]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Link Items Stack */}
      <div className="w-full flex flex-col gap-3.5">
        {filteredLinks.length > 0 ? (
          filteredLinks.map((item, idx) => (
            <LinkHubCard key={item.id} item={item} index={idx} />
          ))
        ) : (
          <div className="text-center py-12 text-zinc-500 text-xs font-mono border border-dashed border-white/10 rounded-2xl">
            No matching links found for &ldquo;{searchQuery}&rdquo; in {activeCategory}.
          </div>
        )}
      </div>

      {/* Affiliate & Legal Footer Note */}
      <div className="mt-12 text-center text-[10px] text-zinc-400 font-mono flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-zinc-400" />
          <span>All outbound links verified & compliant with FTC affiliate disclosures.</span>
        </div>
        <Link href="/privacy-policy" className="text-emerald-400 hover:underline">
          Read Privacy Policy & Disclosure Protocols
        </Link>
      </div>
    </div>
  );
}
