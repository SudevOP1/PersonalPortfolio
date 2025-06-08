const Header = ({ heading, children, className = "" }) => {
  return (
    <div className="text-xs sm:text-sm overflow-x-hidden">
      <div className="flex items-center gap-5">
        <h1 className="text-2xl sm:text-3xl text-slate-100 font-semibold">
          {heading}
        </h1>
        <div className="flex-1 w-full h-1 bg-linear-to-r from-slate-300/80 to-transparent rounded-full"></div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default Header
