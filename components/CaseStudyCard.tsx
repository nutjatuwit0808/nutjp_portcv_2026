"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import type { CaseStudy } from "@/types/portfolio";
import type { Locale } from "@/lib/i18n";

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
  const description =
    locale === "th" ? caseStudy.descriptionTH : caseStudy.descriptionEN;

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex h-full min-h-[220px] flex-col rounded-lg border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-slate-600"
    >
      <h3 className="mb-3 text-xl font-semibold text-white">{caseStudy.title}</h3>
      <div className="mb-3 flex flex-wrap gap-2">
        {caseStudy.domain.map((d) => (
          <span
            key={d}
            className="rounded bg-blue-500/20 px-2 py-0.5 text-xs text-blue-300"
          >
            {d}
          </span>
        ))}
      </div>
      <p className="mb-4 flex-1 line-clamp-3 text-sm text-slate-400 leading-relaxed">
        {description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        {caseStudy.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded bg-slate-700/80 px-2 py-0.5 text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
        {caseStudy.tech.length > 5 && (
          <span className="rounded bg-slate-700/80 px-2 py-0.5 text-xs text-slate-500">
            +{caseStudy.tech.length - 5}
          </span>
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
    </motion.article>
  );
}
