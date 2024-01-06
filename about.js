const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  /*   autoplay: {
    delay: 2000,
  }, */
});

let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ duration: 1, ease: "power4.out" });

window.onbeforeunload = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

tl.to(
  ".flying-text",
  {
    duration: 1,
    ease: "power4.out",
    y: "15%",
    stagger: 0.5,
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
  .to(
    ".bar",
    {
      duration: 0.75,
      opacity: 1,
      y: 0,
      stagger: 0.1,
    },
    "<"
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

gsap.to(".element", {
  x: "0%",
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    start: "top 40%",
    end: "top 10%",
    trigger: "#page2",
    toggleActions: "restart reverse restart reverse",
  },
});
gsap.to(".swipe-hint", {
  scrollTrigger: {
    trigger: ".swiper",
    start: "20% bottom",
    end: "80% center",
    toggleActions: "restart restart restart none",
  },
  opacity: 0,
  repeat: 2,
  yoyo: true,
  ease: "none",
  duration: 1,
});
gsap.to(".swiper", {
  scrollTrigger: {
    trigger: "#swiper-container",
    start: "top bottom",
    end: "top 20%",
    scrub: true,
  },
  scaleX: 1,
  opacity: 1,
  ease: "none",
  duration: 1,
});
let viewButtonAnimation = gsap.to(".view-button-container", {
  paused: true,
  duration: 0.25,
  ease: "power1.inOut",
  scale: 1.1,
});
let viewButton = document.querySelector(".view-button-container");

viewButton.addEventListener("mouseenter", () => viewButtonAnimation.play());
viewButton.addEventListener("mouseleave", () => viewButtonAnimation.reverse());
