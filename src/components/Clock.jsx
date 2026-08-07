import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Live Mumbai time — the small detail that makes a portfolio feel alive. */
const Clock = ({ className = "" }) => {
  const [now, setNow] = useState(() => fmt.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setNow(fmt.format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return <span className={`tabular-nums ${className}`}>{now} IST</span>;
};

export default Clock;
