"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Github, Check, Copy, ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const statusColors = {
    PROFITABLE: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    LIVE: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    BETA: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    BUILDING: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-[#0D1117]/80 border border-white/[0.08] hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 backdrop-blur-xl"
    >
      {/* Top Header & Status */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border flex items-center gap-1.5",
                statusColors[project.status]
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              {project.status}
            </span>
            <span className="text-[11px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.05]">
              {project.category}
            </span>
          </div>

          {project.metrics && (
            <span className="text-[11px] font-mono text-emerald-300/90 font-medium">
              {project.metrics}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-emerald-400" />
        </h3>
        <p className="text-xs font-mono text-emerald-400/80 mt-1">{project.tagline}</p>

        {/* Description */}
        <p className="text-xs text-zinc-400 mt-3 leading-relaxed">{project.description}</p>

        {/* Code Snippet Box (if available) */}
        {project.codeSnippet && (
          <div className="mt-4 rounded-lg bg-black/60 border border-white/[0.06] p-3 text-[11px] font-mono relative overflow-hidden text-zinc-300 group/code">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 mb-1 pb-1 border-b border-white/[0.05]">
              <span>architecture_preview.ts</span>
              <button
                onClick={copySnippet}
                className="hover:text-emerald-400 flex items-center gap-1 transition"
                title="Copy code snippet"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
            </div>
            <pre className="overflow-x-auto text-emerald-300/90 leading-tight">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Footer Tech Stack & Links */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.05]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition"
              title="View Repository"
            >
              <Github className="w-4 h-4" />
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black shadow-neon-sm transition active:scale-95"
            >
              <span>Explore</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
