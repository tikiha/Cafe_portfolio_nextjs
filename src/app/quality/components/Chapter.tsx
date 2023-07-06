import React from "react";
import ChapterSwiper from "./Swiper/ChapterSwiper";

const Chapter = ({ num, title, sub1, sub2, paragraph, className = "" }) => {
  return (
    <section className={`relative w-full h-screen mt-40 ${className}`}>
      <div className="h-full w-full flex">
        <div className="w-1/3 h-full rounded-tr-[50px] bg-gradient-to-bl from-stone-200/40 to-transparent">
          <h2 className="flex flex-col h-1/2 items-center">
            <div className="relative w-fit">
              <span className="text-9xl text-light">#{num}</span>
              <span className="text-h4 absolute bottom-1/4 left-0 whitespace-nowrap translate-x-1/3">
                {title}
              </span>
            </div>
            <div className="text-h3 font-mont flex flex-col px-[1em]">
              <span className="">{sub1}</span>
              <span className="translate-x-[1em]">{sub2}</span>
            </div>
          </h2>
        </div>
        <div className="h-1/2 w-2/3 flex items-center justify-center px-10">
          <p>{paragraph}</p>
        </div>
        <ChapterSwiper className="absolute bottom-0 right-0" />
      </div>
    </section>
  );
};

export default Chapter;
