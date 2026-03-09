export type Locale = "th" | "en";

const STORAGE_KEY = "portfolio-locale";

export function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "th" || stored === "en") return stored;
  return null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, locale);
}

export function getDefaultLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = getStoredLocale();
  if (stored) return stored;
  const lang = navigator.language || "";
  return lang.startsWith("th") ? "th" : "en";
}

export function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return current;
}
