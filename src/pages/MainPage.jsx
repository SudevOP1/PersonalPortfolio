import { useMemo, useState } from "react";
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";

import Sudev from "../assets/Sudev.png";
import Resume from "../assets/Sudev_Dahitule_Resume.pdf";
import UnicodeLogo from "../assets/UnicodeLogo.png";
import QYLogo from "../assets/QYLogo.png";

const MainPage = () => {
  let showBorder = false;
  let [activeProject, setActiveProject] = useState("Personal");

  let tagColors = {
    amber: "bg-amber-600/10 text-amber-600 border border-amber-400/80",
    lime: "bg-lime-600/10 text-lime-600 border border-lime-400/80",
    cyan: "bg-cyan-600/10 text-cyan-600 border border-cyan-400/80",
    pink: "bg-pink-600/10 text-pink-600 border border-pink-400/80",
    red: "bg-red-600/10 text-red-600 border border-red-400/80",
    fuchsia: "bg-fuchsia-600/10 text-fuchsia-600 border border-fuchsia-400/80",
  };
  let contacts = useMemo(
    () => [
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
    ],
    []
  );
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
        ],
        color: tagColors["lime"],
      },
      {
        name: "Technologies",
        list: ["REST APIs", "Google Gemini API", "JSON Web Tokens (JWT)"],
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
          "Currently collaborating with peers on a community-driven book platform",
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
    "Personal": [
      {
        name: "Certificate Generator",
        desc: "Personalized certificate generator with email and QR verification",
        stacks: ["Python", "Django", "HTML", "CSS", "JavaScript", "Pillow", "QR Codes"],
      },
      { name: "Sudoku Solver" },
      { name: "Typing Game" },
      { name: "N Queens Visualizer" },
      { name: "Image to Ascii Art" },
      { name: "Booknest" },
      // { name: "Gemini Clone" },
      // { name: "Netflix Clone" },
      // { name: "AI Meme Generator" },
      // { name: "Monster Shooter" },
      // { name: "Pong Game" },
      // { name: "Snake Game" },
      // { name: "Space Shooter" },
      // { name: "Runner Game" },
      // { name: "Slide Puzzle" },
      // { name: "Space Shooter" },
    ],
    "Client": [
      { name: "DiamondRock" },
    ],
  };

  // adding color to exps:
  experiences = experiences.map((e) => ({
    ...e,
    stacks: e.stacks.map((stack) => {
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

  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black min-h-screen font-[Rubik]">
      {/* bg blur green circle */}
      <div
        className="rounded-full bg-[#0b4f4a30] w-[40vw] h-[40vw] fixed
          left-1/2 translate-[-50%] shadow-[0px_0px_100px_200px_#0b4f4a30]"
      ></div>
      <div className="flex flex-col lg:flex-row text-white items-around">
        {/* left side */}
        <div
          className={`lg:flex-3 flex flex-col p-10 md:p-30 md:py-15 lg:pr-10 lg:sticky lg:top-0 ${
            showBorder ? "border border-red-500/40" : ""
          }`}
        >
          <>
            <img
              src={Sudev}
              className="rounded-full w-25 sm:w-30 md:w-35 lg:35"
            />
            <h1 className="text-2xl sm:text-4xl text-slate-100 font-bold mt-3">
              Sudev Dahitule
            </h1>
            <h1 className="text-2xl text-slate-500 font-semibold">
              Full Stack Web Developer
            </h1>
            <h1 className="text-lg text-slate-300 mt-2 font-semibold flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Mumbai, India
            </h1>
            <p className="text-md text-slate-300 mt-5 font-medium">
              Coding enthusiast turning ideas into interactive experiences and
              tools
            </p>
            <div className="flex flex-row gap-4 mt-4">
              {contacts.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  target={btn.label === "Resume" ? "_self" : "_blank"}
                  rel={
                    btn.label === "Resume" ? undefined : "noopener noreferrer"
                  }
                  download={btn.label === "Resume"}
                  className="flex gap-1 items-center px-3 py-2 rounded-full cursor-pointer transition
                    text-slate-300 bg-slate-500/20 hover:bg-slate-500/40 active:bg-slate-500/90
                    border border-white/60 hover:border-white"
                >
                  {btn.icon}
                  {btn.label && <span className="pl-1 pr-2">{btn.label}</span>}
                </a>
              ))}
            </div>
          </>
        </div>

        {/* right side */}
        <div
          className={`lg:flex-5 flex flex-col p-10 pt-0 md:p-30 md:pt-0 lg:p-35 lg:pt-20 lg:pl-0 gap-15 overflow-x-hidden ${
            showBorder ? "border border-red-500/40" : ""
          }`}
        >
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
                className="mt-5 border-l-3 border-slate-400 pl-8 py-2"
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
                    <p
                      className="text-sm text-slate-300 font-normal mt-1"
                      key={j}
                    >
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
          <Header heading="Projects" className="border border-red-500">
            {projects[activeProject].map((projects, i)=>(
              <p key={i}>{projects.name}</p>
            ))}
          </Header>
        </div>
      </div>
    </div>
  );
};

const Header = ({ heading, children, className="" }) => {
  return (
    <div className={`text-xs sm:text-sm overflow-x-hidden ${className}`}>
      <div className="flex items-center gap-5">
        <h1 className="text-2xl sm:text-3xl text-slate-100 font-semibold">
          {heading}
        </h1>
        <div className="flex-1 w-full h-1 bg-linear-to-r from-slate-300/80 to-transparent rounded-full"></div>
      </div>
      {children}
    </div>
  );
};

export default MainPage;
