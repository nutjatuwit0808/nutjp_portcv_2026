"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Mapbox"],
  },
  {
    title: "Backend & Architecture",
    skills: ["Node.js", "NestJS", "Kafka", "Architecture Design"],
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "AWS", "Docker"],
  },
  {
    title: "AI & Data",
    skills: ["Python", "Vector Databases", "RAG", "Prompt Engineering"],
  },
];

export function TechnicalArsenal() {
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
          Technical Arsenal
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-blue-400">
                {group.title}
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
