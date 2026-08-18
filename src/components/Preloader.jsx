import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const COLUMNS = 6;

/** Counter + slat wipe. Runs once per tab session. */
const Preloader = ({ onDone }) => {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (reduce) {
      setCount(100);
      setOpen(false);
      onDone?.();
      return;
    }

    let value = 0;
    let timer;

    const step = () => {
      // uneven increments read as "real" loading
      value = Math.min(100, value + Math.random() * 9 + 3);
      setCount(Math.floor(value));
      if (value < 100) {
        timer = setTimeout(step, 60 + Math.random() * 90);
      } else {
        timer = setTimeout(() => setOpen(false), 420);
      }
    };

    timer = setTimeout(step, 180);
    return () => clearTimeout(timer);
  }, [reduce, onDone]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence onExitComplete={() => onDone?.()}>
      {open && (
        <motion.div className="fixed inset-0 z-[80]" exit={{ transition: { duration: 0 } }}>
          {/* slats that lift away */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: COLUMNS }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-ink h-full flex-1"
                initial={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-0 flex flex-col justify-between p-6 md:p-10"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <div className="flex items-start justify-between">
              <span className="label">Sudev Dahitule</span>
              <span className="label">Portfolio</span>
            </div>

            <div className="flex items-end justify-between gap-6">
              <div className="overflow-hidden">
                <motion.p
                  className="label text-bone/70 mb-3"
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                >
                  Software Developer / Mumbai, India
                </motion.p>
              </div>
              <span className="display text-bone text-[18vw] leading-[0.75] tabular-nums md:text-[12vw]">
                {String(count).padStart(3, "0")}
              </span>
            </div>

            <motion.div
              className="bg-bone/15 absolute right-6 bottom-0 left-6 h-px origin-left md:right-10 md:left-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ background: "#d9ff00" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
