import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useI18n, useTr } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type CtaProps = {
  to: string;
  params?: Record<string, string> | undefined;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Cta({ to, params, children, variant = "solid", className }: CtaProps) {
  const tr = useTr();
  const base =
    "btn-fill group inline-flex items-center gap-3 px-7 py-4 text-[13px] uppercase tracking-[0.16em] font-medium transition-colors duration-500";
  const styles = {
    solid:
      "bg-forest text-cream before:bg-emerald-action hover:text-cream",
    outline:
      "border border-current text-current before:bg-emerald-action hover:text-cream hover:border-emerald-action",
    ghost: "text-emerald-action hover:text-forest px-0 py-2",
  }[variant];

  return (
    <Link to={to} params={params as never} className={cn(base, styles, className)}>
      <span>{tr(children)}</span>
      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  const tr = useTr();
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-emerald-action",
        className,
      )}
    >
      <span className="h-px w-8 bg-champagne/70" aria-hidden="true" />
      {tr(children)}
    </p>
  );
}

export function ChipList({ title, items }: { title?: string; items: string[] }) {
  const { t } = useI18n();
  return (
    <div>
      {title ? (
        <h3 className="mb-6 font-sans text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          {t(title)}
        </h3>
      ) : null}
      <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-baseline gap-4 border-t border-current/15 py-4 text-[15px]"
          >
            <span className="font-mono text-[11px] tabular text-emerald-action">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">{t(item)}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  raw,
}: {
  value?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  raw?: string;
}) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === undefined) return;
    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="border-t border-current/15 pt-6">
      <p className="font-mono text-4xl tabular tracking-tight md:text-5xl">
        {raw ?? `${prefix}${display}${suffix}`}
      </p>
      <p className="mt-3 max-w-[22ch] text-sm text-muted-foreground">{t(label)}</p>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  invert,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  invert?: boolean;
}) {
  const { t } = useI18n();
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-8 text-4xl leading-[1.05] md:text-6xl">{t(title)}</h2>
      {intro ? (
        <p
          className={cn(
            "mt-8 text-lg leading-relaxed",
            invert ? "text-institutional-soft" : "text-muted-foreground",
          )}
        >
          {t(intro)}
        </p>
      ) : null}
    </div>
  );
}

export function Quote({ children }: { children: ReactNode }) {
  const tr = useTr();
  return (
    <blockquote className="border-l border-champagne/60 pl-8 font-display text-2xl leading-[1.25] md:text-4xl">
      {tr(children)}
    </blockquote>
  );
}

export function LegalNote({ children }: { children: ReactNode }) {
  const tr = useTr();
  return (
    <p className="max-w-2xl border-t border-current/15 pt-4 text-xs leading-relaxed text-muted-foreground">
      {tr(children)}
    </p>
  );
}
