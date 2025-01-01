import React from 'react';
import 'remixicon/fonts/remixicon.css';
import Portfolio1 from '../assets/images/Portfolio-1.png';
import Portfolio2 from '../assets/images/Portfolio-2.png';
import Portfolio3 from '../assets/images/Portfolio-3.png';

const Work = React.memo(() => {
  const portfolioData = [
    {
      side: "flex-row",
      image: Portfolio1,
      name: "Dverso Studio Landing Page",
      link: "https://dversostudio.io/",
      work: ["Designing", "Development", "SEO"],
    },
    {
      side: "flex-row-reverse",
      image: Portfolio2,
      name: "69 Pixel Landing Page",
      link: "https://69pixels.com/startups/",
      work: ["Designing", "Development", "SEO"],
    },
    {
      side: "flex-row",
      image: Portfolio3,
      name: "Galeries Lafayette Landing Page",
      link: "https://130ans.galerieslafayette.com/",
      work: ["Designing", "Development", "SEO"],
    },
  ];

  return (
    <>
      {portfolioData.map((element, index) => (
        <div
          data-scroll
          data-scroll-container
          key={index}
          className={`w-full flex ${element.side}`}
        >
          <div className="w-full xl:w-[45%] h-fit z-10">
            {/* Image */}
            <a
              href={element.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full h-[35vh] md:h-[50vh] object-cover object-center"
                src={element.image}
                alt="Portfolio Preview"
              />
            </a>
            <div className="p-2 px-0 pb-4 sm:p-4 sm:px-0 sm:pb-8 lg:p-8 lg:px-0 lg:pb-16 xl:p-5 xl:px-0 flex items-center">
              {/* Details */}
              <div className="w-full h-full">
                <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-2xl font-medium leading-none">
                    {element.name}
                  </h2>
                  <div className="space-x-2 text-darkLiver">
                    {element.work.map((workItem, workIndex) => (
                      <span key={workIndex} className="text-sm sm:text-base lg:text-2xl xl:text-base">
                        {workItem}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
              {/* Visit website */}
              <a
                className="p-3 px-4 md:p-4 md:px-5 lg:p-5 lg:px-6 xl:p-4 xl:px-5 text-xl lg:text-3xl xl:text-xl rounded-full flex items-center justify-center text-main bg-accent"
                href={element.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
});

export default Work;
