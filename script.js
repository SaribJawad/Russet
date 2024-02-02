function locoXscrolltrig() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoXscrolltrig();

let imageShower = document.getElementById("intro");
setInterval(() => {
  imageShower.src = `0${randomNumber(1, 6)}.jpg`;
}, 300);
// random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let intro = gsap.timeline();
intro
  .to("#introBlock1", {
    y: "-100%",
    delay: 1,
    ease: Power4.easeInOut,
    duration: 2,
  })
  .to("#introBlock2", {
    y: 0,
    delay: 1,
    ease: Power4.easeInOut,
    duration: 2,
  })
  .to(".intro", {
    duration: 0.5,
    opacity: 0,
  })
  .to(".intro", {
    zIndex: -20,
  })
  .from(
    ".container",
    {
      opacity: 0,
      duration: 0.5,
    },
    "<"
  )
  .from(
    ".text p",
    {
      y: 30,
      stagger: {
        amount: 0.2,
      },
      opacity: 0,
    },
    "<"
  )
  .to(
    ".img-marquee-block",
    {
      y: "-100%",
      ease: Power4.easeInOut,
      duration: 1.5,
    },
    "-=70%"
  );
