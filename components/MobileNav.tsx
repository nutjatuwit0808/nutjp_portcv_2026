"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SECTION_IDS,
  SECTION_LABELS,
  scrollToSection,
} from "@/lib/scroll-utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 top-4 z-50 rounded-lg bg-slate-800/80 p-2 text-slate-200 backdrop-blur-sm lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-2 bg-slate-900 p-6 pt-16 shadow-xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded p-2 text-slate-400 hover:text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              {SECTION_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => handleLinkClick(id)}
                  className="rounded px-3 py-2 text-left text-slate-200 transition-colors hover:bg-slate-800 hover:text-blue-400"
                >
                  {SECTION_LABELS[id]}
                </button>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
