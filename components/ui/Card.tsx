"use client";

import { motion } from "framer-motion";
import { fadeInUpSmall, withStaggerDelay } from "@/lib/motion";

/** class หลักของ card ใช้ร่วมกับ Card และ CardStatic */
export const CARD_BASE =
  "rounded-lg border border-slate-700/50 bg-slate-800/50 p-6";

interface CardProps {
  children: React.ReactNode;
  /** ใช้ motion.article หรือ motion.div */
  as?: "article" | "div";
  /** index สำหรับ staggered animation (ถ้าไม่ใส่จะไม่มี delay) */
  staggerIndex?: number;
  /** class เพิ่มเติม */
  className?: string;
  /** hover effect (border-slate-600) */
  hover?: boolean;
  /** min-height เช่น min-h-[220px] */
  minHeight?: string;
}

/**
 * Card wrapper ที่ใช้ซ้ำ - มี border, bg, rounded และ fade-in animation
 */
export function Card({
  children,
  as: Component = "div",
  staggerIndex,
  className = "",
  hover = false,
  minHeight,
}: CardProps) {
  const MotionComponent = motion[Component] as typeof motion.div;
  const transition =
    staggerIndex !== undefined
      ? withStaggerDelay(staggerIndex)
      : fadeInUpSmall.transition;

  return (
    <MotionComponent
      initial={fadeInUpSmall.initial}
      whileInView={fadeInUpSmall.whileInView}
      viewport={fadeInUpSmall.viewport}
      transition={transition}
      className={`flex flex-col ${CARD_BASE} ${hover ? "transition-colors hover:border-slate-600" : ""} ${minHeight ?? ""} ${className}`}
    >
      {children}
    </MotionComponent>
  );
}

/** Card แบบ static (ไม่มี animation) สำหรับ layout ที่ไม่ต้องการ scroll-trigger */
export function CardStatic({
  children,
  as: Component = "div",
  className = "",
}: Pick<CardProps, "children" | "className"> & {
  as?: "article" | "div" | "section";
}) {
  const Tag = Component;
  return (
    <Tag className={`flex flex-col ${CARD_BASE} ${className}`}>{children}</Tag>
  );
}
