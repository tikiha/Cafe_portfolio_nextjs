import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Beans from "@/Pics/DDD.svg";

const images = [
  { title: "Beans", src: "/coffeePics/beans.jpg" },
  { title: "Roasting", src: "/coffeePics/roasting.jpg" },
  { title: "Packaging", src: "/coffeePics/packaging.jpg" },
  { title: "Sale", src: "/coffeePics/sale.jpg" },
  { title: "YourCup", src: "/coffeePics/yourcup.jpg" },
];

const Carousel = ({ isSelected, className = "" }) => {
  return (
    <div
      className={`w-full aspect-[16/9] rounded-tr-[100px] relative overflow-hidden flex items-center ${className}`}
    >
      <AnimatePresence>
        {images.map(
          (image) =>
            isSelected === image.title && (
              <motion.img
                key={image.title}
                src={image.src}
                alt=""
                className="object-cover object-center w-full absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
