import React from "react";
import "./waveanimation.css";

const Wave1 = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3469.3 70"
    className={`${className}`}
    {...rest}
  >
    <path d="M.1 2.4c289.1 0 289.1 65.2 578.2 65.2S867.4 2.4 1156.5 2.4s289.1 65.2 578.2 65.2 289.1-65.2 578.2-65.2 289.1 65.2 578.2 65.2 289.1-65.2 578.2-65.2" />
  </svg>
);

const Wave2 = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3469.3 70"
    className={`${className}`}
    {...rest}
  >
    <path d="M-433.6 2.4c361.4 0 361.4 65.2 722.7 65.2S650.5 2.4 1011.9 2.4s361.4 65.2 722.7 65.2S2096 2.4 2457.4 2.4s361.4 65.2 722.8 65.2S3541.6 2.4 3903 2.4" />
  </svg>
);

const WaveAnimation = ({ className = "" }) => {
  return (
    <div className={`w-full h-[7vw] -z-10 absolute ${className}`}>
      <div className="w-full h-[7vw] relative flex items-center overflow-x-hidden">
        <Wave1 className="wave fill-none stroke-dark stroke-[0.5px] absolute w-[300vw]" />
        <Wave2 className="wave fill-none stroke-dark stroke-[0.5px] absolute w-[300vw]" />
      </div>
    </div>
  );
};

export default WaveAnimation;
