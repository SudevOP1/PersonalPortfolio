import Clock from "./Clock.jsx";
import Marquee from "./Marquee.jsx";
import { useData } from "../ContextData.jsx";
import { scrollToId } from "../lib/smoothScroll.js";

const Footer = () => {
  const { profile } = useData();

  return (
    <footer className="relative overflow-hidden pb-6">
      <Marquee
        items={[profile.name, "Available for work", profile.location, "Let's talk"]}
        duration={40}
        separator="●"
        skew={false}
        className="display text-bone/10 py-6 text-[clamp(3rem,12vw,11rem)] select-none"
      />

      <div className="border-line mt-2 border-t px-6 pt-6 md:px-10">
        <div className="label flex flex-col gap-3 text-[0.6rem] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {profile.since} {profile.name}
          </span>
          <span className="hidden md:inline">Built with React · Tailwind · Framer Motion</span>
          <span className="flex items-center gap-5">
            <Clock />
            <button
              onClick={() => scrollToId("top")}
              className="hover:text-acid link-underline transition-colors"
              data-cursor="link"
            >
              Back to top ↑
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
