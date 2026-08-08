import SectionHead from "../components/SectionHead.jsx";
import Reveal from "../components/Reveal.jsx";
import SplitText from "../components/SplitText.jsx";
import { useData } from "../ContextData.jsx";
import skillIcons from "../data/skillIcons.js";

const Skills = () => {
  const { skills } = useData();
  const categories = Object.entries(skills);

  return (
    <section id="stack" className="overflow-hidden py-24 md:py-36">
      <div className="px-6 md:px-10">
        <SectionHead index="04" title="Stack" right="Tools of the trade" />
        <h2 className="display text-bone mb-14 text-[clamp(2rem,6vw,5rem)] md:mb-20">
          <SplitText text="Everything I" by="word" />
          <br />
          <SplitText text="reach for." by="word" delay={0.06} className="text-bone/40" />
        </h2>
      </div>

      <div className="border-line grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-5">
        {categories.map(([category, group], i) => {
          // the source list repeats a couple of entries — collapse them
          const unique = Array.from(new Map(group.list.map((s) => [s.name, s])).values());

          return (
            <Reveal
              key={category}
              y={30}
              delay={i * 0.06}
              className="border-line group/col relative border-b px-6 py-10 sm:px-8 lg:border-r lg:py-12 lg:last:border-r-0"
            >
              <span
                aria-hidden
                className="display text-bone/5 pointer-events-none absolute -top-4 right-4 text-[6rem] leading-none select-none transition-colors duration-500 group-hover/col:text-acid/10 md:text-[7rem]"
              >
                0{i + 1}
              </span>

              <div className="relative mb-7 flex items-baseline justify-between gap-4">
                <p className="label flex items-baseline gap-3">
                  <span className="text-acid">0{i + 1}</span>
                  {category}
                </p>
                <p className="label text-[0.55rem]">{String(unique.length).padStart(2, "0")}</p>
              </div>

              <p className="relative flex flex-col gap-2">
                {unique.map((skill, si) => {
                  const Icon = skillIcons[skill.name];

                  return (
                    <span key={skill.name} className="inline-flex items-baseline">
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="display text-bone/75 hover:text-acid inline-flex items-center gap-2 text-[clamp(1.2rem,2.6vw,1.75rem)] leading-none transition-colors duration-300"
                        data-cursor="link"
                      >
                        {Icon && <Icon className="h-[0.8em] w-[0.8em] shrink-0" />}
                        {skill.name}
                      </a>
                      {si < unique.length - 1 && <span className="text-line mx-2 font-mono text-xs">/</span>}
                    </span>
                  );
                })}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
