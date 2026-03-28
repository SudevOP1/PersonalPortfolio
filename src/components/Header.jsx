import { motion } from "framer-motion";

const Header = ({ heading, children, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-xs sm:text-sm overflow-x-hidden"
    >
      <div className="flex items-center gap-5">
        <h1 className="text-2xl sm:text-3xl text-slate-100 font-semibold">
          {heading}
        </h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="flex-1 w-full h-1 bg-linear-to-r from-sky-400/80 to-transparent rounded-full origin-left"
        ></motion.div>
      </div>
      <div className={className}>{children}</div>
    </motion.div>
  );
};

export default Header;
