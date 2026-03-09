"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Locale } from "@/lib/i18n";
import {
  getDefaultLocale,
  getNestedValue,
  setStoredLocale,
} from "@/lib/i18n";
import thMessages from "@/locales/th.json";
import enMessages from "@/locales/en.json";

type LocaleMessages = Record<string, unknown>;

const LOCALE_MESSAGES: Record<Locale, LocaleMessages> = {
  th: thMessages as LocaleMessages,
  en: enMessages as LocaleMessages,
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
  messages: LocaleMessages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(getDefaultLocale());
    setReady(true);
  }, []);

  const messages = ready ? LOCALE_MESSAGES[locale] : LOCALE_MESSAGES.en;

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setStoredLocale(newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(messages, key);
      return typeof value === "string" ? value : key;
    },
    [messages]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(messages, key);
      return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
    },
    [messages]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tArray, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
