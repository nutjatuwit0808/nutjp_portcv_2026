"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Bedrock Analytics Co., Ltd.",
    role: "Senior Full Stack Developer (Outsource)",
    period: "Dec 2024 - Present",
    location: "Bangkok, Thailand",
    highlights: [
      "Architected No-Code Map Platform using Mapbox with flexible geospatial management interface",
      "Reduced API response time by 85% (8,000ms → 1,200ms) via k6 load testing and .geojson refactoring",
    ],
  },
  {
    company: "Avalant Co., Ltd.",
    role: "Senior Full Stack Developer",
    period: "Jan 2021 - Nov 2024",
    location: "Bangkok, Thailand",
    highlights: [
      "Primary technical consultant for enterprise client (SCG) on system scalability",
      "Mentored 2 junior developers with code reviews and technical direction",
    ],
  },
  {
    company: "Avalant Co., Ltd.",
    role: "Full Stack Developer",
    period: "Dec 2019 - Jan 2021",
    location: "Bangkok, Thailand",
    highlights: [
      "Spearheaded frontend architecture for Zero (No-code) and PromptX (AI-driven interface)",
      "Built scalable UIs with React.js and TypeScript",
    ],
  },
  {
    company: "Godygo Co., Ltd.",
    role: "Java Developer",
    period: "Aug 2018 - Feb 2019",
    location: "Bangkok, Thailand",
    highlights: [
      "Developed and maintained backend infrastructure for Godygo logistics app",
      "Built reliable APIs for Android mobile interface",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-8 text-3xl font-bold text-white">
          Professional Experience
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative ml-12 pb-12 last:pb-0"
            >
              <div className="absolute -left-8 top-2 h-3 w-3 rounded-full bg-blue-500" />
              <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6">
                <p className="text-sm font-medium text-blue-400">{exp.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="mt-1 text-slate-300">{exp.company}</p>
                <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} />
                  {exp.location}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {exp.highlights.map((h) => (
                    <li key={h} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
