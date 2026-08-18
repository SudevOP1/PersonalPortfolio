import { useEffect } from "react";

/**
 * Lenis-style smooth scroll without the dependency.
 *
 * Native scrolling stays intact (scrollbar, anchors, touch); we only intercept
 * the wheel and lerp `window.scrollTo` toward the target each frame. Because we
 * never transform a wrapper element, `position: fixed` layers keep working.
 */

const state = {
  target: 0,
  current: 0,
  running: false,
  raf: null,
  enabled: false,
};

const EASE = 0.11;

const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
const clamp = (v) => Math.min(Math.max(v, 0), maxScroll());

const tick = () => {
  state.current += (state.target - state.current) * EASE;

  if (Math.abs(state.target - state.current) < 0.35) {
    state.current = state.target;
    state.running = false;
    state.raf = null;
    window.scrollTo(0, state.current);
    return;
  }

  window.scrollTo(0, state.current);
  state.raf = requestAnimationFrame(tick);
};

const start = () => {
  if (state.running) return;
  state.running = true;
  state.raf = requestAnimationFrame(tick);
};

/** Scroll to an absolute Y position through the same easing. */
export function scrollToY(y) {
  if (!state.enabled) {
    window.scrollTo({ top: y, behavior: "smooth" });
    return;
  }
  state.current = window.scrollY;
  state.target = clamp(y);
  start();
}

/**
 * Jump to the top with no easing, killing any in-flight inertia first —
 * otherwise `tick` keeps lerping toward the old target and undoes the jump.
 */
export function resetScroll() {
  if (state.raf) cancelAnimationFrame(state.raf);
  state.raf = null;
  state.running = false;
  state.target = state.current = 0;
  window.scrollTo(0, 0);
}

/** Scroll to an element by id (or the top of the page for "#top"). */
export function scrollToId(id) {
  if (id === "top") return scrollToY(0);
  const el = document.getElementById(id);
  if (!el) return;
  scrollToY(el.getBoundingClientRect().top + window.scrollY);
}

export function useSmoothScroll() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    state.enabled = true;
    state.target = state.current = window.scrollY;

    const normalize = (e) => {
      if (e.deltaMode === 1) return e.deltaY * 16; // lines
      if (e.deltaMode === 2) return e.deltaY * window.innerHeight; // pages
      return e.deltaY;
    };

    const onWheel = (e) => {
      if (e.ctrlKey) return; // pinch-zoom
      e.preventDefault();
      state.target = clamp(state.target + normalize(e));
      start();
    };

    // keyboard / scrollbar / anchor scrolls: resync so the next wheel is smooth
    const onScroll = () => {
      if (!state.running) state.target = state.current = window.scrollY;
    };

    const onResize = () => {
      state.target = clamp(state.target);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (state.raf) cancelAnimationFrame(state.raf);
      state.running = false;
      state.enabled = false;
    };
  }, []);
}
