"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import type { ProjectDetail as ProjectDetailType } from "@/types/portfolio";

interface ProjectDetailProps {
  project: ProjectDetailType;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-slate-300 leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { locale, t } = useLocale();
  const title = t(`projects.items.${project.slug}.title`);
  const isTh = locale === "th";

  const overview = [...(isTh ? project.overviewTH : project.overviewEN), ...(isTh ? project.objectivesTH : project.objectivesEN)];
  const roleResponsibilities = isTh ? project.roleResponsibilitiesTH : project.roleResponsibilitiesEN;
  const challenges = isTh ? project.challengesTH : project.challengesEN;
  const solutions = isTh ? project.solutionsTH : project.solutionsEN;

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
        >
          <ArrowLeft size={18} />
          {t("projectDetail.backToProjects")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <h1 className="text-3xl font-bold text-white">{title}</h1>

          <section className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-blue-400">
              {t("projectDetail.overview")}
            </h2>
            <BulletList items={overview} />
          </section>

          <section className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-blue-400">
              {t("projectDetail.role")}
            </h2>
            <BulletList items={roleResponsibilities} />
          </section>

          <section className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6">
            <h2 className="mb-4 text-lg font-semibold text-blue-400">
              {t("projectDetail.techStack")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-700/80 px-3 py-1 text-sm text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-lg border-2 border-blue-500/30 bg-slate-800/50 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Star size={20} className="text-amber-400 fill-amber-400" />
              <h2 className="text-lg font-semibold text-blue-400">
                {t("projectDetail.challenges")}
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium text-slate-400">
                  {isTh ? "ความท้าทาย" : "Challenges"}
                </h3>
                <BulletList items={challenges} />
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-slate-400">
                  {isTh ? "โซลูชัน" : "Solutions"}
                </h3>
                <BulletList items={solutions} />
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
