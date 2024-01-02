let tl = gsap.timeline();

tl.to(
  ".flying-text",
  {
    duration: 1,
    ease: "power4.out",
    y: "15%",
    stagger: 0.25,
  },
  0.5
)
  .to(
    ".flying-page",
    {
      duration: 2,
      ease: "power4.out",
      y: "-100%",
    },
    "+=0.5"
  )
  .to(
    ".flying-box",
    {
      duration: 1.75,
      ease: "power4.out",
      y: "-100%",
    },
    "<"
  )
  .to(
    ".logo",
    { duration: 1, opacity: "1", ease: "expo.out", y: "0%" },
    "-=0.5"
  );
