"use client";

import { motion } from "framer-motion";
import {
  SECTION_IDS,
  SECTION_LABELS,
  scrollToSection,
  useScrollSpy,
} from "@/lib/scroll-utils";

export function FloatingSidebar() {
  const activeSection = useScrollSpy();

  return (
    <nav
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      aria-label="Section navigation"
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2 rounded-lg bg-slate-900/40 px-2 py-3 backdrop-blur-sm"
      >
        {SECTION_IDS.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`rounded px-2 py-1 text-xs transition-colors hover:text-blue-400 ${
              activeSection === id
                ? "text-blue-400 font-medium"
                : "text-slate-400"
            }`}
            aria-current={activeSection === id ? "true" : undefined}
          >
            {SECTION_LABELS[id]}
          </button>
        ))}
      </motion.div>
    </nav>
  );
}
