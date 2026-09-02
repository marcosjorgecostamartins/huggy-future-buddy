import { Link } from "@tanstack/react-router";
import { CONTACT, NAV, OSTUN_TRIAD_IMAGE } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { Marquee } from "./Marquee";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="blueprint border-t border-white/10 bg-graphite text-cream">
      <Marquee label="Instituições e parceiros" />
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <BrandLogo width={190} height={58} imgClassName="h-16" />
            <a
              href={CONTACT.ostun}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 flex max-w-xs flex-col gap-4 border border-champagne/40 p-4 transition-colors hover:bg-champagne/10"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-champagne">
                {t("Member Company of Ostun")}
              </span>
              <img
                src={OSTUN_TRIAD_IMAGE}
                alt="Ostun e suas Member Companies: Assessmoney e Trunk Capital"
                width={1054}
                height={1492}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[190px] border border-champagne/20"
              />
            </a>
            <address className="mt-8 space-y-1 text-sm not-italic text-institutional-soft">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.city}</p>
              <p>
                <a href={CONTACT.phoneHref} className="hover:text-emerald-action">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-emerald-action">
                  {CONTACT.email}
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-6 text-[11px] uppercase tracking-[0.2em] text-institutional-soft">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer noopener" className="hover:text-emerald-action">
                Instagram
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-emerald-action">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {NAV.filter((i) => i.to !== "/" && i.children).map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to as never}
                  className="text-[11px] uppercase tracking-[0.22em] text-cream/90"
                >
                  {t(item.label)}
                </Link>
                <ul className="mt-5 space-y-2.5">
                  {item.children?.slice(0, 5).map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.to as never}
                        params={child.params as never}
                        className="text-[13px] text-institutional-soft transition-colors hover:text-emerald-action"
                      >
                        {t(child.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-cream/90">{t("Institucional")}</p>
              <ul className="mt-5 space-y-2.5">
                <li>
                  <Link to="/insights" className="text-[13px] text-institutional-soft hover:text-emerald-action">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-[13px] text-institutional-soft hover:text-emerald-action">
                    Contato
                  </Link>
                </li>
                <li>
                  <a
                    href={CONTACT.ostun}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[13px] text-institutional-soft hover:text-emerald-action"
                  >
                    Ostun Group
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-[11px] tracking-wide text-institutional-soft md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Assessmoney. {t("Todos os direitos reservados.")}</p>
          <p className="max-w-xl">
            As informações deste site têm caráter institucional e não constituem oferta, recomendação de
            investimento ou garantia de resultado.
          </p>
        </div>
      </div>
    </footer>
  );
}
