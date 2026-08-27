import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Cta, Eyebrow } from "./ui";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  intro,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  intro?: string;
}) {
  return (
    <section className="grain blueprint bg-graphite pb-24 pt-44 text-cream md:pb-32 md:pt-56">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-10 max-w-[18ch] text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]">{title}</h1>
        {subtitle ? (
          <p className="mt-8 max-w-3xl text-xl text-cream/80 md:text-2xl">{subtitle}</p>
        ) : null}
        {intro ? (
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-institutional-soft">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "forest";
  className?: string;
}) {
  const tones = {
    light: "bg-cream text-graphite",
    dark: "bg-graphite text-cream blueprint",
    forest: "bg-forest-deep text-cream blueprint",
  };
  return (
    <section className={`${tones[tone]} py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">{children}</div>
    </section>
  );
}

export function CTASection({
  title,
  label,
  to,
  params,
}: {
  title: string;
  label: string;
  to: string;
  params?: Record<string, string>;
}) {
  return (
    <section className="grain bg-forest-deep py-28 text-cream md:py-36">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <h2 className="max-w-[16ch] text-4xl leading-[1.02] md:text-6xl">{title}</h2>
        <Cta to={to} params={params} variant="outline" className="shrink-0 self-start text-cream lg:self-end">
          {label}
        </Cta>
      </div>
    </section>
  );
}
