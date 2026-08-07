import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity, useReducedMotion } from "framer-motion";

/**
 * Infinite ticker. The whole strip skews with scroll velocity, which is the
 * cheapest way to make a page feel physical.
 */
const Marquee = ({ items, duration = 26, reverse = false, className = "", separator = "◆", skew = true }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 300, damping: 50 });
  const skewY = useTransform(smooth, [-2500, 0, 2500], [-6, 0, 6], { clamp: true });

  const row = (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{item}</span>
          <span className="text-acid px-2 text-[0.5em] opacity-70">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      style={skew && !reduce ? { skewY } : undefined}
      className={`pause-on-hover w-full overflow-hidden ${className}`}
    >
      <div
        className={`flex w-max ${reverse ? "marquee-track-rev" : "marquee-track"}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {row}
        {row}
      </div>
    </motion.div>
  );
};

export default Marquee;
