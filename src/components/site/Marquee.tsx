import { PARTNERS } from "@/lib/site";

export function Marquee({ label }: { label?: string }) {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <div className="overflow-hidden border-y border-white/10 py-8">
      {label ? (
        <p className="mx-auto mb-8 max-w-[1400px] px-6 text-[11px] uppercase tracking-[0.28em] text-institutional-soft lg:px-12">
          {label}
        </p>
      ) : null}
      <div className="flex w-max marquee-track gap-16 pr-16">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-xl text-cream/45 transition-colors duration-300 hover:text-cream md:text-2xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
