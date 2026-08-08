"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { GearCard } from "@/components/GearCard";
import { projects, Project } from "@/data/projects";
import { curatedGear, gearCategories } from "@/data/gear";
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>("All");
  const [activeGearFilter, setActiveGearFilter] = useState<string>("All");

  const projectCategories = ["All", "SaaS", "Automation", "Tool", "Data Asset"];

  const filteredProjects =
    activeProjectFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeProjectFilter);

  const filteredGear =
    activeGearFilter === "All"
      ? curatedGear
      : curatedGear.filter((g) => g.category === activeGearFilter);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <Hero />

      {/* Projects & SaaS Tools Section */}
      <section id="projects" className="w-full max-w-5xl px-4 sm:px-6 py-16 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1.5">
              <Layers className="w-4 h-4" />
              <span>ACTIVE_REVENUE_ENGINES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              SaaS & Automation Pipelines
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Production systems designed for 24/7 autonomous uptime. Distributed scrapers, content engines,
              and API micro-tools built to generate asset value.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectFilter(cat)}
                className={cn(
                  "px-3 py-1 text-xs font-mono rounded-lg transition-all border",
                  activeProjectFilter === cat
                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-neon-sm"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border-white/[0.06] hover:bg-white/[0.06]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Philosophy / Zero Face Anonymous Manifesto Banner */}
      <section className="w-full max-w-5xl px-4 sm:px-6 py-10">
        <div className="rounded-2xl bg-gradient-to-b from-[#0D1117] to-[#0A0A0A] border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                THE_ANONYMOUS_BUILDER_ETHOS
              </h3>
              <p className="text-xs text-emerald-400/80 font-mono mt-1">
                Execution &gt; Personality
              </p>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center gap-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <p>
                In an attention economy dominated by vanity metrics, building under an anonymous banner shifts
                100% of focus onto pure product utility, reliable automation architectures, and verified
                outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "No influencer fluff or face videos",
                  "Automated cron jobs generating cashflow",
                  "High-leverage open-source codebases",
                  "Affiliate transparency & legal compliance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Workstation & Tech Stack Grid */}
      <section id="gear" className="w-full max-w-5xl px-4 sm:px-6 py-16 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
              <Cpu className="w-4 h-4" />
              <span>HARDWARE_&_CLOUD_RUNTIME</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Curated Engineering Gear & Stack
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              The exact workstation hardware, mechanical peripherals, and edge hosting infrastructure used to
              compile and operate our continuous product engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {gearCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGearFilter(cat)}
                className={cn(
                  "px-3 py-1 text-xs font-mono rounded-lg transition-all border",
                  activeGearFilter === cat
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-neon-cyan"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border-white/[0.06] hover:bg-white/[0.06]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGear.map((item, idx) => (
            <GearCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </section>

      {/* CTA To Minimal Link Hub */}
      <section className="w-full max-w-5xl px-4 sm:px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-[#0D1117] via-[#111827] to-[#0D1117] border border-white/[0.12] p-8 sm:p-12 text-center flex flex-col items-center relative overflow-hidden shadow-2xl">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
            <Zap className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight max-w-xl">
            Looking for Curated Pinterest Boards, Repos & Affiliate Links?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-md">
            Our custom link hub routes all traffic to verified open-source repositories, architectural blueprints,
            and developer deals.
          </p>

          <Link
            href="/links"
            className="mt-8 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm shadow-neon-md transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Open Minimal Link Hub</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
