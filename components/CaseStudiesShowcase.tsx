"use client";

import { useLocale } from "@/context/LocaleContext";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Section } from "@/components/ui/Section";
import type { CaseStudiesData } from "@/types/portfolio";
import caseStudiesData from "@/data/case-studies.json";

export function CaseStudiesShowcase() {
  const { locale, t } = useLocale();
  const items = caseStudiesData.items.sort((a, b) => a.order - b.order);
  const featured = items.filter((i) => i.featured);
  const rest = items.filter((i) => !i.featured);

  return (
    <Section id="case-studies" maxWidth="5xl">
      <h2 className="mb-2 text-3xl font-bold text-white">
        {t("caseStudies.title")}
      </h2>
      <p className="mb-8 text-slate-400">{t("caseStudies.subtitle")}</p>

      {featured.length > 0 && (
        <div className="mb-8">
          <p className="mb-4 text-sm font-medium text-blue-400">
            {t("caseStudies.featured")}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <CaseStudyCard
                key={item.id}
                caseStudy={item}
                locale={locale}
                githubUrl={`${caseStudiesData.repoBaseUrl}/${item.folder}`}
                viewOnGitHubLabel={t("caseStudies.viewOnGitHub")}
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <CaseStudyCard
            key={item.id}
            caseStudy={item}
            locale={locale}
            githubUrl={`${caseStudiesData.repoBaseUrl}/${item.folder}`}
            viewOnGitHubLabel={t("caseStudies.viewOnGitHub")}
          />
        ))}
      </div>
    </Section>
  );
}
