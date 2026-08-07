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
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col justify-between px-6 pt-28 pb-8 md:px-10">
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
              Portfolio — {profile.since}
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.p
              className="label flex items-center gap-2"
              initial={{ y: "120%" }}
              animate={ready ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="bg-acid absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-acid relative inline-flex h-1.5 w-1.5 rounded-full" />
              </span>
              {profile.available ? "Available for work" : "Currently booked"}
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

          <h1 className="display text-bone text-[clamp(3.2rem,15.5vw,15rem)]">
            <SplitText text="Full—Stack" by="char" animate={ready} delay={0.28} stagger={0.028} className="block" />
            <span className="flex flex-wrap items-baseline gap-x-[0.12em]">
              <SplitText text="Developer" by="char" animate={ready} delay={0.42} stagger={0.028} />
              <motion.span
                className="text-acid text-[0.18em] leading-none"
                initial={{ opacity: 0, scale: 0.3, rotate: -40 }}
                animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1 }}
              >
                ®
              </motion.span>
            </span>
          </h1>

          {/* portrait, clipped open */}
          <motion.div
            className="absolute top-0 right-0 hidden h-40 w-32 overflow-hidden lg:block xl:h-52 xl:w-42"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={ready ? { clipPath: "inset(0 0 0% 0)" } : {}}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.75 }}
          >
            <motion.img
              src={Sudev}
              alt={profile.name}
              className="h-full w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
              style={{ y: portraitY, scale: portraitScale }}
              data-cursor="view"
              data-cursor-label="Hi"
            />
          </motion.div>
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
