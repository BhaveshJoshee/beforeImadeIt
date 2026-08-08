"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Link2, ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Projects & Tools", href: "/#projects" },
    { name: "Curated Gear", href: "/#gear" },
    { name: "Link Hub", href: "/links", badge: "Live" },
    { name: "Privacy", href: "/privacy-policy" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <div
        className={cn(
          "w-full max-w-5xl transition-all duration-300 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between border",
          scrolled
            ? "bg-[#0D1117]/80 backdrop-blur-xl border-white/[0.12] shadow-2xl shadow-black/50"
            : "bg-[#0D1117]/50 backdrop-blur-md border-white/[0.08]"
        )}
      >
        {/* Brand Logo / Monogram */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-black border border-white/15 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/60 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all">
            <Terminal className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5 font-mono">
              BEFORE_I_MADE_IT
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-mono">
              Anonymous Software Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5",
                  isActive
                    ? "text-white bg-white/[0.06]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                )}
              >
                {item.name}
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Live Status */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>BUILDING_IN_PUBLIC</span>
          </div>

          <Link
            href="/links"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black shadow-neon-sm transition-all active:scale-95"
          >
            <span>Enter Hub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-[#0D1117]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl z-50 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM_ONLINE
              </div>
              <span className="text-[10px] text-zinc-500 font-mono">V2.4.0</span>
            </div>

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-2 text-sm text-zinc-300 hover:text-white font-medium transition"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}

            <Link
              href="/links"
              onClick={() => setMobileOpen(false)}
              className="mt-2 w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-emerald-500 text-black shadow-neon-sm flex items-center justify-center gap-1.5"
            >
              <span>Explore All Links & Assets</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
