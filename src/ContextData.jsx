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
import MonsterShooter from "../src/assets/projects/Games/MonsterShooter.png";
import SpaceShooter from "../src/assets/projects/Games/SpaceShooter.png";
import PongGame from "../src/assets/projects/Games/PongGame.png";
import SnakeGame from "../src/assets/projects/Games/SnakeGame.png";
import RunnerGame from "../src/assets/projects/Games/RunnerGame.png";
import SlidePuzzle from "../src/assets/projects/Games/SlidePuzzle.png";

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
      list: [
        {"name": "Python", "desc": "High-level programming language used for web, automation, and data tasks.", "link": "https://www.python.org/"},
        {"name": "Java", "desc": "Object-oriented language widely used for building enterprise applications.", "link": "https://www.oracle.com/java/"},
        {"name": "C", "desc": "Low-level programming language ideal for systems and embedded development.", "link": "https://en.cppreference.com/w/c"},
        {"name": "HTML", "desc": "Standard markup language for creating web pages.", "link": "https://developer.mozilla.org/en-US/docs/Web/HTML"},
        {"name": "CSS", "desc": "Stylesheet language for designing and customizing web page layouts.", "link": "https://developer.mozilla.org/en-US/docs/Web/CSS"},
        {"name": "JavaScript", "desc": "Scripting language for interactive and dynamic web applications.", "link": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
        {"name": "SQL", "desc": "Language used to manage and query relational databases.", "link": "https://www.w3schools.com/sql/"},
      ],
      color: tagColors["amber"],
    },
    Frameworks: {
      list: [
        {"name": "ReactJS", "desc": "JavaScript library for building interactive user interfaces.", "link": "https://reactjs.org/"},
        {"name": "Django", "desc": "High-level Python framework for building secure web applications.", "link": "https://www.djangoproject.com/"},
        {"name": "Django REST Framework (DRF)", "desc": "Toolkit to build Web APIs using Django.", "link": "https://www.django-rest-framework.org/"},
        {"name": "TailwindCSS", "desc": "Utility-first CSS framework for fast UI development.", "link": "https://tailwindcss.com/"},
        {"name": "Bootstrap", "desc": "Popular CSS framework for responsive and mobile-first web design.", "link": "https://getbootstrap.com/"},
        {"name": "Pygame", "desc": "Python library for game development and multimedia applications.", "link": "https://www.pygame.org/"},
        {"name": "Pillow", "desc": "Python Imaging Library used for opening, editing, and saving images.", "link": "https://python-pillow.org/"},
        {"name": "p5.js", "desc": "JavaScript library for creative coding and visual sketches.", "link": "https://p5js.org/"},
        {"name": "Processing", "desc": "Flexible software sketchbook and language for visual arts projects.", "link": "https://processing.org/"},
        {"name": "jinja2", "desc": "Templating engine for Python used in web frameworks like Flask and Django.", "link": "https://jinja.palletsprojects.com/"},
        {"name": "pdfkit", "desc": "Library to convert HTML to PDF using wkhtmltopdf.", "link": "https://pypi.org/project/pdfkit/"},
        {"name": "pytmx", "desc": "Library to load Tiled TMX map files for 2D games.", "link": "https://pypi.org/project/pytmx/"},
      ],
      color: tagColors["lime"],
    },
    Technologies: {
      list: [
        {"name": "REST APIs", "desc": "Architectural style for building scalable web services.", "link": "https://restfulapi.net/"},
        {"name": "Google Gemini API", "desc": "API to access Google's multimodal AI capabilities.", "link": "https://ai.google.dev/"},
        {"name": "JSON Web Tokens (JWT)", "desc": "Standard for securely transmitting data between parties as a JSON object.", "link": "https://jwt.io/"},
        {"name": "Google Book API", "desc": "API for searching and retrieving book data from Google Books.", "link": "https://developers.google.com/books"},
        {"name": "ImgFlip API", "desc": "API to generate and manage memes using ImgFlip.", "link": "https://api.imgflip.com/"},
        {"name": "SQLite3", "desc": "Lightweight embedded database used in applications and development.", "link": "https://www.sqlite.org/index.html"},
      ],
      color: tagColors["cyan"],
    },
    "Developer Tools": {
      list: [
        {"name": "VSCode", "desc": "Popular code editor with support for extensions and debugging.", "link": "https://code.visualstudio.com/"},
        {"name": "Git", "desc": "Version control system for tracking changes in source code.", "link": "https://git-scm.com/"},
        {"name": "Figma", "desc": "Collaborative tool for UI/UX design and prototyping.", "link": "https://figma.com/"},
        {"name": "MySQL", "desc": "Open-source relational database management system.", "link": "https://www.mysql.com/"},
        {"name": "Postman", "desc": "API development and testing tool with a user-friendly interface.", "link": "https://www.postman.com/"},
        {"name": "AutoCAD", "desc": "Software for 2D and 3D computer-aided design (CAD).", "link": "https://www.autodesk.in/products/autocad/overview"},
        {"name": "Blender", "desc": "Open-source software for 3D modeling, animation, and rendering.", "link": "https://www.blender.org/"}
      ],
      color: tagColors["pink"],
    },
  };
  let experiences = {
    Unicode: {
      img: UnicodeLogo,
      role: "Fullstack Django Mentee",
      period: "Aug 24 - May 25",
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
          { name: "Live", link: "https://sudevop1.github.io/ImageToAsciiArt/" },
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
