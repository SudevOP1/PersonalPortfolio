import Clock from "./Clock.jsx";
import { useData } from "../ContextData.jsx";
import { scrollToId } from "../lib/smoothScroll.js";

const Footer = () => {
  const { profile } = useData();

  return (
    <footer className="relative overflow-hidden pb-6">
      <div className="px-4 pt-10 md:px-6">
        <h2
          aria-label={profile.name}
          className="display flex w-full translate-y-14 justify-between leading-[0.78]
            whitespace-nowrap select-none [font-size:11.5vw]
            [-webkit-text-stroke:0.002em_var(--color-acid)]
            [-webkit-text-fill-color:transparent]"
        >
          {profile.name.split("").map((char, i) =>
            char === " " ? (
              <span key={i} aria-hidden className="w-[0.2em]" />
            ) : (
              <span
                key={i}
                aria-hidden
                className="[transition:-webkit-text-fill-color_1.8s_var(--ease-out-expo)]
                  hover:[-webkit-text-fill-color:color-mix(in_oklab,var(--color-acid)_100%,transparent)]
                  hover:[transition:-webkit-text-fill-color_0s_linear]"
              >
                {char}
              </span>
            ),
          )}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
