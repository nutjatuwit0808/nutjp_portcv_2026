"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const PROJECT_KEYS = [
  { key: "locable", tech: ["k6", ".geojson", "Performance", "Geospatial"] },
  { key: "promptx", tech: ["React.js", "TypeScript", "AI Integration"] },
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
            <motion.article
              key={project.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-lg border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-slate-600"
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
              <div className="flex gap-3">
                <span className="flex items-center gap-1.5 text-sm text-slate-500">
                  <ExternalLink size={16} />
                  {t("projects.liveDemo")} (NDA)
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-500">
                  <Github size={16} />
                  {t("projects.githubRepo")} (NDA)
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
