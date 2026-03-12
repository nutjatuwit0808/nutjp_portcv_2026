"use client";

import { Github } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import type { CaseStudy } from "@/types/portfolio";
import type { Locale } from "@/lib/i18n";
import { Card } from "@/components/ui/Card";
import { TechTag } from "@/components/ui/TechTag";
import { useExpandable } from "@/hooks/useExpandable";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  locale: Locale;
  githubUrl: string;
  viewOnGitHubLabel: string;
}

export function CaseStudyCard({
  caseStudy,
  locale,
  githubUrl,
  viewOnGitHubLabel,
}: CaseStudyCardProps) {
  const { t } = useLocale();
  const description =
    locale === "th" ? caseStudy.descriptionTH : caseStudy.descriptionEN;
  const { visibleItems, hasMore, hiddenCount, expanded, toggle } = useExpandable(
    caseStudy.tech,
    { initialCount: 5 }
  );

  return (
    <Card
      as="article"
      hover
      minHeight="min-h-[220px]"
      className="transition-colors"
    >
      <h3 className="mb-3 text-xl font-semibold text-white">{caseStudy.title}</h3>
      <div className="mb-3 flex flex-wrap gap-2">
        {caseStudy.domain.map((d) => (
          <TechTag key={d} variant="domain">
            {d}
          </TechTag>
        ))}
      </div>
      <p className="mb-4 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {visibleItems.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
        {hasMore && (
          <button
            type="button"
            onClick={toggle}
            aria-label={
              expanded ? t("caseStudies.showLessTech") : t("caseStudies.viewMoreTech")
            }
            className="cursor-pointer rounded bg-slate-700/80 px-2 py-0.5 text-xs text-slate-500 transition-colors hover:bg-slate-600/80 hover:text-slate-300"
          >
            {expanded ? "−" : `+${hiddenCount}`}
          </button>
        )}
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300"
      >
        <Github size={16} />
        {viewOnGitHubLabel}
      </a>
    </Card>
  );
}
