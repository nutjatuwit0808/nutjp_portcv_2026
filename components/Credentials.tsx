"use client";

import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import type { CredentialsData } from "@/types/portfolio";
import credentialsData from "@/data/credentials.json";

const data = credentialsData as CredentialsData;

export function Credentials() {
  const { t } = useLocale();

  return (
    <section
      id="credentials"
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
          {t("credentials.title")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.toeic && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-blue-400">
                {t("credentials.toeic")}
              </h3>
              <div className="space-y-2 text-slate-300">
                <p>
                  <span className="text-slate-500">{t("credentials.score")}:</span>{" "}
                  {data.toeic.score}/{data.toeic.maxScore}
                </p>
                <p>
                  <span className="text-slate-500">
                    {t("credentials.testDate")}:
                  </span>{" "}
                  {data.toeic.date}
                </p>
              </div>
              {data.toeic.pdfUrl && (
                <a
                  href={data.toeic.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                >
                  <FileDown size={16} />
                  {t("credentials.downloadPdf")}
                </a>
              )}
            </motion.div>
          )}

          {data.education && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-blue-400">
                {t("credentials.transcript")}
              </h3>
              <div className="space-y-2 text-slate-300">
                <p>
                  <span className="text-slate-500">
                    {t("credentials.institution")}:
                  </span>{" "}
                  {data.education.institution}
                </p>
                <p>
                  <span className="text-slate-500">{t("credentials.degree")}:</span>{" "}
                  {data.education.degree}
                </p>
                <p>
                  <span className="text-slate-500">
                    {t("credentials.period")}:
                  </span>{" "}
                  {data.education.period}
                </p>
                {data.education.gpa && (
                  <p>
                    <span className="text-slate-500">
                      {t("credentials.gpa")}:
                    </span>{" "}
                    {data.education.gpa}
                  </p>
                )}
              </div>
              {data.education.summary &&
                data.education.summary.length > 0 && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm text-slate-400">
                      <thead>
                        <tr className="border-b border-slate-600">
                          <th className="py-2 text-left">
                            {t("credentials.education")}
                          </th>
                          <th className="py-2 text-right">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.education.summary.map((row) => (
                          <tr
                            key={row.subject}
                            className="border-b border-slate-700/50"
                          >
                            <td className="py-2">{row.subject}</td>
                            <td className="py-2 text-right">{row.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              {data.education.transcriptUrl && (
                <a
                  href={data.education.transcriptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                >
                  <FileDown size={16} />
                  {t("credentials.downloadPdf")}
                </a>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
