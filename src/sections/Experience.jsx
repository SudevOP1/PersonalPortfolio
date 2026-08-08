import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import SectionHead from "../components/SectionHead.jsx";
import SplitText from "../components/SplitText.jsx";
import { useData } from "../ContextData.jsx";

const ExpCard = ({ name, exp, index, total }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // card shrinks and dims as the next one slides over it
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 120px", "end 220px"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.8]);

  return (
    <div ref={ref} className="sticky" style={{ top: `${96 + index * 22}px` }}>
      <motion.article
        style={{ scale }}
        className="bg-ink-2/95 border-line hover:border-acid/40 mb-6 overflow-hidden border transition-colors"
      >
        <a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="grid grid-cols-1 gap-8 p-6 md:grid-cols-12 md:gap-6 md:p-10 group"
          data-cursor="view"
          data-cursor-label="Visit"
        >
          {/* identity */}
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-bone h-14 w-14 shrink-0 overflow-hidden rounded-full p-1">
                <img src={exp.img} alt={name} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="label">
                <p className="text-acid">{exp.period}</p>
                <p className="mt-1">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            <h3 className="display text-bone group-hover:text-acid text-[clamp(1.8rem,4vw,3.4rem)] transition-colors">{name}</h3>
            <p className="text-bone/60 mt-2 text-sm md:text-base">{exp.role}</p>
          </div>

          {/* detail */}
          <div className="md:col-span-6 md:col-start-7">
            <ul className="flex flex-col gap-4">
              {exp.desc.map((line, i) => (
                <li key={i} className="text-bone/70 flex gap-4 text-sm leading-relaxed">
                  <span className="text-acid mt-[0.35em] block h-px w-6 shrink-0 bg-current" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="border-line mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t pt-6">
              {exp.stacks.map((s) => (
                <span key={s} className="label hover:text-acid text-[0.55rem] transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </a>
      </motion.article>
    </div>
  );
};

const Experience = () => {
  const { experiences } = useData();
  const entries = Object.entries(experiences).reverse(); // most recent first

  return (
    <section id="experience" className="px-6 py-24 md:px-10 md:py-36">
      <SectionHead index="03" title="Experience" right="2024 — 2026" />

      <h2 className="display text-bone mb-14 text-[clamp(2rem,6vw,5rem)] md:mb-20">
        <SplitText text="Where I've" by="word" />
        <br />
        <SplitText text="been building" by="word" delay={0.06} className="text-bone/40" />
      </h2>

      <div className="relative">
        {entries.map(([name, exp], i) => (
          <ExpCard key={name} name={name} exp={exp} index={i} total={entries.length} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
