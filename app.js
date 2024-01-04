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
    "#banner",
    { duration: 1, opacity: "1", ease: "expo.out", y: "0%" },
    "-=0.75"
  )
  .to(".navbutton", { opacity: 1, y: 0 }, "<");

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

gsap.to(".element", {
  x: "0%",
  opacity: 1,
  scrollTrigger: {
    start: "top 40%",
    end: "top 20%",
    markers: true,
    trigger: ".element",
    //scrub: true,
    toggleAction: "restart none none none",
  },
});
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
