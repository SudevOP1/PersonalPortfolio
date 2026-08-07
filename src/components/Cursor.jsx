import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/**
 * Custom cursor: a small dot that tracks 1:1 and a ring that lags behind.
 * Any element can drive it with `data-cursor="link|view|drag|hide"` and
 * `data-cursor-label="TEXT"`.
 */
const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 30, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const hit = e.target instanceof Element ? e.target.closest("[data-cursor]") : null;
      if (hit) {
        setVariant(hit.getAttribute("data-cursor") || "link");
        setLabel(hit.getAttribute("data-cursor-label") || "");
      } else if (e.target instanceof Element && e.target.closest("a,button,[role='button']")) {
        setVariant("link");
        setLabel("");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ring = {
    default: { width: 34, height: 34, opacity: 1, backgroundColor: "rgba(217,255,0,0)", borderColor: "#ededed" },
    link: { width: 62, height: 62, opacity: 1, backgroundColor: "rgba(217,255,0,0.12)", borderColor: "#d9ff00" },
    view: { width: 108, height: 108, opacity: 1, backgroundColor: "#d9ff00", borderColor: "#d9ff00" },
    drag: { width: 88, height: 88, opacity: 1, backgroundColor: "rgba(237,237,237,0.08)", borderColor: "#ededed" },
    hide: { width: 0, height: 0, opacity: 0, backgroundColor: "rgba(0,0,0,0)", borderColor: "#ededed" },
  }[variant];

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block">
      <motion.div
        className="absolute top-0 left-0 flex items-center justify-center rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ ...ring, scale: down ? 0.82 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.5 }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="font-mono text-[10px] tracking-[0.2em] text-ink uppercase"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 h-1.5 w-1.5 rounded-full bg-acid"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: variant === "default" ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

export default Cursor;
