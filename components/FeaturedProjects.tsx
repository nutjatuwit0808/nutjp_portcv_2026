"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const PROJECT_KEYS = [
  { key: "locable", tech: ["k6", ".geojson", "Performance", "Geospatial", "Vector Tiles"] },
  { key: "promptx", tech: ["React.js", "TypeScript", "AI", "Oneweb", "No-Code"] },
  { key: "zero", tech: ["React.js", "TypeScript", "Oneweb", "Low-Code", "UI Kit"] },
] as const;

export function FeaturedProjects() {
  const { t } = useLocale();

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-2 text-3xl font-bold text-white">
          {t("projects.title")}
        </h2>
        <p className="mb-8 text-slate-400">{t("projects.subtitle")}</p>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECT_KEYS.map((project, i) => (
            <Link
              key={project.key}
              href={`/projects/${project.key}`}
              className="block h-full"
            >
              <motion.article
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex h-full cursor-pointer flex-col rounded-lg border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-slate-600"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <p className="mb-4 flex-1 text-sm text-slate-400 leading-relaxed">
                  {t(`projects.items.${project.key}.description`)}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-700/80 px-2 py-0.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300">
                  {t("projectDetail.viewDetails")}
                  <ChevronRight size={16} />
                </h4>
              </motion.article>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
