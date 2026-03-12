/** variant ของ TechTag */
export type TechTagVariant = "default" | "domain" | "pill";

interface TechTagProps {
  children: string;
  variant?: TechTagVariant;
}

const VARIANT_CLASS: Record<TechTagVariant, string> = {
  default: "rounded bg-slate-700/80 px-2 py-0.5 text-xs text-slate-300",
  domain: "rounded bg-blue-500/20 px-2 py-0.5 text-xs text-blue-300",
  pill: "rounded-full bg-slate-700/80 px-3 py-1 text-sm text-slate-200",
};

/**
 * Tag แสดง tech/skill - ใช้ซ้ำใน CaseStudyCard, FeaturedProjects, TechnicalArsenal
 */
export function TechTag({ children, variant = "default" }: TechTagProps) {
  return <span className={VARIANT_CLASS[variant]}>{children}</span>;
}
