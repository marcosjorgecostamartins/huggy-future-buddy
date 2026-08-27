import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, input, select, textarea, [role='button']")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full border border-emerald-action lg:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: active ? 44 : 14,
        height: active ? 44 : 14,
        backgroundColor: active ? "rgba(27,122,77,0.12)" : "rgba(27,122,77,0.65)",
      }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
