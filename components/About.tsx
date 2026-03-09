"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export function About() {
  const { t } = useLocale();

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
        <h2 className="mb-6 text-3xl font-bold text-white">
          {t("about.title")}
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>
          <p>{t("about.paragraph4")}</p>
        </div>
      </motion.div>
    </section>
  );
}
