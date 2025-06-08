import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import Header from "../components/Header.jsx";
import InProgress from "../assets/projects/InProgress.png";
import MainLayout from "../components/MainLayout.jsx";
import { useData } from "../DataContext.jsx";

const MainPage = () => {
  let [activeProject, setActiveProject] = useState("Personal");

  let data = useData();
  let aboutMeText = data.aboutMeText;
  let skills = data.skills;
  let experiences = data.experiences;
  let projects = data.projects;

  return (
    <MainLayout classname="gap-15">
      {/* about me */}
      <Header heading="About Me" className="border border-red-500">
        {aboutMeText.map((text, i) => (
          <p className="text-slate-300 font-normal mt-1" key={i}>
            {text}
          </p>
        ))}
      </Header>

      {/* skills */}
      <Header heading="Skills">
        {Object.entries(skills).map(([cName, c], i) => (
          <div className="mt-3" key={i}>
            <h1 className="text-lg text-slate-300 font-semibold">{cName}</h1>
            <div className="flex flex-wrap gap-2 mt-1">
              {c.list.map((skill, j) => (
                <span key={j} className={`px-4 py-1 rounded-full ${c.color} `}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Header>

      {/* experience */}
      <Header heading="Experience">
        {Object.entries(experiences).map(([name, e], i) => (
          <div
            key={i}
            className="mt-5 border-l-3 border-slate-400/70 pl-8 py-2"
          >
            <div className="flex gap-8 items-center">
              <img
                src={e.img}
                className="rounded-full w-20 h-20 sm:w-25 sm:h-25 bg-white"
              />
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl text-slate-100 font-semibold">
                  {name}
                </h1>
                <h1 className="text-md sm:text-lg text-slate-300 font-semibold">
                  {e.role}
                </h1>
                <h1 className="text-xs sm:text-sm text-slate-500 font-semibold">
                  {e.period}
                </h1>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              {e.desc.map((line, j) => (
                <p className="text-sm text-slate-300 font-normal mt-1" key={j}>
                  • {line}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap mt-3 gap-2">
              {e.stacks.map((stack, j) => (
                <span
                  key={j}
                  className={`px-4 py-1 rounded-full text-xs sm:text-sm ${stack.color}`}
                >
                  {stack.stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Header>

      {/* projects */}
      <Header heading="Projects" className="">
        {/* buttons */}
        <>
          <button
            onClick={() => window.open("/projects", "_blank")}
            className="flex gap-1 items-center px-5 py-2 mt-2 rounded-full cursor-pointer transition
              text-slate-300 bg-slate-500/20 hover:bg-slate-500/40 active:bg-slate-500/90
              border border-white/60 hover:border-white w-full justify-center"
          >
            <p className="text-md font-semibold">View All Projects</p>
            <ExternalLink className="w-4 h-4" />
          </button>
          <div
            className="text-slate-300 bg-slate-500/20
                w-full rounded-full p-1 flex gap-1 mt-2"
          >
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
        </>

        {/* projects */}
        <div className="flex flex-wrap gap-5 mt-5">
          {Object.entries(projects[activeProject])
            .slice(0, 6)
            .map(([name, project], i) => (
              <div
                className="relative h-35 w-70 md:h-45 md:w-90 rounded-2xl overflow-hidden cursor-pointer group"
                key={i}
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
                <div
                  className="absolute inset-0 bg-cover bg-center transition group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${
                      project.img ? project.img : InProgress
                    })`,
                  }}
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/60 to-black/80 z-0"></div>
                <div className="flex flex-col flex-1 gap-1 absolute bottom-2 left-2 z-10">
                  <h1 className="text-md text-slate-100 font-semibold">
                    {name}
                  </h1>
                  <p className="text-slate-300 font-normal text-xs">
                    {project.desc}
                  </p>
                  <div className="flex flex-row gap-1">
                    {project.links.map(
                      (link, j) =>
                        link.link.length > 0 && (
                          <a
                            key={j}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition
                            text-slate-300 bg-slate-600/30 hover:bg-slate-600/50 active:bg-slate-600/80
                            border border-slate-500/60 hover:border-slate-400/80 text-xs font-medium"
                          >
                            {link.name === "Code" ? (
                              <Github className="w-3 h-3" />
                            ) : (
                              <ExternalLink className="w-3 h-3" />
                            )}
                            {"View " + link.name}
                          </a>
                        )
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Header>
    </MainLayout>
  );
};

export default MainPage;
