"use client";

import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex rounded-lg border border-slate-600 bg-slate-800/50 p-0.5">
      {(["th", "en"] as const).map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => setLocale(loc)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            locale === loc
              ? "bg-blue-500 text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
          aria-label={`Switch to ${loc === "th" ? "Thai" : "English"}`}
          aria-pressed={locale === loc}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
