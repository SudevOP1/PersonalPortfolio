import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useData } from "../DataContext.jsx";

import InProgress from "../assets/projects/InProgress.png";
import MainLayout from "../components/MainLayout.jsx";

const Projects = () => {
  let [activeProject, setActiveProject] = useState("Personal");

  let data = useData();
  let projects = data.projects;
  let getSkillColor = data.getSkillColor;
  
  return (
    <MainLayout>
      <h1 className="text-2xl sm:text-3xl text-slate-100 font-semibold">
        My Projects
      </h1>

      {/* buttons */}
      <div className="text-slate-300 bg-slate-500/20 w-full mt-5 rounded-full p-1 flex">
        {["Personal", "Client"].map((projectType, i) => (
          <button
            key={i}
            onClick={() => setActiveProject(projectType)}
            className={`w-1/2 py-2 rounded-full transition text-md font-semibold cursor-pointer ${
              activeProject === projectType
                ? "bg-slate-400 text-slate-900"
                : "text-slate-400 hover:bg-slate-500/40"
            }`}
          >
            {projectType}
          </button>
        ))}
      </div>

      {/* projects */}
      <div className="flex flex-col gap-6 mt-6">
        {Object.entries(projects[activeProject]).map(([projectName, project], i) => (
          <div
            key={i}
            className="w-full h-fit flex flex-col gap-5 p-4 pb-5 overflow-hidden max-w-300
              cursor-pointer rounded-2xl group border border-slate-400/80"
            onClick={() =>
              window.open(
                project.links.find(
                  (link) =>
                    (link.name === "Code" && link.link.length > 0) ||
                    (link.name === "Live" && link.link.length > 0)
                )?.link,
                "_blank"
              )
            }
          >
            {/* image */}
            <div className="rounded-lg border border-slate-400/80 overflow-hidden">
              <img
                src={project.img ? project.img : InProgress}
                className="group-hover:scale-105 transition"
              />
            </div>
            {/* name & desc */}
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl text-slate-100 font-semibold">
                {projectName}
              </h1>
              <h1 className="text-md sm:text-lg text-slate-400 font-semibold leading-[1.2]">
                {project.desc}
              </h1>
            </div>
            {/* stacks */}
            <div className="flex flex-wrap gap-2">
              {project.stacks.map((stack, j) => (
                <span
                  key={j}
                  className={`px-3 rounded-full text-md ${getSkillColor(stack)} `}
                >
                  {stack}
                </span>
              ))}
            </div>
            {/* links */}
            <div className="flex flex-row gap-3">
              {project.links.map(
                (link, j) =>
                  link.link.length > 0 && (
                    <a
                      key={j}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer transition
                        text-slate-300 bg-slate-600/30 hover:bg-slate-600/50 active:bg-slate-600/80
                        border border-slate-500/60 hover:border-slate-400/80 text-md font-medium"
                    >
                      {link.name === "Code" ? (
                        <Github className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      {"View " + link.name}
                    </a>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Projects;
