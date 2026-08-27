import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function BrandLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("am-loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("am-loaded", "1");
      setDone(true);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {done ? null : (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-graphite"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <svg width="96" height="96" viewBox="0 0 100 100" fill="none">
            <motion.path
              d="M78 30C68 16 30 18 24 34c-6 16 32 14 48 22 12 6 8 26-12 28-18 2-32-6-36-16"
              stroke="var(--emerald-action)"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
