import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

const Navbar = React.memo(() => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(now);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = useCallback((id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
    <div className="w-full flex items-start xl:items-center justify-between">
      {/* <svg
        width="32"
        height="40"
        viewBox="0 0 46 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6 5.70001V27.2L17.7 24.4C9 19.4 3.59999 10.1 3.59999 0H0V24.6C0 32.6 4.59999 40 11.9 43.5L22.7 48.7V27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.70001Z"
          fill="#0c0c0c"
        />
      </svg> */}
      <h2 className="text-lg md:text-xl font-semibold">
        <span>Bootweb Studio</span>
        <sup>©</sup>
      </h2>
      <div className="flex flex-col xl:flex-row gap-2 xl:gap-20">
        <div className="hidden sm:flex gap-2 items-center">
          <div className="w-[4px] h-[4px] rounded-full bg-green"></div>
          <span className="text-xs sm:text-base xl:text-sm text-green">
            Available Jan 2025
          </span>
          <div>-</div>
          <div className="flex gap-2 items-center">
            <span className="text-sm sm:text-base">India</span>
            <div className="w-[4px] h-[4px] rounded-full bg-accent"></div>
            <span className="text-xs sm:text-base xl:text-sm">{time || "00:00"}</span>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-5 items-end xl:items-center">
          <span
            onClick={() => scrollToSection("#about")}
            className="sm:text-lg xl:text-sm cursor-pointer animate-underline"
          >
            About
          </span>
          <span
            onClick={() => scrollToSection("#services")}
            className="sm:text-lg xl:text-sm cursor-pointer animate-underline"
          >
            Services
          </span>
          <span
            onClick={() => scrollToSection("#portfolio")}
            className="sm:text-lg xl:text-sm cursor-pointer animate-underline"
          >
            Portfolio
          </span>
          <span
            onClick={() => scrollToSection("#contact")}
            className="block xl:hidden sm:text-lg xl:text-sm cursor-pointer animate-underline"
          >
            Contact
          </span>
          <button
            data-cal-namespace="30min"
            data-cal-link="bootwebstudio/30min"
            data-cal-config='{"layout":"month_view"}'
            className="hidden xl:block xl:text-sm xl:p-2 xl:px-4 xl:rounded-full animate-hover">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
