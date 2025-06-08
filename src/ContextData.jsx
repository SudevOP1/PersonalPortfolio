import { createContext, useContext } from "react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

import UnicodeLogo from "../src/assets/UnicodeLogo.png";
import QYLogo from "../src/assets/QYLogo.png";
import Resume from "../src/assets/Sudev_Dahitule_Resume.pdf";

import CertificateGenerator from "../src/assets/projects/CertificateGenerator.png";
import TypingGame from "../src/assets/projects/TypingGame.png";
import SudokuSolver from "../src/assets/projects/SudokuSolver.png";
import NQueensVisualizer from "../src/assets/projects/NQueensVisualizer.png";
import ImageToAscii from "../src/assets/projects/ImageToAscii.png";
import AiFitnessPlanner from "../src/assets/projects/AiFitnessPlanner.png";
import QY from "../src/assets/projects/QY.png";
import GeminiClone from "../src/assets/projects/GeminiClone.png";
import MemeGenerator from "../src/assets/projects/MemeGenerator.png";
import MonsterShooter from "../src/assets/projects/games/MonsterShooter.png";
import SpaceShooter from "../src/assets/projects/games/SpaceShooter.png";
import PongGame from "../src/assets/projects/games/PongGame.png";
import SnakeGame from "../src/assets/projects/games/SnakeGame.png";
import RunnerGame from "../src/assets/projects/games/RunnerGame.png";
import SlidePuzzle from "../src/assets/projects/games/SlidePuzzle.png";

let dataContext = createContext();
export function useData() {
  return useContext(dataContext);
}

const DataProvider = ({ children }) => {
  let aboutMeText = [
    "Hi! I'm Sudev, a full-stack developer who loves building creative and functional web applications.",
    "From crafting sleek UIs with React and Tailwind to designing robust APIs with Django and DRF, I enjoy bringing ideas to life through code.",
    "I enjoy taking on challenges that blend logic, design, and real-world impact and strongly believe in clean code, attention to detail, and user-first thinking.",
  ];
  let contacts = [
    {
      icon: <FileText className="w-5 h-5 ml-1" />,
      label: "Resume",
      href: Resume,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: null,
      href: "https://linkedin.com/in/Sudev-Dahitule",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: null,
      href: "https://github.com/SudevOP1",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: null,
      href: "mailto:sudevdahitule06@gmail.com",
    },
  ];
  let tagColors = {
    amber: "bg-amber-600/10 text-amber-600 border border-amber-400/80",
    lime: "bg-lime-600/10 text-lime-600 border border-lime-400/80",
    cyan: "bg-cyan-600/10 text-cyan-600 border border-cyan-400/80",
    pink: "bg-pink-600/10 text-pink-600 border border-pink-400/80",
    red: "bg-red-600/10 text-red-600 border border-red-400/80",
    fuchsia: "bg-fuchsia-600/10 text-fuchsia-600 border border-fuchsia-400/80",
  };
  let skills = {
    Languages: {
      list: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "SQL"],
      color: tagColors["amber"],
    },
    Frameworks: {
      list: [
        "ReactJS",
        "Django",
        "Django REST Framework (DRF)",
        "TailwindCSS",
        "Bootstrap",
        "Pygame",
        "Pillow",
        "p5.js",
        "Processing",
        "jinja2",
        "pdfkit",
        "pytmx",
      ],
      color: tagColors["lime"],
    },
    Technologies: {
      list: [
        "REST APIs",
        "Google Gemini API",
        "JSON Web Tokens (JWT)",
        "Google Book API",
        "ImgFlip API",
        "SQLite3",
      ],
      color: tagColors["cyan"],
    },
    "Developer Tools": {
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
  };
  let experiences = {
    Unicode: {
      img: UnicodeLogo,
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
    "Quickyearning Pvt. Ltd.": {
      img: QYLogo,
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
  };
  let projects = {
    Personal: {
      "Certificate Generator": {
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
      "Sudoku Solver": {
        completed: true,
        img: SudokuSolver,
        desc: "Backtracking-based Sudoku solver with interactive visual grid",
        stacks: ["ReactJS", "TailwindCSS", "JavaScript", "Backtracking"],
        links: [
          { name: "Code", link: "https://github.com/SudevOP1/SudokuSolver" },
          { name: "Live", link: "https://sudevop1.github.io/SudokuSolver/" },
        ],
      },
      "N Queens Visualizer": {
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
      "Image to Ascii Art": {
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
          "SQLite3",
        ],
        links: [
          { name: "Code", link: "https://github.com/SudevOP1/ImageToAsciiArt" },
          { name: "Live", link: "" },
        ],
      },
      "AI Workout Planner": {
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
      "Typing Game": {
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
      "Booknest (Work In Progress)": {
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
      "Meme Generator": {
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
      "Gemini Clone": {
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
      "Monster Shooter": {
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
      "Space Shooter": {
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
      "Pong Game": {
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
      "Snake Game": {
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
      "Runner Game": {
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
      "Slide Puzzle": {
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
    },
    Client: {
      DiamondRock: {
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
    },
  };
  let getSkillColor = (skill) => {
    for (let category in skills) {
      if (skills[category].list.includes(skill)) {
        return skills[category].color;
      }
    }
    return tagColors["fuchsia"]; // default color
  };

  return (
    <dataContext.Provider
      value={{
        aboutMeText: aboutMeText,
        contacts: contacts,
        skills: skills,
        experiences: experiences,
        projects: projects,
        getSkillColor: getSkillColor,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
