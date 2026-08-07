import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../components/Layout.jsx";
import Marquee from "../components/Marquee.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Work from "../sections/Work.jsx";
import Experience from "../sections/Experience.jsx";
import Skills from "../sections/Skills.jsx";
import Contact from "../sections/Contact.jsx";
import { useData } from "../ContextData.jsx";
import { scrollToId } from "../lib/smoothScroll.js";

const Home = ({ ready = true }) => {
  const { profile } = useData();
  const location = useLocation();

  // returning from /projects with a section in mind
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    const t = setTimeout(() => scrollToId(id), 500);
    return () => clearTimeout(t);
  }, [location.state]);

  return (
    <Layout>
      <Hero ready={ready} />

      <div className="border-line bg-ink/60 border-y backdrop-blur-sm">
        <Marquee
          items={profile.marquee}
          duration={30}
          className="label py-4 text-[0.65rem] text-bone/70"
          separator="◆"
        />
      </div>

      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Home;
