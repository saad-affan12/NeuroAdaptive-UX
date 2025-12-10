"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-bg-dark/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-accent to-purple-500 shadow-glow" />
          <div className="text-sm font-semibold tracking-tight">
            NeuroAdaptive UX
          </div>
        </motion.div>

        <motion.nav
          className="hidden sm:flex items-center gap-6 text-xs text-slate-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <Link href="/">Overview</Link>
          <Link href="/session">Live Demo</Link>
        </motion.nav>
      </div>
    </header>
  );
}
