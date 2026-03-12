"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import type { CredentialsData } from "@/types/portfolio";
import credentialsData from "@/data/credentials.json";
import { Section } from "@/components/ui/Section";
import { CredentialCard } from "@/components/CredentialCard";
import { CredentialPreviewOverlay } from "./CredentialPreviewOverlay";

const data = credentialsData as CredentialsData;

export function Credentials() {
  const { t } = useLocale();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState("");

  const handlePreview = (url: string, title: string) => {
    setPreviewImage(url);
    setPreviewTitle(title);
  };

  return (
    <Section id="credentials" maxWidth="4xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        {t("credentials.title")}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
        {data.toeic && (
          <CredentialCard
            title={t("credentials.toeic")}
            preview={
              data.toeic.pdfUrl
                ? { url: data.toeic.pdfUrl, title: t("credentials.toeic") }
                : undefined
            }
            onPreviewClick={handlePreview}
            previewLabel={t("credentials.preview")}
          >
            <>
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
            </>
          </CredentialCard>
        )}

        {data.education && (
          <CredentialCard
            title={t("credentials.transcript")}
            preview={
              data.education.transcriptUrl
                ? {
                    url: data.education.transcriptUrl,
                    title: t("credentials.transcript"),
                  }
                : undefined
            }
            onPreviewClick={handlePreview}
            previewLabel={t("credentials.preview")}
          >
            <>
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
                  <span className="text-slate-500">{t("credentials.gpa")}:</span>{" "}
                  {data.education.gpa}
                </p>
              )}
              {data.education.summary && data.education.summary.length > 0 && (
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
            </>
          </CredentialCard>
        )}
      </div>

      <CredentialPreviewOverlay
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        imageUrl={previewImage ?? ""}
        title={previewTitle}
      />
    </Section>
  );
}
