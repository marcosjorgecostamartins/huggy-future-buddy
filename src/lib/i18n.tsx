import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { EN } from "./dict/en";
import { ES } from "./dict/es";

export type Locale = "pt" | "en" | "es";

export const LOCALES: { code: Locale; label: string; name: string; htmlLang: string }[] = [
  { code: "pt", label: "PT", name: "Português", htmlLang: "pt-BR" },
  { code: "en", label: "EN", name: "English", htmlLang: "en" },
  { code: "es", label: "ES", name: "Español", htmlLang: "es" },
];

const STORAGE_KEY = "assessmoney:locale";
const LOCALE_COOKIE = "assessmoney_locale";

/**
 * Dictionaries are keyed by the Brazilian Portuguese source string.
 * Missing keys fall back to the source string, so the site never breaks
 * when new copy is added.
 */
const DICT: Record<Exclude<Locale, "pt">, Record<string, string>> = { en: EN, es: ES };

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (s: string) => string };

const LocaleContext = createContext<Ctx>({ locale: "pt", setLocale: () => {}, t: (s) => s });

export function LocaleProvider({
  children,
  initialLocale = "pt",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Português é o idioma institucional padrão. O idioma escolhido vem do
  // cookie (já resolvido no servidor); o localStorage é apenas fallback para
  // sessões antigas, anteriores ao cookie.
  useEffect(() => {
    if (initialLocale !== "pt") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored !== "pt" && LOCALES.some((l) => l.code === stored)) {
      setLocaleState(stored);
      document.cookie = `${LOCALE_COOKIE}=${stored}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [initialLocale]);

  useEffect(() => {
    const entry = LOCALES.find((l) => l.code === locale);
    if (entry) document.documentElement.lang = entry.htmlLang;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; SameSite=Lax`;
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const t = useCallback((s: string) => (locale === "pt" ? s : (DICT[locale][s] ?? s)), [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useI18n() {
  return useContext(LocaleContext);
}

/** Locale tag for Intl formatting. */
export function useIntlLocale() {
  const { locale } = useI18n();
  return LOCALES.find((l) => l.code === locale)?.htmlLang ?? "pt-BR";
}

/** Translates string children, leaving any other ReactNode untouched. */
export function useTr() {
  const { t } = useI18n();
  return useCallback((node: ReactNode) => (typeof node === "string" ? t(node) : node), [t]);
}
