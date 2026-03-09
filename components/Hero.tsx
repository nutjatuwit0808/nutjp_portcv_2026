"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FileDown, FolderKanban, Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { scrollToSection } from "@/lib/scroll-utils";

export function Hero() {
  const [imgError, setImgError] = useState(false);
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-4xl flex-col items-center gap-8 text-center"
      >
        <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-blue-500/50 bg-slate-700">
          {imgError ? (
            <span className="text-4xl font-bold text-slate-400">JP</span>
          ) : (
            <Image
              src="/nutjatuwit_cleaned.webp"
              alt="Jatuwit Pitukdansakul"
              width={128}
              height={128}
              className="h-full w-full object-cover"
              priority
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("hero.greeting")} {t("hero.name")}.
          </h1>
          <p className="text-xl text-slate-300 sm:text-2xl">
            {t("hero.tagline")}
          </p>
          <p className="max-w-2xl text-slate-400">
            {t("hero.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/nutjatuwit0808"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-slate-400 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jatuwit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-slate-400 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:nutjatuwit.dev@gmail.com"
            className="rounded-full p-2 text-slate-400 transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("case-studies")}
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-600"
          >
            <FolderKanban size={20} />
            {t("hero.cta.viewProjects")}
          </motion.button>
          <motion.a
            href="/ResumeJatuwit2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 px-6 py-3 font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:bg-slate-700/50"
          >
            <FileDown size={20} />
            {t("hero.cta.downloadResume")}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
