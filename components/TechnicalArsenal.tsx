"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

const SKILL_GROUPS = [
  { titleKey: "skills.programming", skills: ["JavaScript", "TypeScript", "Java", "Python"] },
  { titleKey: "skills.frontend", skills: ["React.js", "Next.js", "Redux", "Zustand", "HTML5/CSS3", "Tailwind CSS", "Material-UI (MUI)", "Ant Design", "jQuery", "Highcharts", "Chart.js"] },
  { titleKey: "skills.backend", skills: ["Node.js (Express.js)", "NestJS", "Spring Boot (Java)"] },
  { titleKey: "skills.aiData", skills: ["LLM Fine-tuning (Typhoon)", "Retrieval-Augmented Generation (RAG)", "Vector Databases"] },
  { titleKey: "skills.databases", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis (Caching)", "Supabase", "Vector Databases"] },
  { titleKey: "skills.cloudDevOps", skills: ["AWS (Lambda, Amplify, RDS, S3)", "DigitalOcean", "Docker", "CI/CD Pipelines", "GitHub", "GitLab", "Snyk (Vulnerability Scanning)", "Grafana", "Cloudflare", "Vercel", "GitHub Actions", "GitLab CI"] },
  { titleKey: "skills.integration", skills: ["Stripe", "Omise", "Resend", "SendGrid"] },
  { titleKey: "skills.specialized", skills: ["Retrieval-Augmented Generation (RAG)", "Mapbox (Geospatial Mapping)", "k6 (Performance/Load Testing)", "n8n (Workflow Automation)"] },
];

export function TechnicalArsenal() {
  const { t } = useLocale();

  return (
    <section
      id="skills"
      className="scroll-mt-20 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="mb-8 text-3xl font-bold text-white">
          {t("skills.title")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.titleKey}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex h-full min-h-[180px] flex-col rounded-lg border border-slate-700/50 bg-slate-800/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-blue-400">
                {t(group.titleKey)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-700/80 px-3 py-1 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
