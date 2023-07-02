import { gsap } from "gsap";
import "./sass/main.scss";

// GSAP Animations

let tl = gsap.timeline();

// Loading
tl.from(".load", {
  duration: 0.7,
  delay: 0.2,
  scaleX: 0,
  transformOrigin: "left",
  autoAlpha: 0,
  ease: "expo.out",
})
  .to(".load", {
    duration: 0.5,
    delay: 0.2,
    scaleX: 0,
    transformOrigin: "right",
    autoAlpha: 0,
    ease: "expo.In",
  })

  //   Phone

  .from(".phone", {
    duration: 1.7,
    delay: -1.2,
    height: 0,
    autoAlpha: 0,
    ease: "power3.inOut",
  })

  // Text Container

  .from([".main__title", ".main__text", "footer p"], {
    duration: 1.7,
    delay: -1.2,
    y: "+100",
    autoAlpha: 0,
    stagger: 0.25,
    ease: "power3.inOut",
  })

  //   Line

  .from(".line", {
    duration: 2.8,
    delay: -0.6,
    autoAlpha: 0,
    height: 0,
    opacity: 0,
    ease: "expo.out",
  })

  .from(".line-2", {
    duration: 3,
    delay: -2.6,
    height: 0,
    opacity: 0,
    autoAlpha: 0,
    ease: "expo.out",
  });
