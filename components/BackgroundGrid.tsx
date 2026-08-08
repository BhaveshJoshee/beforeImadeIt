"use client";

import React from "react";
import { motion } from "framer-motion";

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark Slate Base */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Cyber Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)",
        }}
      />

      {/* Ambient Neon Glow Top-Center (Emerald & Cyan) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-transparent rounded-full blur-[120px]"
      />

      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px]" />
    </div>
  );
}
