import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-white/10 bg-graphite/92 py-3 backdrop-blur-md"
          : "border-transparent bg-gradient-to-b from-graphite/80 to-transparent py-6",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-12">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label={t("Assessmoney — início")}
        >
          <span
            className={cn(
              "font-display text-cream transition-all duration-500",
              scrolled ? "text-xl" : "text-2xl",
            )}
          >
            Assessmoney
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label={t("Navegação principal")}>
          {NAV.filter((i) => i.to !== "/").map((item) => (
            <div key={item.label} className="group relative py-2">
              <Link
                to={item.to}
                className="nav-underline text-[12px] uppercase tracking-[0.14em] text-cream/80 transition-colors hover:text-cream"
                activeProps={{ "data-status": "active", className: "text-cream" }}
              >
                {t(item.label)}
              </Link>
              {item.children ? (
                <div className="pointer-events-none absolute left-0 top-full w-72 translate-y-2 border border-white/10 bg-graphite/97 p-2 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      params={child.params as never}
                      className="block px-4 py-2.5 text-[13px] text-cream/70 transition-colors hover:bg-white/5 hover:text-emerald-action"
                    >
                      {t(child.label)}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher className="hidden sm:flex" />
          <Link
            to="/contato"
            className="btn-fill hidden bg-emerald-action px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-cream before:bg-forest md:inline-block"
          >
            {t("Fale com um especialista")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-cream xl:hidden"
            aria-label={open ? t("Fechar menu") : t("Abrir menu")}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-graphite xl:hidden"
            aria-label={t("Navegação móvel")}
          >
            <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
              <LanguageSwitcher className="mb-6 w-max sm:hidden" />
              {NAV.map((item) => (
                <div key={item.label} className="border-b border-white/8 py-4">
                  <Link to={item.to} className="text-sm uppercase tracking-[0.14em] text-cream">
                    {t(item.label)}
                  </Link>
                  {item.children ? (
                    <div className="mt-3 grid gap-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          params={child.params as never}
                          className="text-[13px] text-cream/60"
                        >
                          {t(child.label)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
