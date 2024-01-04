let tl = gsap.timeline();
gsap.defaults({ ease: "power4.out" });
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
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
    ".banner",
    { duration: 1, opacity: "1", ease: "expo.out", y: "0%" },
    "-=0.5"
  )
  .to(".navbutton", { opacity: 1, y: 0 }, "-=0.5");
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
  gsap.to(".bar1", {
    duration: 0.1,
    ease: "power4.out",
    y: 13,
    rotation: -45,
    backgroundColor: "#d19f72",
  });
  gsap.to(".bar2", {
    duration: 0.1,
    opacity: 0,
  });
  gsap.to(".bar3", {
    duration: 0.1,
    ease: "power4.out",
    y: -13,
    rotation: 45,
    backgroundColor: "#d19f72",
  });
}
function navClose() {
  gsap.to(".sidepanel", { duration: 1.5, ease: "power4.out", x: "-100%" });
  gsap.to(".bar1", {
    duration: 0.1,
    ease: "power4.out",
    y: 0,
    rotation: 0,
    backgroundColor: "#333",
  });
  gsap.to(".bar2", {
    duration: 0.1,
    opacity: 1,
  });
  gsap.to(".bar3", {
    duration: 0.1,
    ease: "power4.out",
    y: 0,
    rotation: 0,
    backgroundColor: "#333",
  });
}
