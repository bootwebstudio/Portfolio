import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = React.memo(() => {
  const textRefs = useRef([]);
  const aboutText =
    "We believe your website should be more than just a digital presence—it should be an experience. Our team of designers and developers is dedicated to creating innovative, tailored solutions that elevate your brand and engage your audience.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(textRefs.current, {
      color: "white",
      stagger: 0.05,
      scrollTrigger: {
        trigger: textRefs.current[0]?.parentElement,
        start: "top 85%",
        end: "bottom 50%",
        scrub: 5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div
      data-scroll
      data-scroll-container
      id="about"
      className="w-full p-32 px-8 sm:px-24 md:p-32 md:px-24 xl:pt-64 lg:p-24 xl:p-32 font-[Nohemi] text-darkLiver bg-accent"
    >
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center capitalize font-medium">
        {aboutText.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split(" ").map((letter, letterIndex) => (
              <span
                key={`${wordIndex}-${letterIndex}`}
                ref={addToRefs}
                className="inline-block"
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </div>
  );
});


export default About;
