import { motion, useReducedMotion } from "framer-motion";

/**
 * motion.create() returns a new component type on every call, so it must never
 * run during render — React would unmount/remount the tree and replay the
 * entry animation. Cache one type per tag instead.
 */
const motionTags = new Map();
const motionTag = (tag) => {
  if (!motionTags.has(tag)) motionTags.set(tag, motion.create(tag));
  return motionTags.get(tag);
};

/**
 * Text that climbs out of a mask, word by word or character by character.
 * Words are never broken across lines: each word is its own overflow-hidden box.
 */
const SplitText = ({
  text,
  by = "word",
  className = "",
  delay = 0,
  stagger = 0.035,
  duration = 0.9,
  once = true,
  animate: forceAnimate = null, // null = trigger on scroll, true/false = controlled
  as: Tag = "span",
  interactive = false, // hover a letter -> instant acid, slow drain back
}) => {
  const reduce = useReducedMotion();
  const words = String(text).split(" ");

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
  };

  const piece = {
    hidden: { y: "115%", rotate: reduce ? 0 : 4 },
    visible: {
      y: "0%",
      rotate: 0,
      transition: { duration: reduce ? 0.001 : duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motionTag(Tag);
  const trigger =
    forceAnimate === null
      ? { whileInView: "visible", viewport: { once, margin: "-12% 0px -12% 0px" } }
      : { animate: forceAnimate ? "visible" : "hidden" };

  return (
    <MotionTag
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      {...trigger}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden align-bottom pb-[0.12em] whitespace-nowrap" aria-hidden>
          {by === "char" ? (
            word.split("").map((ch, ci) => (
              <motion.span key={ci} variants={piece} className="inline-block will-change-transform">
                {interactive ? (
                  <span className="relative inline-block">
                    {ch}
                    <span
                      aria-hidden
                      className="text-acid absolute inset-0 opacity-0
                        [transition:opacity_1.8s_var(--ease-out-expo)]
                        hover:opacity-100 hover:[transition:opacity_0s]"
                    >
                      {ch}
                    </span>
                  </span>
                ) : (
                  ch
                )}
              </motion.span>
            ))
          ) : (
            <motion.span variants={piece} className="inline-block will-change-transform">
              {word}
            </motion.span>
          )}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
};

export default SplitText;
