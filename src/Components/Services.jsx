import React from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = React.memo(
  () => {
    const serviceRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      const elements = serviceRef.current.querySelectorAll('.fade-in');

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 100%'
            },
          }
        );
      });
    }, []);

    return (
      <div
        ref={serviceRef}
        data-scroll
        data-scroll-container
        id="services"
        className="w-full p-32 px-8 sm:p-12 lg:p-24 xl:p-32 font-medium capitalize font-[Nohemi] text-main bg-accent"
      >
        <h2 className="text-2xl sm:text-4xl lg:text-5xl cursor-pointer fade-in">Services we focus on</h2>
        <div className="w-full p-16 px-0 xl:p-20 xl:px-0">
          {/* Services */}
          <div className="w-full xl:grid grid-cols-3">
            <div className="w-full h-[25vh] sm:h-[30vh] xl:h-[50vh] p-8 flex flex-col justify-between border-l-2 border-b-2 border-darkLiver fade-in">
              <h4 className="text-2xl sm:text-4xl lg:text-5xl fade-in">01</h4>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl fade-in">Website Designing</h2>
            </div>
            <div className="w-full h-[25vh] sm:h-[30vh] xl:h-[50vh] p-8 flex flex-col justify-between border-x-2 border-b-2 border-darkLiver fade-in">
              <h4 className="text-2xl sm:text-4xl lg:text-5xl fade-in">02</h4>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl fade-in">Website Development</h2>
            </div>
            <div className="w-full h-[25vh] sm:h-[30vh] xl:h-[50vh] p-8 flex flex-col justify-between border-r-2 border-b-2 border-darkLiver fade-in">
              <h4 className="text-2xl sm:text-4xl lg:text-5xl fade-in">03</h4>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl fade-in">Search Engine Optimization</h2>
            </div>
          </div>
          {/* Text Scroll */}
          <div className="w-full h-full p-8 px-0 sm:p-12 sm:px-0 lg:p-16 lg:px-0 xl:p-8 xl:px-0 border-x-2 border-darkLiver fade-in">
            <div className="flex whitespace-nowrap overflow-hidden">
              <motion.h2
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="text-4xl sm:text-5xl lg:text-6xl px-2"
              >
                We craft award-winning web excellence.
              </motion.h2>
              <motion.h2
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="text-4xl sm:text-5xl lg:text-6xl px-2"
              >
                We craft award-winning web excellence.
              </motion.h2>
              <motion.h2
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="text-4xl sm:text-5xl lg:text-6xl px-2"
              >
                We craft award-winning web excellence.
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
    );
  });

export default Services;