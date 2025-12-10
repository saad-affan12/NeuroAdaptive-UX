"use client";

import { useMemo, useState } from "react";
import AdaptiveLayout from "../../components/AdaptiveLayout";
import BehaviourTracker from "../../components/BehaviourTracker";

function createSessionId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2);
}

export default function SessionPage() {
  const [profileKey, setProfileKey] = useState("CALM");
  const sessionId = useMemo(() => createSessionId(), []);

  return (
    <AdaptiveLayout sessionId={sessionId} profileKey={profileKey}>
      <BehaviourTracker onProfileChange={setProfileKey} />

      <h1 className="text-lg sm:text-xl font-semibold mb-3">
        Live NeuroAdaptive Session
      </h1>
      <p className="text-xs sm:text-sm text-slate-300 mb-4">
        Type and move your mouse naturally. The interface will adapt based on
        your behaviour using a simple heuristic in the API route.
      </p>

      <form
        className="space-y-3 sm:space-y-4 text-xs sm:text-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-1">
          <label className="block text-slate-200">Email address</label>
          <input
            type="email"
            className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 focus:outline-none focus:border-accent-soft/80 text-slate-100"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-slate-200">What task are you doing?</label>
          <input
            type="text"
            className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 focus:outline-none focus:border-accent-soft/80"
            placeholder="e.g., paying a bill, filling a form..."
          />
        </div>

        <div className="space-y-1">
          <label className="block text-slate-200">
            Describe your experience so far
          </label>
          <textarea
            className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 focus:outline-none focus:border-accent-soft/80 min-h-[90px]"
            placeholder="Type freely. The system will adapt."
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 bg-accent-soft text-slate-950 font-medium shadow-glow hover:scale-105 active:scale-95 transition-transform"
        >
          Submit feedback
        </button>
      </form>
    </AdaptiveLayout>
  );
}
