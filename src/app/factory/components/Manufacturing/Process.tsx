import React from "react";
import ProcessSwiper from "./ProcessSwiper/ProcessSwiper";

const Process = ({ area, title, description }) => {
  return (
    <div className="h-[50lvh] flex mt-20">
      <div className="flex flex-col items-start h-full px-16">
        <p className="">{area}</p>
        <h3 className="mt-[25%] text-h4">{title}</h3>
        <p className="mt-[1em]">{description}</p>
      </div>
      <ProcessSwiper />
    </div>
  );
};

export default Process;
