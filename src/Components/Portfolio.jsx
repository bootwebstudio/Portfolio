import React from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Work from './Work';

const Portfolio = React.memo(() => {
  const gsapRef = useRef(null);
  const portfolioRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(gsapRef.current, {
        transform: "translateX(-100vw)",
        scrollTrigger: {
          trigger: gsapRef.current,
          start: "top top",
          end: "top -100%",
          scrub: 2,
          pin: true
        }
      });

      gsap.fromTo(
        portfolioRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 100%", 
            end: "top 50%", 
            scrub: true,
          },
        }
      );
    }, gsapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      data-scroll
      data-scroll-container
      className="w-full h-full overflow-hidden">
      <div
        ref={gsapRef}
        id="portfolio"
        className="w-[200vw] h-full flex font-[Nohemi] text-accent bg-main">
        {/* Excellence */}
        <div className="w-[100vw] h-screen flex items-center justify-center">
          <h2 ref={portfolioRef} className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:capitalize text-center font-semibold">Our Work of Excellence</h2>
        </div>
        {/* Portfolio Container */}
        <div className="w-[100vw] h-full p-8 sm:p-12 lg:p-16 xl:p-32">
          <Work />
          <div className="flex items-center justify-center">
            <button className="mt-8 xl:mt-16 p-3 px-6 md:p-4 md:px-8 lg:p-5 lg:px-10 xl:p-4 xl:px-8 lg:text-2xl xl:text-base rounded-full animate-hover">
              <span className="capitalize">See all works</span>
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});


export default Portfolio;
