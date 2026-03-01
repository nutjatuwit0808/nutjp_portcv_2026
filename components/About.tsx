"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-6 text-3xl font-bold text-white">About Me</h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            I started as a Java Developer at Godygo, building backend APIs for
            logistics applications. That foundation led me to Avalant, where I
            evolved into a Full Stack Developer and later Senior Full Stack
            Developer—spearheading frontend architecture for platforms like
            &quot;Zero&quot; (No-code) and &quot;PromptX&quot; (AI-driven
            interface) with React.js and TypeScript.
          </p>
          <p>
            I&apos;m passionate about performance. At Bedrock Analytics, I
            reduced API response time by 85% (from 8,000ms to 1,200ms) using k6
            load testing and refactoring data-fetching to serve geospatial points
            via .geojson files.
          </p>
          <p>
            Today I focus on AI integration—RAG, Vector Databases, and building
            intelligent applications that scale. I&apos;m seeking an impactful
            role to drive innovative software development.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
