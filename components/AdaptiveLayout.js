"use client";

import { motion } from "framer-motion";
import { uiProfiles } from "../lib/uiProfiles";

export default function AdaptiveLayout({ sessionId, profileKey, children }) {
  const profile = uiProfiles[profileKey] || uiProfiles.CALM;

  const themeClasses =
    profile.themeVariant === "dark-deep"
      ? "bg-gradient-to-b from-black via-bg-dark to-black"
      : profile.themeVariant === "dark-soft"
      ? "bg-bg-dark"
      : "bg-black text-white";

  const densityClasses =
    profile.density === "compact"
      ? "max-w-2xl"
      : profile.density === "normal"
      ? "max-w-3xl"
      : "max-w-xl";

  return (
    <motion.div
      className={`min-h-[calc(100vh-64px)] ${themeClasses} transition-colors duration-500`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={`mx-auto px-4 sm:px-5 py-6 ${densityClasses}`}>
        <motion.div
          className="flex items-center justify-between mb-4 text-xs text-slate-300"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span>
            Session:{" "}
            <span className="font-mono text-slate-100">
              {sessionId.slice(0, 8)}
            </span>
          </span>
          <span className="px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent-soft">
            Mode: {profileKey}
          </span>
        </motion.div>

        <motion.div
          className="glass-card p-4 sm:p-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {profile.showHints && (
            <div className="mb-3 text-[0.7rem] sm:text-xs text-amber-300/90">
              Higher error pattern detected. Controls enlarged and contrast
              boosted for assistance.
            </div>
          )}
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
