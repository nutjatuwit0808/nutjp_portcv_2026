"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Performance Optimization (Locable)",
    description:
      "Reduced API response time by 85% (from 8,000ms to 1,200ms) using k6 load testing and refactoring data-fetching logic to serve geospatial points directly via .geojson files.",
    tech: ["k6", ".geojson", "Performance", "Geospatial"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Driven No-Code Platform (PromptX & Zero)",
    description:
      "Spearheaded frontend architecture for proprietary platforms including Zero (No-code) and PromptX (AI-driven interface), leveraging React.js and TypeScript to build scalable and highly interactive user interfaces.",
    tech: ["React.js", "TypeScript", "AI Integration"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function FeaturedProjects() {
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
        <h2 className="mb-8 text-3xl font-bold text-white">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-lg border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-slate-600"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-slate-700/80 px-2 py-0.5 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-300"
                >
                  <Github size={16} />
                  GitHub Repo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
