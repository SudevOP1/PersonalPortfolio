import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

import Sudev from "../assets/Sudev.png";
import { useData } from "../DataContext";

const MainLayout = ({ children, classname }) => {
  let showBorder = false;
  const [scrollProgress, setScrollProgress] = useState(0);

  let data = useData();
  let contacts = data.contacts;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-950 via-black to-slate-950 min-h-screen font-[Rubik]">
      <div className="flex flex-col lg:flex-row text-white items-around">
        {/* left side */}
        <div
          className={`lg:flex-3 flex flex-col p-10 md:p-30 md:py-15 lg:pr-10 lg:sticky lg:h-0 lg:top-0 ${
            showBorder ? "border border-red-500/40" : ""
          }`}
        >
          <>
            <img
              src={Sudev}
              className="rounded-full w-25 sm:w-30 md:w-35 lg:35"
            />
            <h1 className="text-2xl sm:text-4xl text-slate-100 font-bold mt-3 capitalize">
              Sudev Dahitule
            </h1>
            <h1 className="text-2xl text-slate-500 font-semibold uppercase">
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
        {/* Right Side */}
        <div
          className={`lg:flex-5 flex flex-col p-10 pt-0 md:p-30 md:pt-0
            lg:p-35 lg:pt-20 lg:pl-0 overflow-x-hidden  ${classname} ${
            showBorder ? "border border-red-500/40" : ""
          }`}
        >
          {children}
        </div>
      </div>

      {/* vertical scroll progress bar */}
      <div className="fixed inset-y-0 right-0 w-1 z-50 pointer-events-none">
        <div
          className="bg-sky-800 w-full transition-all duration-300 ease-linear rounded-b"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* remove default scrollbar */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          body {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default MainLayout;
