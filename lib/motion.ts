/**
 * คอนฟิก animation สำหรับ framer-motion ที่ใช้ซ้ำทั่วทั้งโปรเจกต์
 * ใช้ร่วมกับ motion.div / motion.article เพื่อลดความซ้ำซ้อน
 */

/** animation สำหรับ section หลัก (opacity + y: 20) */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.5 },
} as const;

/** animation สำหรับ card/item ย่อย (opacity + y: 10) */
export const fadeInUpSmall = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.4 },
} as const;

/** สร้าง transition พร้อม delay สำหรับ staggered animation */
export function withStaggerDelay(index: number, baseDuration = 0.4) {
  return { duration: baseDuration, delay: index * 0.1 };
}
