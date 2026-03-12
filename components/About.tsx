"use client";

import { useLocale } from "@/context/LocaleContext";
import { Section } from "@/components/ui/Section";

export function About() {
  const { t } = useLocale();

  return (
    <Section id="about" maxWidth="3xl">
      <h2 className="mb-6 text-3xl font-bold text-white">
        {t("about.title")}
      </h2>
      <div className="space-y-4 leading-relaxed text-slate-300">
        <p>{t("about.paragraph1")}</p>
        <p>{t("about.paragraph2")}</p>
        <p>{t("about.paragraph3")}</p>
        <p>{t("about.paragraph4")}</p>
      </div>
    </Section>
  );
}
