import { useEffect, useRef } from "react";

/**
 * Background: a grid of dots that swell and turn acid near the cursor, with a
 * slow parallax drift tied to scroll. Plain canvas 2D so it stays cheap.
 */
const DotField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });

    const GAP = 34;
    const RADIUS = 190; // cursor influence radius
    const BASE = 0.9;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = null;

    const pointer = { x: -9999, y: -9999 };
    const eased = { x: -9999, y: -9999 };
    let scrollOffset = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      eased.x += (pointer.x - eased.x) * 0.12;
      eased.y += (pointer.y - eased.y) * 0.12;

      const drift = reduce ? 0 : (window.scrollY * 0.06) % GAP;
      scrollOffset = drift;

      ctx.clearRect(0, 0, w, h);

      for (let x = -GAP; x < w + GAP; x += GAP) {
        for (let y = -GAP; y < h + GAP; y += GAP) {
          const py = y - scrollOffset;
          const dx = x - eased.x;
          const dy = py - eased.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > RADIUS) {
            ctx.fillStyle = "rgba(255,255,255,0.055)";
            ctx.fillRect(x, py, BASE, BASE);
            continue;
          }

          const t = 1 - dist / RADIUS; // 0..1, 1 at the cursor
          const size = BASE + t * t * 4.2;
          const push = t * 10;
          const nx = x - (dx / (dist || 1)) * push;
          const ny = py - (dy / (dist || 1)) * push;

          ctx.fillStyle = `rgba(217,255,0,${0.08 + t * 0.7})`;
          ctx.fillRect(nx - size / 2, ny - size / 2, size, size);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden />;
};

export default DotField;
