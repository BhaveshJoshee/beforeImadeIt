"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkItem } from "@/data/links";
import {
  ExternalLink,
  Copy,
  Check,
  Github,
  Terminal,
  Zap,
  ShoppingBag,
  BookOpen,
  ArrowUpRight,
  Pin,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkHubCardProps {
  item: LinkItem;
  index: number;
}

export function LinkHubCard({ item, index }: LinkHubCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(item.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (name: LinkItem["iconName"]) => {
    switch (name) {
      case "pinterest":
        return <Pin className="w-4 h-4 text-rose-400" />;
      case "github":
        return <Github className="w-4 h-4 text-zinc-300" />;
      case "terminal":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case "zap":
        return <Zap className="w-4 h-4 text-amber-400" />;
      case "shopping-bag":
        return <ShoppingBag className="w-4 h-4 text-cyan-400" />;
      case "book":
        return <BookOpen className="w-4 h-4 text-indigo-400" />;
      default:
        return <ExternalLink className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="w-full"
    >
      <Link
        href={item.url}
        target={item.url.startsWith("http") ? "_blank" : "_self"}
        rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#0D1117]/80 hover:bg-[#121822] border border-white/[0.08] hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 active:scale-[0.99]"
      >
        {/* Left Side: Icon & Titles */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-emerald-500/40 group-hover:scale-105 transition-all">
            {getIcon(item.iconName)}
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">
                {item.title}
              </span>
              {item.badge && (
                <span className="px-2 py-0.5 text-[9px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded shrink-0">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-xs text-zinc-400 truncate mt-0.5">
              {item.subtitle}
            </span>
          </div>
        </div>

        {/* Right Side: Copy & Arrow */}
        <div className="flex items-center gap-2 shrink-0 ml-3">
          <button
            onClick={handleCopy}
            aria-label="Copy Link"
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition"
            title="Copy URL"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
