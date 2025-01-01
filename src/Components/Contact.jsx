import React from 'react'
import gsap from 'gsap';
import { useRef } from 'react'
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';

const Contact = React.memo(() => {
  const contactRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const elements = contactRef.current.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 100%'
        }
      })
    })
  })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#0C0C0C" },
          dark: { "cal-brand": "#FCFCFC" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div
      id="contact"
      ref={contactRef}
      data-scroll
      data-scroll-container
      className="w-full p-32 px-8 lg:p-36 flex flex-col items-center justify-center font-[Nohemi] text-accent bg-main"
    >
      <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium text-center animate-underline-heading fade-in">Have An Idea In Mind?</h2>
      <div className="m-8 mx-0 lg:m-16">
        <button
          data-cal-namespace="30min"
          data-cal-link="bootwebstudio/30min"
          data-cal-config='{"layout":"month_view"}'
          className="p-6 px-12 flex items-center rounded-full text-xl lg:text-3xl xl:text-2xl fade-in animate-hover">
          <span className="">Book A Call</span>
          <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </div>
  )
});

export default Contact