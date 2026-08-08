"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GearItem } from "@/data/gear";
import { ArrowUpRight, Cpu, Star } from "lucide-react";

interface GearCardProps {
  item: GearItem;
  index: number;
}

export function GearCard({ item, index }: GearCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-xl bg-[#0D1117]/60 border border-white/[0.07] hover:border-emerald-500/40 p-5 flex flex-col justify-between transition-all duration-300 hover:bg-[#0D1117]/90"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            {item.category}
          </span>
          {item.badge && (
            <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
              <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              {item.badge}
            </span>
          )}
        </div>

        <h4 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
          {item.name}
        </h4>

        <div className="text-[11px] font-mono text-zinc-400 mt-1 mb-2 bg-white/[0.03] p-2 rounded border border-white/[0.04]">
          {item.specs}
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
      </div>

      <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-[10px] font-mono text-zinc-400">Verified Setup</span>
        <Link
          href={item.affiliateUrl}
          className="text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group/btn"
        >
          <span>View Spec & Link</span>
          <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
