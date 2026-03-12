"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

type MaxWidth = "xl" | "3xl" | "4xl" | "5xl";

const MAX_WIDTH_CLASS: Record<MaxWidth, string> = {
  xl: "max-w-xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
};

interface SectionProps {
  id: string;
  /** max-width ของ content ภายใน */
  maxWidth?: MaxWidth;
  children: React.ReactNode;
}

/**
 * Section wrapper ที่ใช้ซ้ำ - มี scroll-mt, padding, และ fade-in animation
 */
export function Section({ id, maxWidth = "4xl", children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 px-6 py-20">
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.whileInView}
        viewport={fadeInUp.viewport}
        transition={fadeInUp.transition}
        className={`mx-auto ${MAX_WIDTH_CLASS[maxWidth]}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
