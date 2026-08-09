import { animate, createTimeline, stagger } from "animejs";

/**
 * Initializes entrance animations for Hero text & elements using anime.js v4
 */
export function initHeroAnimation() {
  const heroHeading = document.querySelector("#hero-heading");
  if (!heroHeading) return;

  // Hero entrance timeline
  const tl = createTimeline({
    defaults: {
      ease: "outCubic",
    },
  });

  tl.add("#hero-title-char", {
    translateY: ["100%", "0%"],
    opacity: [0, 1],
    delay: stagger(40),
    duration: 800,
  })
    .add(
      "#hero-subheading",
      {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 700,
      },
      "-=400"
    )
    .add(
      "#hero-meta > *",
      {
        translateY: [15, 0],
        opacity: [0, 1],
        delay: stagger(100),
        duration: 600,
      },
      "-=300"
    );
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
