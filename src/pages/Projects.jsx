import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Layout from "../components/Layout.jsx";
import SplitText from "../components/SplitText.jsx";
import ProjectList from "../components/ProjectList.jsx";
import { useData } from "../ContextData.jsx";

const TABS = ["Personal", "Client"];

const Projects = () => {
  const { projects } = useData();
  const [tab, setTab] = useState("Personal");

  const entries = Object.entries(projects[tab]);

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
        <div className="border-line mt-12 flex flex-col items-start gap-5 border-t pt-6 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="border-line bg-ink-2/60 flex w-full gap-1.5 rounded-full border p-2 md:w-auto">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative flex-1 rounded-full px-4 py-4 font-mono text-[0.8rem] tracking-[0.18em] uppercase transition-colors md:flex-none md:px-16 md:py-5 md:text-[1.05rem]"
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
          <p className="label hidden text-[0.6rem] md:block">{String(entries.length).padStart(2, "0")} projects</p>
        </div>

        {/* list */}
        <ProjectList entries={entries} animationKey={tab} />
      </section>
    </Layout>
  );
};

export default Projects;
