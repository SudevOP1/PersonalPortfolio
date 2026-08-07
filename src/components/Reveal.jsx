import { motion, useReducedMotion } from "framer-motion";

/** Generic scroll-in reveal: fades and lifts, optionally clipped by a mask. */
const Reveal = ({ children, className = "", delay = 0, y = 40, duration = 0.9, once = true }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: reduce ? 0.001 : duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
