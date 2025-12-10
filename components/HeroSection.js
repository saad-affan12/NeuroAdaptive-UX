"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-5">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          An interface that
          <span className="text-accent-soft"> adapts to your stress</span>.
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base text-slate-300"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          This demo tracks keystrokes, errors, and mouse speed in the browser
          and switches UI mode without any external services.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Link
            href="/session"
            className="px-5 py-2 text-sm rounded-full bg-accent-soft text-slate-950 font-medium shadow-glow hover:scale-105 transition-transform"
          >
            Start Adaptive Session
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="relative h-64 sm:h-80 glass-card overflow-hidden mt-4 md:mt-0"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.15 } }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/10 to-emerald-400/10" />
        <div className="relative h-full flex flex-col justify-center px-6 gap-4 text-xs text-slate-200">
          <div className="uppercase tracking-[0.2em] text-slate-300">
            Live Telemetry (sample)
          </div>
          <div>Keystrokes/min, error rate, mouse speed → UI mode.</div>
        </div>
      </motion.div>
    </section>
  );
}
