import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import Sudev from "../assets/Sudev.png";
import SplitText from "../components/SplitText.jsx";
import Clock from "../components/Clock.jsx";
import { useData } from "../ContextData.jsx";
import { scrollToId } from "../lib/smoothScroll.js";

const Hero = ({ ready }) => {
  const { profile } = useData();
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-28%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  const line = { hidden: { scaleX: 0 }, visible: { scaleX: 1 } };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-between px-6 pt-28 pb-16 md:min-h-[100svh] md:px-10 md:pb-8"
    >
      <motion.div style={{ y, opacity: fade }} className="flex flex-1 flex-col justify-between">
        {/* top meta */}
        <div className="flex items-start justify-between gap-6">
          <div className="overflow-hidden">
            <motion.p
              className="label"
              initial={{ y: "120%" }}
              animate={ready ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Portfolio
            </motion.p>
          </div>
        </div>

        {/* the headline */}
        <div className="relative mt-10 mb-6">
          <motion.div
            className="bg-line mb-6 h-px origin-left"
            variants={line}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />

          <h1 className="display text-bone text-[14vw] flex flex-col gap-1">
            <SplitText text="Software" by="char" animate={ready} delay={0.3} stagger={0.035} className="block" />
            <span className="flex flex-row">
              <SplitText text="Developer" by="char" animate={ready} delay={0.6} stagger={0.035} />
              <SplitText text="." by="char" className="text-acid" animate={ready} delay={1} stagger={0.035} />
            </span>
          </h1>
        </div>

        {/* bottom meta */}
        <div>
          <motion.div
            className="bg-line mb-5 h-px origin-left"
            variants={line}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <motion.div
              className="label md:col-span-3"
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="text-bone/80">{profile.location}</p>
              <p className="mt-1">
                <Clock />
              </p>
            </motion.div>

            <motion.p
              className="text-bone/70 max-w-md text-sm leading-relaxed md:col-span-5 md:col-start-5"
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {profile.tagline}
            </motion.p>

            <motion.button
              onClick={() => scrollToId("about")}
              className="group text-bone/70 hover:text-acid flex items-end gap-3 self-end transition-colors md:col-span-3 md:col-start-10 md:justify-self-end"
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.15 }}
              data-cursor="link"
            >
              <span className="label group-hover:text-acid">Scroll</span>
              <motion.span
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg leading-none"
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
