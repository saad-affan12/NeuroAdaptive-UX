"use client";

import { useEffect, useRef } from "react";

export default function BehaviourTracker({ onProfileChange }) {
  const keyCount = useRef(0);
  const errorCount = useRef(0);
  const lastMouse = useRef(null);

  useEffect(() => {
    const keyHandler = (e) => {
      keyCount.current++;
      if (e.key === "Backspace" || e.key === "Delete") {
        errorCount.current++;
      }
    };

    const mouseHandler = (e) => {
      const now = performance.now();
      if (lastMouse.current) {
        const dt = (now - lastMouse.current.t) / 1000;
        if (dt > 0) {
          const dx = e.clientX - lastMouse.current.x;
          const dy = e.clientY - lastMouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const speed = dist / dt;
          sendSnapshot({ mouseSpeed: speed });
        }
      }
      lastMouse.current = { t: now, x: e.clientX, y: e.clientY };
    };

    const interval = setInterval(() => {
      const kpm = keyCount.current * 12;
      const errors = errorCount.current;
      keyCount.current = 0;
      errorCount.current = 0;
      sendSnapshot({ keystrokesPerMinute: kpm, errorsCount: errors });
    }, 5000);

    async function sendSnapshot(payload) {
      try {
        const res = await fetch("/api/adapt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!res.ok) return;
        const data = await res.json();
        onProfileChange(data.uiProfileKey);
      } catch (e) {
        // ignore in demo
      }
    }

    window.addEventListener("keydown", keyHandler);
    window.addEventListener("mousemove", mouseHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
      window.removeEventListener("mousemove", mouseHandler);
      clearInterval(interval);
    };
  }, [onProfileChange]);

  return null;
}
