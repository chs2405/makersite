const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ duration: 1, ease: "power4.out" });

window.onbeforeunload = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

tl.to("#banner", {
  duration: 1,
  opacity: "1",
  ease: "expo.out",
  y: "0%",
})
  .to(
    ".bar",
    {
      duration: 0.75,
      opacity: 1,
      y: 0,
      stagger: 0.1,
    },
    "<"
  )
  .to(
    "#banner",
    {
      duration: 1,
      opacity: 0,
      y: "-100%",
      display: "none",
    },
    "+=0.5"
  );

let clickCount = 0;
function navClick() {
  clickCount++;

  if (clickCount % 2 === 1) {
    navOpen();
  } else {
    navClose();
  }
}
function navOpen() {
  gsap.to(".sidepanel", { duration: 1.5, ease: "power4.out", x: "0" });
  gsap.to("#bar1", {
    duration: 0.1,
    ease: "power4.out",
    y: 13,
    rotation: -45,
    backgroundColor: "#d19f72",
  });
  gsap.to("#bar2", {
    duration: 0.1,
    opacity: 0,
  });
  gsap.to("#bar3", {
    duration: 0.1,
    ease: "power4.out",
    y: -13,
    rotation: 45,
    backgroundColor: "#d19f72",
  });
}
function navClose() {
  gsap.to(".sidepanel", { duration: 1.5, ease: "power4.out", x: "-100%" });
  gsap.to("#bar1", {
    duration: 0.1,
    ease: "power4.out",
    y: 0,
    rotation: 0,
    backgroundColor: "#333",
  });
  gsap.to("#bar2", {
    duration: 0.1,
    opacity: 1,
  });
  gsap.to("#bar3", {
    duration: 0.1,
    ease: "power4.out",
    y: 0,
    rotation: 0,
    backgroundColor: "#333",
  });
}
