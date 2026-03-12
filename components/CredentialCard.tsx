"use client";

import { Eye } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface CredentialCardProps {
  title: string;
  children: React.ReactNode;
  /** ถ้ามี จะแสดงปุ่ม preview */
  preview?: { url: string; title: string };
  onPreviewClick: (url: string, title: string) => void;
  previewLabel: string;
}

/**
 * Card สำหรับ credentials (TOEIC, transcript) - ลดความซ้ำของ motion.div + preview button
 */
export function CredentialCard({
  title,
  children,
  preview,
  onPreviewClick,
  previewLabel,
}: CredentialCardProps) {
  return (
    <Card className="flex flex-col">
      <h3 className="mb-4 text-lg font-semibold text-blue-400">{title}</h3>
      <div className="space-y-2 text-slate-300">{children}</div>
      {preview && (
        <div className="mt-auto flex justify-center pt-4">
          <button
            type="button"
            onClick={() => onPreviewClick(preview.url, preview.title)}
            className="flex cursor-pointer items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
          >
            <Eye size={16} />
            {previewLabel}
          </button>
        </div>
      )}
    </Card>
  );
}
