import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import type { Locale } from "./i18n";

export const LOCALE_COOKIE = "assessmoney_locale";

/**
 * Reads the visitor's persisted language from the cookie so the very first
 * server-rendered HTML already comes in the chosen locale (no PT flash and a
 * correct `lang` attribute for crawlers).
 */
export const getStoredLocale = createServerFn({ method: "GET" }).handler(async (): Promise<Locale> => {
  const raw = getCookie(LOCALE_COOKIE);
  return raw === "en" || raw === "es" ? raw : "pt";
});
