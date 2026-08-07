import { motion } from "framer-motion";

/** Numbered section marker + hairline, the spine of the whole layout. */
const SectionHead = ({ index, title, right = null, className = "" }) => (
  <div className={`mb-10 md:mb-16 ${className}`}>
    <motion.div
      className="bg-line mb-4 h-px origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    />
    <div className="flex items-baseline justify-between gap-6">
      <p className="label flex items-baseline gap-3">
        <span className="text-acid">({index})</span>
        <span>{title}</span>
      </p>
      {right && <p className="label text-right">{right}</p>}
    </div>
  </div>
);

export default SectionHead;
