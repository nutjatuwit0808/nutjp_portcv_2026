"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TechTag } from "@/components/ui/TechTag";

const PROJECT_KEYS = [
  {
    key: "locable",
    tech: ["k6", ".geojson", "Performance", "Geospatial", "Vector Tiles"],
  },
  {
    key: "promptx",
    tech: ["React.js", "TypeScript", "AI", "Oneweb", "No-Code"],
  },
  {
    key: "zero",
    tech: ["React.js", "TypeScript", "Oneweb", "Low-Code", "UI Kit"],
  },
] as const;

export function FeaturedProjects() {
  const { t } = useLocale();

  return (
    <Section id="projects" maxWidth="4xl">
      <h2 className="mb-2 text-3xl font-bold text-white">
        {t("projects.title")}
      </h2>
      <p className="mb-8 text-slate-400">{t("projects.subtitle")}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECT_KEYS.map((project, i) => (
          <Link key={project.key} href={`/projects/${project.key}`} className="block h-full">
            <Card
              as="article"
              staggerIndex={i}
              hover
              className="flex h-full cursor-pointer flex-col"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {t(`projects.items.${project.key}.title`)}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                {t(`projects.items.${project.key}.description`)}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
              <h4 className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300">
                {t("projectDetail.viewDetails")}
                <ChevronRight size={16} />
              </h4>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
