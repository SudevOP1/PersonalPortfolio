import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/** Counts up to the numeric part of a value ("20+" → 0…20 then "+"). */
const Counter = ({ value, duration = 1.4, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    if (reduce) return setN(target);

    let raf;
    const startedAt = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - startedAt) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 4);
      setN(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${n}${suffix}`}
    </span>
  );
};

export default Counter;
