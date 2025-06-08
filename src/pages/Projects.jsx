import CertificateGenerator from "../assets/projects/CertificateGenerator.png";
import SudokuSolver from "../assets/projects/SudokuSolver.png";
import NQueensVisualizer from "../assets/projects/NQueensVisualizer.png";
import ImageToAscii from "../assets/projects/ImageToAscii.png";
import AiFitnessPlanner from "../assets/projects/AiFitnessPlanner.png";
import MemeGenerator from "../assets/projects/MemeGenerator.png";
import GeminiClone from "../assets/projects/GeminiClone.png";
import TypingGame from "../assets/projects/TypingGame.png";
import QY from "../assets/projects/QY.png";
import InProgress from "../assets/projects/InProgress.png";
import MonsterShooter from "../assets/projects/games/MonsterShooter.png";
import SpaceShooter from "../assets/projects/games/SpaceShooter.png";
import PongGame from "../assets/projects/games/PongGame.png";
import SnakeGame from "../assets/projects/games/SnakeGame.png";
import RunnerGame from "../assets/projects/games/RunnerGame.png";
import SlidePuzzle from "../assets/projects/games/SlidePuzzle.png";
import MainLayout from "../components/MainLayout.jsx";

import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  let [activeProject, setActiveProject] = useState("Personal");

  let tagColors = {
    amber: "bg-amber-600/10 text-amber-600 border border-amber-400/80",
    lime: "bg-lime-600/10 text-lime-600 border border-lime-400/80",
    cyan: "bg-cyan-600/10 text-cyan-600 border border-cyan-400/80",
    pink: "bg-pink-600/10 text-pink-600 border border-pink-400/80",
    red: "bg-red-600/10 text-red-600 border border-red-400/80",
    fuchsia: "bg-fuchsia-600/10 text-fuchsia-600 border border-fuchsia-400/80",
  };
  let projects = {
    Personal: [
      {
        name: "Certificate Generator",
        completed: true,
        img: CertificateGenerator,
        desc: "Generates personalized certificates and sends them via email with QR code verification",
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
        completed: true,
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
        completed: true,
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
        completed: true,
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
        completed: true,
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
        completed: true,
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
      {
        name: "Booknest (Work In Progress)",
        completed: false,
        img: null,
        desc: "A social platform to rent, buy, discuss, and track books with library integration and personalized reading analytics",
        stacks: [
          "ReactJS",
          "Django",
          "TailwindCSS",
          "PostgreSQL",
          "Django REST Framework (DRF)",
          "JSON Web Tokens (JWT)",
          "REST APIs",
          "Pillow",
          "Git",
          "Figma",
          "Postman",
          "Google Book API",
        ],
        links: [
          {
            name: "Code",
            link: "",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Meme Generator",
        completed: true,
        img: MemeGenerator,
        desc: "Generate and customize memes in real-time using the Imgflip API",
        stacks: ["ReactJS", "TypeScript", "ImgFlip API", "Bootstrap"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Unicode-Tasks/tree/main/Frontend%20Task%202/meme-generator",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Gemini Clone",
        completed: true,
        img: GeminiClone,
        desc: "Gemini clone that answers queries using Google Gemini API",
        stacks: ["ReactJS", "JavaScript", "Google Gemini API"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/React_Gemini_Clone",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        //   name: "Netflix Clone",
        //   completed: true,
        //   img: ,
        //   desc: "Responsive Netflix clone",
        //   stacks: [
        //   ],
        //   links: [
        //     { name: "Code", link: "", },
        //     { name: "Live", link: "" },
        //   ],
        // }, {
        name: "Monster Shooter",
        completed: true,
        img: MonsterShooter,
        desc: "Shoot down monsters with your gun with added sound effects in 2D action",
        stacks: ["Python", "Pygame", "pytmx", "VSCode", "Git"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Pygame-Projects/tree/main/Monster%20Shooter",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Space Shooter",
        completed: true,
        img: SpaceShooter,
        desc: "Destroy asteroids and defend your spaceship",
        stacks: ["Python", "Pygame", "VSCode", "Git"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Pygame-Projects/tree/main/Space%20Shooter",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Pong Game",
        completed: true,
        img: PongGame,
        desc: "Classic 2D pong game with real-time score tracking and sound effects",
        stacks: ["Python", "Pygame", "VSCode", "Git"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Pygame-Projects/tree/main/Pong%20Game",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Snake Game",
        completed: true,
        img: SnakeGame,
        desc: "Classic Google-styled Snake game with smooth 2D graphics and sound",
        stacks: ["Python", "Pygame", "VSCode", "Git"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Pygame-Projects/tree/main/Snake%20Game",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Runner Game",
        completed: true,
        img: RunnerGame,
        desc: "Endless runner like Google Dino game with custom visuals and sounds",
        stacks: ["Python", "Pygame", "VSCode", "Git"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Pygame-Projects/tree/main/Runner%20Game",
          },
          { name: "Live", link: "" },
        ],
      },
      {
        name: "Slide Puzzle",
        completed: true,
        img: SlidePuzzle,
        desc: "Slide numbered tiles to solve the grid puzzle",
        stacks: ["Python", "Pygame", "VSCode", "Git"],
        links: [
          {
            name: "Code",
            link: "https://github.com/SudevOP1/Pygame-Projects/tree/main/Slide%20Puzzle",
          },
          { name: "Live", link: "" },
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
  projects.Personal = fillColors(projects.Personal);
  projects.Client = fillColors(projects.Client);

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
        {projects[activeProject].map((project, i) => (
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
                {project.name}
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
                  className={`px-3 rounded-full text-md ${stack.color} `}
                >
                  {stack.stack}
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
