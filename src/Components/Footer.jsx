import React from 'react'
import gsap from 'gsap';
import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';

const Footer = React.memo(() => {
  const footerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const elements = footerRef.current.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 105%'
        }
      })
    })
  })

  return (
    <div
      ref={footerRef}
      data-scroll
      data-scroll-container
      className="w-full p-4 sm:p-6 sm:pb-2 lg:p-4 lg:px-16 h-fit overflow-hidden font-[Nohemi] text-accent bg-main">
      <div className="w-full pt-4 border-t-[0.8px] border-gainsboro flex flex-col items-center xl:flex-row xl:items-center xl:justify-between">
        {/* Footer Rights */}
        <span className="fade-in lg:text-2xl xl:text-base">© 2024 Bootweb Studio. All rights reserved.</span>
        <div className="flex gap-4 lg:gap-6 xl:gap-10 items-center">
          {/* Footer Contact */}
          <a href="mailto:bootwebstudio@gmail.com" target="_blank">
            <div className="lg:text-2xl xl:text-base flex gap-2 items-center fade-in">
              <span className="text-lg lg:text-2xl xl:text-xl"><i className="ri-mail-line"></i></span>
              <span className="cursor-pointer animate-underline">contact@bootwebstudio</span>
            </div>
          </a>
          {/* Footer Social */}
          <div className="flex gap-2 lg:gap-4 items-center fade-in">
            <a className="text-xl lg:text-3xl xl:text-2xl" href="https://www.youtube.com/@bootwebstudio" target="_blank"><i className="ri-youtube-line"></i></a>
            <a className="text-xl lg:text-3xl xl:text-2xl" href="https://github.com/bootwebstudio" target="_blank"><i className="ri-github-line"></i></a>
            <a className="text-xl lg:text-3xl xl:text-2xl" href="https://www.instagram.com/bootwebstudio/" target="_blank"><i className="ri-instagram-line"></i></a>
          </div>
        </div>
      </div>
    </div >
  )
});

export default Footer