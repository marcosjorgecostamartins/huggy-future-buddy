import { PARTNERS } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

/** Infinite logo marquee for institutional partners. */
export function Marquee({ label }: { label?: string }) {
  const { t } = useI18n();
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <div className="overflow-hidden border-y border-white/10 py-8">
      {label ? (
        <p className="mx-auto mb-8 max-w-[1400px] px-6 text-[11px] uppercase tracking-[0.28em] text-institutional-soft lg:px-12">
          {t(label)}
        </p>
      ) : null}
      <div className="marquee-track marquee-partners flex w-max items-center gap-6 pr-6">
        {items.map((partner, i) => (
          <span
            key={`${partner.name}-${i}`}
            className="flex h-20 w-44 shrink-0 items-center justify-center bg-cream px-5"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={64}
              loading="lazy"
              decoding="async"
              className="h-9 w-auto max-w-[130px] object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
