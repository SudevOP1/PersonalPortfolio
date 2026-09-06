/**
 * One shared cursor tracker.
 *
 * `mousemove` alone isn't enough: the page scrolls through `window.scrollTo`
 * (see `smoothScroll.js`), so the pointer never moves while the content under
 * it does — every hover state driven by JS would stay frozen on the element it
 * was last over. Subscribers are therefore also notified on scroll, with the
 * last known viewport coordinates, so they can re-test what is underneath.
 */

let x = -1;
let y = -1;
let inside = false;

const subs = new Set();
let queued = false;
let bound = false;

const emit = () => {
  for (const fn of subs) fn(x, y, inside);
};

const onMove = (e) => {
  x = e.clientX;
  y = e.clientY;
  inside = true;
  emit();
};

// Only a move off the document counts as leaving; moves into a child element
// report a relatedTarget and must be ignored.
const onOut = (e) => {
  if (e.relatedTarget) return;
  inside = false;
  emit();
};

// Coalesce to one notification per frame — scroll can fire far more often.
const onScroll = () => {
  if (!inside || queued) return;
  queued = true;
  requestAnimationFrame(() => {
    queued = false;
    if (inside) emit();
  });
};

const bind = () => {
  if (bound) return;
  bound = true;
  window.addEventListener("mousemove", onMove);
  document.addEventListener("mouseout", onOut);
  // Capture, so scrolling inside a nested container counts too.
  window.addEventListener("scroll", onScroll, { passive: true, capture: true });
};

const unbind = () => {
  if (!bound) return;
  bound = false;
  window.removeEventListener("mousemove", onMove);
  document.removeEventListener("mouseout", onOut);
  window.removeEventListener("scroll", onScroll, { capture: true });
};

/** Current viewport coordinates of the cursor. */
export const getPointer = () => ({ x, y, inside });

/**
 * Call `fn(x, y, inside)` whenever the cursor moves *or* the page scrolls
 * underneath it. Returns an unsubscribe function.
 */
export function subscribePointer(fn) {
  subs.add(fn);
  bind();
  return () => {
    subs.delete(fn);
    if (subs.size === 0) unbind();
  };
}
