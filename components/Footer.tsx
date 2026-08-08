"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Shield, ArrowUpRight, GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0A0A0A] text-zinc-400 text-xs py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white font-mono font-semibold text-sm">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>BEFORE_I_MADE_IT</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              An autonomous digital studio documenting the engineering journey of building scalable
              SaaS automation tools, high-throughput data pipelines, and self-sustaining online assets.
              Zero faces. Pure code and metrics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-zinc-400">
                <GitBranch className="w-3 h-3 text-emerald-400" />
                <span>BUILD: 2026.08.PROD</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>UPTIME: 99.99%</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-200 font-semibold">
              Navigation
            </span>
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Overview & Manifesto
            </Link>
            <Link href="/#projects" className="hover:text-emerald-400 transition-colors">
              SaaS & Automation Grid
            </Link>
            <Link href="/#gear" className="hover:text-emerald-400 transition-colors">
              Curated Engineering Gear
            </Link>
            <Link href="/links" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <span>Minimal Link Hub</span>
              <ArrowUpRight className="w-3 h-3 text-emerald-400" />
            </Link>
          </div>

          {/* Legal & Compliance */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-200 font-semibold">
              Compliance
            </span>
            <Link
              href="/privacy-policy"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3 text-zinc-400" />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/privacy-policy#affiliates" className="hover:text-emerald-400 transition-colors">
              Affiliate Disclosures
            </Link>
            <Link href="/privacy-policy#cookies" className="hover:text-emerald-400 transition-colors">
              Cookie Preferences
            </Link>
            <Link href="/privacy-policy#terms" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Bottom Bar & Affiliate Notice */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 font-mono">
          <div>
            © {new Date().getFullYear()} BEFORE I MADE IT. ALL ASSETS & CODE PROTECTED.
          </div>
          <div className="text-zinc-400 text-center sm:text-right">
            Participant in select affiliate programs. We earn referral fees on verified hardware & tool purchases.
          </div>
        </div>
      </div>
    </footer>
  );
}
