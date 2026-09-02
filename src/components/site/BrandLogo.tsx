import logoWhite from "@/assets/logo-white.png.asset.json";
import logoColor from "@/assets/logo-color.png.asset.json";
import { cn } from "@/lib/utils";

/**
 * Assessmoney brand mark with an institutional highlight treatment:
 * a soft champagne halo plus a hairline frame so the logo always reads
 * as a deliberate brand statement instead of a floating image.
 */
export function BrandLogo({
  variant = "white",
  className,
  imgClassName,
  width = 160,
  height = 48,
  priority = false,
  highlight = true,
}: {
  variant?: "white" | "color";
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  highlight?: boolean;
}) {
  const src = variant === "white" ? logoWhite.url : logoColor.url;
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      {highlight ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-full bg-champagne/12 blur-xl"
        />
      ) : null}
      <img
        src={src}
        alt="Assessmoney"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("relative w-auto drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]", imgClassName)}
      />
    </span>
  );
}
