import { BrandLogo } from "./BrandLogo";
import { Eyebrow } from "./ui";
import { useI18n } from "@/lib/i18n";
import { CONTACT, OSTUN_TRIAD_IMAGE } from "@/lib/site";

/**
 * Ostun ecosystem block — shows the Ostun / Assessmoney / Trunk Capital triad
 * alongside the Member Company statement.
 */
export function EcosystemTriad() {
  const { t } = useI18n();

  return (
    <section className="grain bg-forest-deep py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-12">
        <div>
          <Eyebrow>{t("Ecossistema")}</Eyebrow>
          <p className="mt-10 max-w-3xl font-display text-3xl leading-[1.25] md:text-[2.6rem]">
            {t(
              "A Assessmoney integra a Ostun como uma de suas Member Companies, combinando sua experiência no mercado brasileiro a um ecossistema mais amplo de soluções financeiras, investimentos e advisory.",
            )}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <BrandLogo width={150} height={46} imgClassName="h-12" />
            <a
              href={CONTACT.ostun}
              target="_blank"
              rel="noreferrer noopener"
              className="border border-champagne/50 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-champagne transition-colors hover:bg-champagne/10"
            >
              {t("Member Company of Ostun")} ↗
            </a>
          </div>
        </div>

        <figure className="m-0">
          <a href={CONTACT.ostun} target="_blank" rel="noreferrer noopener" className="block">
            <img
              src={OSTUN_TRIAD_IMAGE}
              alt="Ostun e suas Member Companies: Assessmoney e Trunk Capital"
              width={1054}
              height={1492}
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-md border border-champagne/25 shadow-[0_24px_80px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1"
            />
          </a>
          <figcaption className="mt-6 text-center text-[11px] uppercase tracking-[0.2em] text-institutional-soft">
            {t("Ostun — holding do ecossistema. Assessmoney e Trunk Capital — Member Companies.")}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
