import { PARTNERS } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

/** Institutional partner logo wall — logos sit on light tiles for consistent contrast. */
export function PartnerLogos({ label, tone = "dark" }: { label?: string; tone?: "dark" | "light" }) {
  const { t } = useI18n();
  const heading = label ?? "Instituições e parceiros";

  return (
    <div className={tone === "dark" ? "border-y border-white/10 py-16" : "py-16"}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p
          className={`text-[11px] uppercase tracking-[0.28em] ${
            tone === "dark" ? "text-institutional-soft" : "text-muted-foreground"
          }`}
        >
          {t(heading)}
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((p) => (
            <li key={p.name} className="flex items-center justify-center bg-cream px-6 py-8">
              <img
                src={p.logo}
                alt={p.name}
                width={180}
                height={72}
                loading="lazy"
                decoding="async"
                className="h-10 w-auto max-w-[150px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
