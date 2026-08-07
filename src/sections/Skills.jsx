import SectionHead from "../components/SectionHead.jsx";
import Marquee from "../components/Marquee.jsx";
import Reveal from "../components/Reveal.jsx";
import SplitText from "../components/SplitText.jsx";
import { useData } from "../ContextData.jsx";

const SPEEDS = [34, 42, 30, 46];

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

      <div className="flex flex-col">
        {categories.map(([category, group], i) => {
          // the source list repeats a couple of entries — collapse them
          const unique = Array.from(new Map(group.list.map((s) => [s.name, s])).values());

          return (
            <Reveal key={category} className="border-line border-t py-8 md:py-10" y={30} delay={i * 0.05}>
              <div className="mb-5 flex items-baseline justify-between px-6 md:px-10">
                <p className="label flex items-baseline gap-3">
                  <span className="text-acid">0{i + 1}</span>
                  {category}
                </p>
                <p className="label text-[0.55rem]">{String(unique.length).padStart(2, "0")} items</p>
              </div>

              <Marquee
                duration={SPEEDS[i % SPEEDS.length]}
                reverse={i % 2 === 1}
                separator="/"
                className="display text-bone text-[clamp(1.8rem,5vw,4rem)]"
                items={unique.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stroke"
                    data-cursor="link"
                  >
                    {skill.name}
                  </a>
                ))}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
