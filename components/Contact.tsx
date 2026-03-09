"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export function Contact() {
  const { t } = useLocale();

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl"
      >
        <h2 className="mb-8 text-3xl font-bold text-white">
          {t("contact.title")}
        </h2>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <a
            href="mailto:nutjatuwit.dev@gmail.com"
            className="flex items-center gap-3 text-slate-300 transition-colors hover:text-blue-400"
          >
            <Mail size={24} />
            <span>nutjatuwit.dev@gmail.com</span>
          </a>
          <a
            href="tel:0952282690"
            className="flex items-center gap-3 text-slate-300 transition-colors hover:text-blue-400"
          >
            <Phone size={24} />
            <span>0952282690</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
