import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import UnicodeLogo from "../assets/UnicodeLogo.png";
import QYLogo from "../assets/QYLogo.png";
import Header from "../components/Header.jsx";

import CertificateGenerator from "../assets/projects/CertificateGenerator.png";
import TypingGame from "../assets/projects/TypingGame.png";
import SudokuSolver from "../assets/projects/SudokuSolver.png";
import NQueensVisualizer from "../assets/projects/NQueensVisualizer.png";
import ImageToAscii from "../assets/projects/ImageToAscii.png";
import AiFitnessPlanner from "../assets/projects/AiFitnessPlanner.png";
import QY from "../assets/projects/QY.png";
import InProgress from "../assets/projects/InProgress.png";
import MainLayout from "../components/MainLayout.jsx";

const MainPage = () => {
  let [activeProject, setActiveProject] = useState("Personal");

  let tagColors = {
    amber: "bg-amber-600/10 text-amber-600 border border-amber-400/80",
    lime: "bg-lime-600/10 text-lime-600 border border-lime-400/80",
    cyan: "bg-cyan-600/10 text-cyan-600 border border-cyan-400/80",
    pink: "bg-pink-600/10 text-pink-600 border border-pink-400/80",
    red: "bg-red-600/10 text-red-600 border border-red-400/80",
    fuchsia: "bg-fuchsia-600/10 text-fuchsia-600 border border-fuchsia-400/80",
  };
  let aboutMeText = useMemo(
    () => [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices, orci sed volutpat maximus, purus sapien viverra arcu, eu luctus leo sem eu orci. Aenean venenatis feugiat lacus, vel consequat nulla pellentesque at. Aenean eu ultricies ligula.",
      "Donec viverra ultrices vestibulum. Curabitur nec mi neque. Maecenas ac tincidunt est. Fusce maximus erat quis sapien euismod porttitor. Vivamus non imperdiet risus. Aenean pulvinar arcu orci, non ullamcorper dolor lobortis ut. Morbi scelerisque lacus sed tincidunt feugiat. In convallis consectetur convallis. Morbi tempus sem eu lacinia aliquet. Morbi porta turpis risus, porttitor volutpat metus molestie id. Vivamus vitae urna et arcu dictum.",
    ],
    []
  );
  let skills = useMemo(
    () => [
      {
        name: "Languages",
        list: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "SQL"],
        color: tagColors["amber"],
      },
      {
        name: "Frameworks",
        list: [
          "ReactJS",
          "Django",
          "Django REST Framework (DRF)",
          "TailwindCSS",
          "Pygame",
          "Pillow",
          "p5.js",
          "Processing",
          "pytmx",
        ],
        color: tagColors["lime"],
      },
      {
        name: "Technologies",
        list: [
          "REST APIs",
          "Google Gemini API",
          "JSON Web Tokens (JWT)",
          "Google Book API",
        ],
        color: tagColors["cyan"],
      },
      {
        name: "Developer Tools",
        list: [
          "VSCode",
          "Git",
          "Figma",
          "MySQL",
          "Postman",
          "AutoCAD",
          "Blender",
        ],
        color: tagColors["pink"],
      },
    ],
    []
  );
  let experiences = useMemo(
    () => [
      {
        img: UnicodeLogo,
        name: "Unicode",
        role: "Fullstack Django Mentee",
        period: "Aug 25 - May 25",
        desc: [
          "Part of DJ Sanghvi's Computer Dept's official tech club, working on fullstack Django and React projects",
          "Completed multiple project tasks under senior mentorship and gained hands-on experience",
        ],
        stacks: [
          "ReactJS",
          "Django",
          "Django REST Framework (DRF)",
          "REST APIs",
          "Google Gemini API",
          "JSON Web Tokens (JWT)",
          "TailwindCSS",
          "JavaScript",
          "VSCode",
          "Git",
          "Figma",
          "Postman",
        ],
      },
      {
        img: QYLogo,
        name: "Quickyearning Pvt. Ltd.",
        role: "Fullstack Django Web Developer",
        period: "Jan 25 - Apr 25",
        desc: [
          "Developed the backend using Django to fetch data and create RESTful APIs for frontend integration",
          "Built dynamic frontend pages in React, consuming APIs and managing state efficiently",
          "Worked across the full stack to implement features and improve platform performance",
        ],
        stacks: [
          "ReactJS",
          "Django",
          "Django REST Framework (DRF)",
          "TailwindCSS",
          "JavaScript",
          "Git",
          "Postman",
        ],
      },
    ],
    []
  );
  let projects = {
    Personal: [
      {
        name: "Certificate Generator",
        img: CertificateGenerator,
        desc: "Personalized certificate generator with email and QR verification",
        stacks: [
          "Python",
          "Django",
          "HTML",
          "CSS",
          "JavaScript",
          "Pillow",
          "QR Codes",
          "jinja2",
          "pdfkit",
          "Postman",
        ],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/CertificateGenerator",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Sudoku Solver",
        img: SudokuSolver,
        desc: "Backtracking-based Sudoku solver with interactive visual grid",
        stacks: ["ReactJS", "Tailwind", "JavaScript", "Backtracking"],
        links: [
          { name: "Code", link: "https://github.com/SudevOP1/SudokuSolver" },
          { name: "Live", link: "https://sudevop1.github.io/SudokuSolver/" },
        ],
      },
      {
        name: "N Queens Visualizer",
        img: NQueensVisualizer,
        desc: "Optimized visualization of all N-Queens solutions with interactive filters and statistics",
        stacks: ["ReactJS", "TailwindCSS", "JavaScript", "Backtracking"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/NQueensVisualizer",
          },
          {
            name: "Live",
            link: "https://sudevop1.github.io/NQueensVisualizer/",
          },
        ],
      },
      {
        name: "Image to Ascii Art",
        img: ImageToAscii,
        desc: "Transform images into stunningly detailed ASCII art using a full-stack web interface",
        stacks: [
          "ReactJS",
          "Django",
          "TailwindCSS",
          "REST APIs",
          "Python",
          "Pillow",
        ],
        links: [
          { name: "Code", link: "https://github.com/SudevOP1/ImageToAsciiArt" },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "AI Workout Planner",
        img: AiFitnessPlanner,
        desc: "Generate personalized fitness routines using an intelligent AI-powered workout planner",
        stacks: [
          "ReactJS",
          "Django",
          "Django REST Framework (DRF)",
          "Google Gemini API",
          "SQLite3",
          "JSON Web Tokens (JWT)",
          "REST APIs",
          "Postman",
        ],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Unicode-Tasks/tree/main/Task%203",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Typing Game",
        img: TypingGame,
        desc: "A casual typing practice game built with JavaScript Canvas",
        stacks: ["HTML", "JavaScript", "Canvas", "JSON"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/TypingGame",
          },
          { name: "Live", link: "https://sudevop1.github.io/TypingGame/" },
        ],
      },
    ],
    Client: [
      {
        name: "DiamondRock",
        img: QY,
        desc: "Full-stack development with Django APIs and React frontend integration",
        stacks: [
          "ReactJS",
          "Django",
          "Django REST Framework (DRF)",
          "TailwindCSS",
          "JavaScript",
          "Git",
          "Postman",
        ],
        links: [
          { name: "Code", link: "" },
          { name: "Live", link: "https://diamondrock.in" },
        ],
      },
    ],
  };

  let fillColors = (somethings) => {
    return somethings.map((s) => ({
      ...s,
      stacks: s.stacks.map((stack) => {
        let color = "";
        for (let skillset of skills) {
          if (skillset.list.includes(stack)) {
            color = skillset.color;
            break;
          }
        }
        color = color.length > 0 ? color : tagColors["fuchsia"];
        return { stack, color };
      }),
    }));
  };
  experiences = fillColors(experiences);
  projects.Personal = fillColors(projects.Personal);
  projects.Client = fillColors(projects.Client);

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
        {skills.map((skillType, i) => (
          <div className="mt-3" key={i}>
            <h1 className="text-lg text-slate-300 font-semibold">
              {skillType.name}
            </h1>
            <div className="flex flex-wrap gap-2 mt-1">
              {skillType.list.map((skill, j) => (
                <span
                  key={j}
                  className={`px-4 py-1 rounded-full ${skillType.color} `}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Header>

      {/* experience */}
      <Header heading="Experience">
        {experiences.map((e, i) => (
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
                  {e.name}
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
          {projects[activeProject].map((project, i) => (
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
                  {project.name}
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
