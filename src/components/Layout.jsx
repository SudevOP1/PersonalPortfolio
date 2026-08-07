import { motion, useScroll, useSpring } from "framer-motion";

import DotField from "./DotField.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.3 });

  return (
    <div className="grain bg-ink relative min-h-screen">
      <DotField />

      <div className="relative z-10">
        {children}
        <Footer />
      </div>

      {/* edge scroll progress */}
      <motion.div
        className="bg-acid fixed top-0 right-0 z-50 w-[2px] origin-top"
        style={{ scaleY: progress, height: "100vh" }}
      />
    </div>
  );
};

export default Layout;
