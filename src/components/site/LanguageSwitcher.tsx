import { LOCALES, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={cn("flex items-center gap-1 border border-white/15 px-1 py-1", className)}
      role="group"
      aria-label={t("Idioma")}
    >
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          lang={l.htmlLang}
          aria-label={l.name}
          title={l.name}
          className={cn(
            "px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
            locale === l.code ? "bg-emerald-action text-cream" : "text-cream/60 hover:text-cream",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
