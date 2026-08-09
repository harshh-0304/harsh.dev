import { animate, createTimeline, stagger } from "animejs";

/**
 * Hero text animation removed as requested (renders statically without animation delay)
 */
export function initHeroAnimation() {
  // No font animation on hero section
}

/**
 * Sets up IntersectionObserver for refined scroll reveals across sections
 */
export function initScrollReveals() {
  const elements = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay || "0", 10);
          const revealType = el.dataset.reveal || "fade-up";

          setTimeout(() => {
            el.classList.add("is-visible");
            if (revealType === "line") {
              el.classList.add("line-expanded");
            }
          }, delay);

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Word-by-word scroll reveal for editorial statements
 */
export function initWordReveal() {
  const statementWords = document.querySelectorAll(".reveal-word");
  if (!statementWords.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statementWords.forEach((word, idx) => {
            setTimeout(() => {
              word.classList.add("is-revealed");
            }, idx * 60);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  const container = document.querySelector("#intro-statement");
  if (container) observer.observe(container);
}
