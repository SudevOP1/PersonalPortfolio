import { Link } from "react-router-dom";

import ProjectList from "../components/ProjectList.jsx";
import { useData } from "../ContextData.jsx";

const FEATURED = ["Minecraft Clone", "Lets Chess 2", "Blog Writing AI"];

const Work = () => {
  const { projects } = useData();

  const personal = projects.Personal;
  const entries = FEATURED.filter((name) => personal[name]).map((name) => [name, personal[name]]);

  return (
    <section id="work" className="px-6 py-24 md:px-10 md:py-32">
      {/* head */}
      <div className="bg-line mb-4 h-px" />
      <div className="flex items-baseline justify-between gap-6">
        <p className="label flex items-baseline gap-3">
          <span className="text-acid">(02)</span>
          <span>Selected Work</span>
        </p>
        <Link to="/projects" className="label hover:text-acid group flex items-center gap-2 transition-colors" data-cursor="link">
          <span className="link-underline">All projects</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <ProjectList entries={entries} animationKey="featured" />

      {/* end card */}
      <Link
        to="/projects"
        className="group border-line hover:border-acid mt-10 flex h-[28vh] w-full items-center justify-center border border-dashed transition-colors"
        data-cursor="view"
        data-cursor-label="Open"
      >
        <span className="display text-bone/40 group-hover:text-acid text-4xl transition-colors md:text-5xl">
          View All Projects
        </span>
      </Link>
    </section>
  );
};

export default Work;
