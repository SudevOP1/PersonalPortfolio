import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";

import InProgress from "../assets/projects/InProgress.png";
import { useData } from "../ContextData.jsx";

const FEATURED = ["Minecraft Clone", "LetsChess2", "BlogWritingAI", "Image to Ascii Art", "N Queens Visualizer", "AI Workout Planner", "Certificate Generator"];

const firstLink = (project) => project.links?.find((l) => l.link && l.link.length > 0)?.link || null;

const Work = () => {
  const { projects } = useData();
  const reduce = useReducedMotion();

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const personal = projects.Personal;
  const items = FEATURED.filter((name) => personal[name]).map((name) => ({ name, ...personal[name] }));

  // how far the rail has to travel horizontally
  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 400); // after images/fonts settle
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [items.length]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const progress = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative"
      style={{ height: reduce ? "auto" : `calc(100vh + ${distance}px)` }}
    >
      <div
        className={`sticky top-0 flex h-[100svh] flex-col justify-center ${
          reduce ? "overflow-x-auto" : "overflow-hidden"
        }`}
      >
        {/* head */}
        <div className="absolute inset-x-0 top-0 px-6 pt-24 md:px-10 md:pt-28">
          <div className="bg-line mb-4 h-px" />
          <div className="flex items-baseline justify-between gap-6">
            <p className="label flex items-baseline gap-3">
              <span className="text-acid">(02)</span>
              <span>Selected Work</span>
            </p>
            <Link
              to="/projects"
              className="label hover:text-acid group flex items-center gap-2 transition-colors"
              data-cursor="link"
            >
              <span className="link-underline">All projects</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* rail */}
        <motion.div
          ref={trackRef}
          style={reduce ? undefined : { x }}
          className="flex w-max items-center gap-6 px-6 md:gap-10 md:px-10"
        >
          {items.map((project, i) => {
            const href = firstLink(project);
            const Card = href ? "a" : "div";

            return (
              <Card
                key={project.name}
                {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative block w-[78vw] shrink-0 sm:w-[52vw] lg:w-[36vw] xl:w-[30vw]"
                data-cursor={href ? "view" : "hide"}
                data-cursor-label={href ? "View" : ""}
              >
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="label text-acid">{String(i + 1).padStart(2, "0")}</span>
                  <span className="label">{project.completed ? "Shipped" : "In progress"}</span>
                </div>

                <div className="bg-ink-2 border-line relative aspect-[4/3] overflow-hidden border">
                  <motion.img
                    src={project.img || InProgress}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="bg-acid absolute bottom-0 left-0 h-[3px] w-0 transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </div>

                <h3 className="display text-bone group-hover:text-acid mt-5 text-2xl transition-colors md:text-3xl">
                  {project.name}
                </h3>
                <p className="text-bone/55 mt-2 line-clamp-2 max-w-md text-sm leading-relaxed">
                  {project.desc || "—"}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                  {project.stacks.slice(0, 5).map((s) => (
                    <span key={s} className="label text-[0.55rem]">
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}

          {/* end card */}
          <Link
            to="/projects"
            className="group border-line hover:border-acid flex h-[45vh] w-[70vw] shrink-0 flex-col items-center justify-center border border-dashed transition-colors sm:w-[40vw] lg:w-[26vw]"
            data-cursor="view"
            data-cursor-label="Open"
          >
            <span className="display text-bone/40 group-hover:text-acid text-4xl transition-colors md:text-5xl">
              View all
            </span>
            <span className="label mt-3">{Object.keys(personal).length}+ projects</span>
          </Link>
        </motion.div>

        {/* rail progress */}
        <div className="absolute inset-x-6 bottom-10 md:inset-x-10">
          <div className="bg-line h-px w-full">
            <motion.div className="bg-acid h-px" style={{ width: progress }} />
          </div>
          <p className="label mt-3 text-[0.55rem]">Scroll to move sideways</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
