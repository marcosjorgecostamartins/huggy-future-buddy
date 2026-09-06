import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

type Quote = { code: string; label: string; value: number; change: number };

const SYMBOLS: { code: string; label: string }[] = [
  { code: "USD", label: "Dólar / BRL" },
  { code: "EUR", label: "Euro / BRL" },
  { code: "GBP", label: "Libra / BRL" },
  { code: "CHF", label: "Franco / BRL" },
  { code: "JPY", label: "Iene / BRL" },
  { code: "CNY", label: "Yuan / BRL" },
];

const NUM = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 4, maximumFractionDigits: 4 });

function toBrl(rates: Record<string, number>, code: string) {
  // frankfurter returns EUR-based rates; convert to BRL per unit of `code`
  const brl = rates["BRL"];
  const unit = code === "EUR" ? 1 : rates[code];
  if (!brl || !unit) return null;
  return brl / unit;
}

export function MarketTicker() {
  const { t } = useI18n();
  const [quotes, setQuotes] = useState<Quote[] | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    const symbols = ["BRL", ...SYMBOLS.map((s) => s.code).filter((c) => c !== "EUR")].join(",");
    const prev = new Date();
    prev.setDate(prev.getDate() - 7);
    const prevDate = prev.toISOString().slice(0, 10);

    (async () => {
      try {
        const [latestRes, prevRes] = await Promise.all([
          fetch(`https://api.frankfurter.dev/v1/latest?symbols=${symbols}`),
          fetch(`https://api.frankfurter.dev/v1/${prevDate}?symbols=${symbols}`),
        ]);
        if (!latestRes.ok || !prevRes.ok) throw new Error("quote request failed");
        const latest = (await latestRes.json()) as { date: string; rates: Record<string, number> };
        const previous = (await prevRes.json()) as { rates: Record<string, number> };
        if (!alive) return;

        const list: Quote[] = [];
        for (const s of SYMBOLS) {
          const now = toBrl(latest.rates, s.code);
          const before = toBrl(previous.rates, s.code);
          if (now == null) continue;
          list.push({
            code: s.code,
            label: s.label,
            value: now,
            change: before ? ((now - before) / before) * 100 : 0,
          });
        }
        setQuotes(list);
        setDate(latest.date);
      } catch {
        if (alive) setFailed(true);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  if (failed) {
    return (
      <div className="border-y border-white/10 bg-graphite py-2 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-institutional-soft">
        {t("Cotações indisponíveis no momento")}
      </div>
    );
  }

  const items = quotes ? [...quotes, ...quotes] : [];

  return (
    <section
      aria-label={`${t("Mercado")} — ${t("Cotações de referência")}`}
      className="border-y border-white/10 bg-graphite text-cream"
    >
      <div className="flex items-center">
        <p className="hidden shrink-0 items-center gap-2 border-r border-white/10 bg-emerald-action/15 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-action md:flex">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-action" aria-hidden="true" />
          {t("Mercado")}
        </p>
        <div className="relative flex-1 overflow-hidden py-3">
          {quotes ? (
            <div className="marquee-track marquee-market flex w-max gap-10 pr-10">
              {items.map((q, i) => (
                <span key={`${q.code}-${i}`} className="flex items-baseline gap-2 whitespace-nowrap font-mono text-[12px]">
                  <span className="text-cream/55 uppercase tracking-[0.14em]">{q.code}</span>
                  <span className="tabular text-cream">R$ {NUM.format(q.value)}</span>
                  <span className={q.change >= 0 ? "text-emerald-action" : "text-red-400"}>
                    {q.change >= 0 ? "▲" : "▼"} {Math.abs(q.change).toFixed(2)}%
                  </span>
                </span>
              ))}
            </div>
          ) : (
            <p className="px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-institutional-soft">
              {t("Cotações de referência")}…
            </p>
          )}
        </div>
        {date ? (
          <p className="hidden shrink-0 border-l border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-institutional-soft lg:block">
            {t("Atualizado em")} {date}
          </p>
        ) : null}
      </div>
    </section>
  );
}
