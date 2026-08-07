import { motion } from "framer-motion";

import SectionHead from "../components/SectionHead.jsx";
import SplitText from "../components/SplitText.jsx";
import Magnetic from "../components/Magnetic.jsx";
import Reveal from "../components/Reveal.jsx";
import { useData } from "../ContextData.jsx";

const nameFor = (href = "") => {
  if (href.includes("linkedin")) return "LinkedIn";
  if (href.includes("github")) return "GitHub";
  if (href.startsWith("mailto:")) return "Email";
  return "Resume";
};

const handleFor = (href = "") => {
  if (href.includes("linkedin")) return "/in/Sudev-Dahitule";
  if (href.includes("github")) return "@SudevOP1";
  if (href.startsWith("mailto:")) return href.replace("mailto:", "");
  return "PDF — 120kb";
};

const Contact = () => {
  const { profile, contacts } = useData();

  return (
    <section id="contact" className="relative px-6 pt-24 pb-16 md:px-10 md:pt-36">
      <SectionHead index="05" title="Contact" right="Say hello" />

      <h2 className="display text-bone text-[clamp(2.6rem,11vw,10rem)]">
        <SplitText text="Let's build" by="char" stagger={0.025} />
        <br />
        <SplitText text="something" by="char" stagger={0.025} delay={0.1} className="text-bone/35" />
        <br />
        <span className="flex flex-wrap items-baseline gap-x-[0.15em]">
          <SplitText text="good." by="char" stagger={0.025} delay={0.2} />
          <motion.span
            className="text-acid text-[0.2em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            ↗
          </motion.span>
        </span>
      </h2>

      <Reveal className="mt-14 md:mt-20" delay={0.1}>
        <Magnetic strength={0.22}>
          <a
            href={`mailto:${profile.email}`}
            className="group border-line hover:border-acid inline-flex items-center gap-5 rounded-full border px-7 py-4 transition-colors md:px-10 md:py-6"
            data-cursor="link"
            data-cursor-label="Mail"
          >
            <span className="bg-acid h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-[2.2]" />
            <span className="text-bone group-hover:text-acid font-mono text-sm tracking-wide transition-colors md:text-lg">
              {profile.email}
            </span>
            <span className="text-bone/50 group-hover:text-acid text-lg transition-all duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Magnetic>
      </Reveal>

      {/* channels */}
      <div className="mt-16 md:mt-24">
        {contacts.map((c, i) => {
          const label = nameFor(c.href);
          const isResume = label === "Resume";

          return (
            <Reveal key={i} delay={i * 0.05} y={24}>
              <a
                href={c.href}
                target={isResume ? "_self" : "_blank"}
                rel={isResume ? undefined : "noopener noreferrer"}
                download={isResume || undefined}
                className="group border-line hover:border-acid/50 flex items-center justify-between gap-6 border-t py-6 transition-colors md:py-8"
                data-cursor="link"
              >
                <span className="flex items-baseline gap-4 md:gap-8">
                  <span className="label text-acid text-[0.6rem]">0{i + 1}</span>
                  <span className="display text-bone group-hover:text-acid text-[clamp(1.6rem,4.5vw,3.5rem)] transition-colors duration-500 group-hover:translate-x-2 md:transition-[color,transform]">
                    {label}
                  </span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="label hidden text-[0.6rem] sm:inline">{handleFor(c.href)}</span>
                  <span className="text-bone/40 group-hover:text-acid text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          );
        })}
        <div className="bg-line h-px" />
      </div>
    </section>
  );
};

export default Contact;
