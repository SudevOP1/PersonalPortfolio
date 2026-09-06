import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

import { subscribePointer } from "../lib/pointer.js";

/** Child drifts toward the cursor while it is inside the element, then snaps back. */
const Magnetic = ({ children, strength = 0.35, className = "" }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  // Driven by the shared tracker rather than mouseenter/mouseleave: scrolling
  // moves the element out from under a parked cursor without firing either, so
  // the child would otherwise stay stuck at its last offset.
  useEffect(() => {
    if (reduce) return;

    return subscribePointer((cx, cy, inside) => {
      const el = ref.current;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const over = inside && cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom;

      if (!over) {
        x.set(0);
        y.set(0);
        return;
      }

      x.set((cx - (r.left + r.width / 2)) * strength);
      y.set((cy - (r.top + r.height / 2)) * strength);
    });
  }, [reduce, strength, x, y]);

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
};

export default Magnetic;
