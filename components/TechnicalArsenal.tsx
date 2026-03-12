"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TechTag } from "@/components/ui/TechTag";

const SKILL_GROUPS = [
  {
    titleKey: "skills.programming",
    skills: ["JavaScript", "TypeScript", "Java", "Python"],
  },
  {
    titleKey: "skills.frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Zustand",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Material-UI (MUI)",
      "Ant Design",
      "jQuery",
      "Highcharts",
      "Chart.js",
    ],
  },
  {
    titleKey: "skills.backend",
    skills: ["Node.js (Express.js)", "NestJS", "Spring Boot (Java)"],
  },
  {
    titleKey: "skills.aiData",
    skills: [
      "LLM Fine-tuning (Typhoon)",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases",
    ],
  },
  {
    titleKey: "skills.databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis (Caching)",
      "Supabase",
      "Vector Databases",
    ],
  },
  {
    titleKey: "skills.cloudDevOps",
    skills: [
      "AWS (Lambda, Amplify, RDS, S3)",
      "DigitalOcean",
      "Docker",
      "CI/CD Pipelines",
      "GitHub",
      "GitLab",
      "Snyk (Vulnerability Scanning)",
      "Grafana",
      "Cloudflare",
      "Vercel",
      "GitHub Actions",
      "GitLab CI",
    ],
  },
  {
    titleKey: "skills.integration",
    skills: ["Stripe", "Omise", "Resend", "SendGrid"],
  },
  {
    titleKey: "skills.specialized",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Mapbox (Geospatial Mapping)",
      "k6 (Performance/Load Testing)",
      "n8n (Workflow Automation)",
    ],
  },
];

export function TechnicalArsenal() {
  const { t } = useLocale();

  return (
    <Section id="skills" maxWidth="4xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        {t("skills.title")}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Card key={group.titleKey} staggerIndex={i} minHeight="min-h-[180px]">
            <h3 className="mb-4 text-lg font-semibold text-blue-400">
              {t(group.titleKey)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <TechTag key={skill} variant="pill">
                  {skill}
                </TechTag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
