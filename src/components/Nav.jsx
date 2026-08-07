import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

import Clock from "./Clock.jsx";
import Magnetic from "./Magnetic.jsx";
import { scrollToId } from "../lib/smoothScroll.js";

const SECTIONS = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "stack", label: "Stack", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 220 && !menu);
  });

  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const go = (id) => {
    setMenu(false);
    if (onHome) {
      scrollToId(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <Magnetic strength={0.25}>
            <Link
              to="/"
              onClick={(e) => {
                if (onHome) {
                  e.preventDefault();
                  scrollToId("top");
                }
              }}
              className="group flex items-baseline gap-2"
              data-cursor="link"
            >
              <span className="display text-bone text-xl leading-none">SD</span>
              <span className="label hidden text-[0.6rem] sm:inline">Sudev Dahitule</span>
            </Link>
          </Magnetic>

          <nav className="hidden items-center gap-8 md:flex">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className="group text-bone/80 hover:text-bone font-mono text-[0.7rem] tracking-[0.18em] uppercase transition-colors"
                data-cursor="link"
              >
                <span className="text-acid/70 mr-1 text-[0.6rem]">{s.index}</span>
                <span className="link-underline">{s.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <span className="label hidden text-[0.6rem] lg:inline">
              <Clock />
            </span>
            <button
              onClick={() => setMenu((m) => !m)}
              className="flex h-8 w-8 flex-col items-end justify-center gap-[5px] md:hidden"
              aria-label="Menu"
              data-cursor="link"
            >
              <motion.span className="bg-bone block h-px w-6" animate={{ rotate: menu ? 45 : 0, y: menu ? 3 : 0 }} />
              <motion.span
                className="bg-bone block h-px w-4"
                animate={{ rotate: menu ? -45 : 0, y: menu ? -3 : 0, width: menu ? 24 : 16 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="bg-ink fixed inset-0 z-40 flex flex-col justify-center px-6 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {SECTIONS.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => go(s.id)}
                className="border-line flex items-baseline gap-4 border-b py-4 text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="label text-acid">{s.index}</span>
                <span className="display text-bone text-5xl">{s.label}</span>
              </motion.button>
            ))}
            <motion.div
              className="label mt-10 flex justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>Mumbai, India</span>
              <Clock />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
