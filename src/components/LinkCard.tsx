import React, { useState } from "react";
import ParallaxText from "./ui/ParallaxText";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const LinkCard = ({ title, subtitle, href, parallax, className = "" }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className="w-full h-[50vh] bg-stone-200/50 relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={href} className="h-full w-full absolute z-30" />
      <h2 className="absolute top-1/2 -translate-y-[200%] text-h3 left-1/2 -translate-x-1/2 z-20 transition-colors duration-300 group-hover:text-Light">
        {title}
      </h2>
      <span className="absolute top-1/2 left-1/2 text-body -translate-x-1/2 z-20 transition-colors duration-300 group-hover:text-Light">
        {subtitle}
      </span>
      <ParallaxText
        baseVelocity={-0.5}
        className={"absolute bottom-1/2 text-Light text-h3 font-mont z-0"}
      >
        {parallax}
      </ParallaxText>
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="h-full rounded-tl-[20px] aspect-[2/3] absolute top-0 left-1/2
      bg-[url(/coffeePics/colorful.jpg)] brightness-75 bg-center bg-cover bg-no-repeat z-10"
            initial={{ opacity: 0, translateX: "-50%" }}
            animate={{
              opacity: 1,
              translateY: -30,
              rotate: 5,
            }}
            exit={{ opacity: 0, translateY: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default LinkCard;
