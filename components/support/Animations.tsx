import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Animations() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      gsap.fromTo(
        [".service-card"],
        { opacity: 0, y: "-50" },
        {
          opacity: 1,
          y: "0",
          duration: 0.3,
          scrollTrigger: {
            trigger: [".service-card"],
          },
          stagger: 0.3,
        }
      );
      gsap.fromTo(
        [".plan-card"],
        { opacity: 0, y: "-50" },
        {
          opacity: 1,
          y: "0",
          duration: 0.3,
          scrollTrigger: {
            trigger: [".plan-card"],
          },
          stagger: 0.3,
        }
      );
      gsap.fromTo(
        [".about-card"],
        { opacity: 0, x: "-50" },
        {
          opacity: 1,
          x: "0",
          duration: 0.3,
          scrollTrigger: {
            trigger: [".about-card"],
          },
          stagger: 0.3,
        }
      );
      gsap.fromTo(
        [".feature-card"],
        { opacity: 0, x: "-50" },
        {
          opacity: 1,
          x: "0",
          duration: 0.3,
          scrollTrigger: {
            trigger: [".feature-card"],
          },
          stagger: 0.3,
        }
      );
      gsap.fromTo(
        [".testimonial-card"],
        { opacity: 0, y: "-50" },
        {
          opacity: 1,
          y: "0",
          duration: 0.3,
          scrollTrigger: {
            trigger: [".testimonial-card"],
          },
          stagger: 0.3,
        }
      );
      gsap.fromTo(
        [".work-card"],
        { opacity: 0, y: "-50" },
        {
          opacity: 1,
          y: "0",
          duration: 0.3,
          scrollTrigger: {
            trigger: [".work-card"],
          },
          stagger: 0.3,
        }
      );
    }
    // { scope: container }
  );
  return <></>;
}
