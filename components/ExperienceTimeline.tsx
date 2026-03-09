"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const EXPERIENCE_KEYS = [
  { company: "Bedrock Analytics Co., Ltd.", key: "bedrock" },
  { company: "Avalant Co., Ltd.", key: "avalant_senior" },
  { company: "Avalant Co., Ltd.", key: "avalant_full" },
  { company: "Godygo Co., Ltd.", key: "godygo" },
] as const;

export function ExperienceTimeline() {
  const { t, tArray } = useLocale();

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
          {t("experience.title")}
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />
          {EXPERIENCE_KEYS.map((exp, i) => {
            const highlights = tArray(`experience.items.${exp.key}.highlights`);
            return (
              <motion.div
                key={`${exp.company}-${exp.key}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative ml-12 pb-12 last:pb-0"
              >
                <div className="absolute -left-8 top-2 h-3 w-3 rounded-full bg-blue-500" />
                <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6">
                  <p className="text-sm font-medium text-blue-400">
                    {t(`experience.items.${exp.key}.period`)}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {t(`experience.items.${exp.key}.role`)}
                  </h3>
                  <p className="mt-1 text-slate-300">{exp.company}</p>
                  <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} />
                    {t("experience.location")}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-400">
                    {highlights.map((h) => (
                      <li key={h} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
