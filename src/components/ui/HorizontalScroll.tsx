"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";

function HorizontalScroll({ children, className = "" }) {
  const Yref = useRef(null);
  const Xref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Yref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    Xref.current.scrollLeft =
      (Yref.current.offsetHeight - window.innerWidth) * latest;
  });

  return (
    <section
      ref={Yref}
      className={`relative h-[calc(100vw+132px)] w-full ${className}`}
    >
      <div
        ref={Xref}
        className="h-screen sticky top-0 flex w-full overflow-x-auto items-center space-x-10 scroll-hidden"
      >
        {children}
      </div>
    </section>
  );
}

export default HorizontalScroll;
