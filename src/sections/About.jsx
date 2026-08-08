import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import Sudev from "../assets/Sudev.png";
import SectionHead from "../components/SectionHead.jsx";
import SplitText from "../components/SplitText.jsx";
import Counter from "../components/Counter.jsx";
import Reveal from "../components/Reveal.jsx";
import { useData } from "../ContextData.jsx";

const About = () => {
  const { aboutMeText, profile } = useData();
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <section id="about" ref={ref} className="relative px-6 py-24 md:px-10 md:py-36">
      <SectionHead index="01" title="About" right="Who / What / Why" />

      {/* the statement */}
      <h2 className="display text-bone max-w-[18ch] text-[clamp(2.2rem,7.2vw,6.5rem)]">
        <SplitText text="I build things" by="word" stagger={0.05} />
        <br />
        <SplitText text="that feel as good" by="word" stagger={0.05} delay={0.08} className="text-bone/45" />
        <br />
        <SplitText text="as they work." by="word" stagger={0.05} delay={0.16} />
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
        {/* image column */}
        <div className="md:col-span-4">
          {/* <motion.div
            className="relative aspect-[4/5] overflow-hidden"
            initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            data-cursor="view"
            data-cursor-label="Sudev"
          >
            <motion.img
              src={Sudev}
              alt={profile.name}
              style={{ y: imgY, scale: 1.2 }}
              className="h-full w-full object-cover grayscale contrast-125"
            />
            <div className="from-ink/70 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
              <span className="label text-bone">{profile.firstName}</span>
              <span className="label text-acid">{profile.location}</span>
            </div>
          </motion.div> */}
          <motion.img
            src={Sudev}
            alt={profile.name}
            loading="lazy"
            className="h-full w-full object-cover grayscale-0 md:grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            data-cursor="view"
            data-cursor-label="Hi"
          />
        </div>

        {/* copy column */}
        <div className="flex flex-col gap-8 md:col-span-7 md:col-start-6">
          {aboutMeText.map((text, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-bone/75 max-w-2xl text-base leading-relaxed md:text-lg">
                <span className="text-acid mr-3 font-mono text-xs align-super">0{i + 1}</span>
                {text}
              </p>
            </Reveal>
          ))}

          {/* stats */}
          <div className="border-line mt-4 grid grid-cols-2 gap-px border-t pt-8 sm:grid-cols-4">
            {profile.stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08} y={24}>
                <div className="pr-4">
                  <p className="display text-bone text-4xl md:text-5xl">
                    <Counter value={s.value} />
                  </p>
                  <p className="label mt-2 text-[0.6rem] leading-relaxed">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
