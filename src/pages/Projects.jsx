import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

import InProgress from "../assets/projects/InProgress.png";
import Layout from "../components/Layout.jsx";
import SplitText from "../components/SplitText.jsx";
import Reveal from "../components/Reveal.jsx";
import { useData } from "../ContextData.jsx";

const TABS = ["Personal", "Client"];

const firstLink = (project) => project.links?.find((l) => l.link && l.link.length > 0)?.link || null;

const Projects = () => {
  const { projects } = useData();
  const [tab, setTab] = useState("Personal");
  const [hovered, setHovered] = useState(null);
  const reduce = useReducedMotion();
  const listRef = useRef(null);

  // cursor-following preview
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.5 });
  const py = useSpring(my, { stiffness: 180, damping: 22, mass: 0.5 });

  const onMove = (e) => {
    mx.set(e.clientX);
    my.set(e.clientY);
  };

  const entries = Object.entries(projects[tab]);
  const preview = hovered !== null ? entries[hovered]?.[1] : null;

  return (
    <Layout>
      <section className="px-6 pt-32 pb-16 md:px-10 md:pt-40">
        {/* head */}
        <div className="bg-line mb-4 h-px" />
        <div className="flex items-baseline justify-between gap-6">
          <p className="label flex items-baseline gap-3">
            <span className="text-acid">(00)</span>
            <span>Index</span>
          </p>
          <Link to="/" className="label hover:text-acid group flex items-center gap-2 transition-colors" data-cursor="link">
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="link-underline">Back home</span>
          </Link>
        </div>

        <h1 className="display text-bone mt-10 text-[clamp(3rem,14vw,13rem)]">
          <SplitText text="All Projects" by="char" stagger={0.025} />
        </h1>

        {/* filters */}
        <div className="border-line mt-12 flex items-center justify-between border-t pt-6">
          <div className="flex gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setHovered(null);
                }}
                className="relative rounded-full px-5 py-2 font-mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors"
                data-cursor="link"
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-pill"
                    className="bg-acid absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 340, damping: 32 }}
                  />
                )}
                <span className={`relative z-10 ${tab === t ? "text-ink" : "text-bone/60 hover:text-bone"}`}>{t}</span>
              </button>
            ))}
          </div>
          <p className="label text-[0.6rem]">{String(entries.length).padStart(2, "0")} entries</p>
        </div>

        {/* list */}
        <div ref={listRef} onMouseMove={onMove} onMouseLeave={() => setHovered(null)} className="mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {entries.map(([name, project], i) => {
                const href = firstLink(project);
                const Row = href ? "a" : "div";

                return (
                  <Reveal key={name} delay={Math.min(i * 0.04, 0.4)} y={26}>
                    <Row
                      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                      onMouseEnter={() => setHovered(i)}
                      className="group border-line hover:border-acid/40 relative block border-b transition-colors"
                      data-cursor={href ? "view" : "hide"}
                      data-cursor-label={href ? "Open" : ""}
                    >
                      {/* acid wash on hover */}
                      <span className="bg-acid/[0.06] pointer-events-none absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

                      <div className="relative flex flex-col gap-4 py-7 md:flex-row md:items-center md:gap-8 md:py-9">
                        <span className="label text-acid w-10 shrink-0 text-[0.6rem]">{String(i + 1).padStart(2, "0")}</span>

                        {/* inline thumb for small screens */}
                        <div className="border-line aspect-[16/10] w-full overflow-hidden border md:hidden">
                          <img
                            src={project.img || InProgress}
                            alt={name}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h2 className="display text-bone group-hover:text-acid text-[clamp(1.5rem,4.2vw,3rem)] transition-colors duration-500">
                            {name}
                          </h2>
                          <p className="text-bone/50 mt-2 max-w-xl text-sm leading-relaxed">{project.desc || "—"}</p>
                        </div>

                        <div className="flex max-w-xs flex-wrap gap-x-3 gap-y-1 md:justify-end">
                          {project.stacks.slice(0, 6).map((s) => (
                            <span key={s} className="label text-[0.55rem]">
                              {s}
                            </span>
                          ))}
                        </div>

                        <span className="text-bone/30 group-hover:text-acid hidden text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 md:block">
                          ↗
                        </span>
                      </div>
                    </Row>
                  </Reveal>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* floating preview */}
      {!reduce && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-40 hidden md:block"
          style={{ x: px, y: py, translateX: "-50%", translateY: "-50%" }}
        >
          <AnimatePresence>
            {preview && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.86, rotate: 3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="border-line bg-ink-2 h-[220px] w-[330px] overflow-hidden border shadow-2xl"
              >
                <img src={preview.img || InProgress} alt="" className="h-full w-full object-cover" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </Layout>
  );
};

export default Projects;
