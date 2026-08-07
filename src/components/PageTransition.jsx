import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

/** Curtain wipe between routes. */
const PageTransition = ({ children }) => (
  <>
    <motion.div
      className="bg-acid pointer-events-none fixed inset-0 z-[65] origin-bottom"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
    />
    <motion.div
      className="bg-ink pointer-events-none fixed inset-0 z-[64] origin-top"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    />
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
      {children}
    </motion.div>
  </>
);

export default PageTransition;
