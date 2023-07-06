import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteMapGroup } from "./LinkGroup";
import Image from "next/image";

const NavViewPort = ({ hoverd, setHovered }) => {
  return (
    <>
      {hoverd && (
        <motion.div
          className="bg-secondary w-[calc(100%+48px)] aspect-[3/1] max-h-[30vh] absolute top-0 left-0 rounded-bl-[40px] px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onMouseEnter={() => setHovered(hoverd)}
          onMouseLeave={() => setHovered(null)}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          {SiteMapGroup.map(
            (site) =>
              hoverd === site.title && (
                <div
                  key={site.title}
                  className="grid grid-cols-3 gap-x-8 h-full pt-20"
                >
                  {site.content.map((content) => (
                    <Link
                      key={content.href}
                      href={content.href}
                      className="col-span-1 flex items-center justify-between h-full w-full border-t border-mute"
                    >
                      <div className="w-1/3 aspect-square relative">
                        <Image
                          src={`/coffeePics${content.href}.jpg`}
                          alt={`${content.href} Picture`}
                          fill
                          sizes="100vh"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <span>{content.subtitle}</span>
                        <span className="text-sm">{content.subtitleEn}</span>
                      </div>
                      <div />
                      <ArrowRight
                        size={32}
                        className="aspect-square w-fit rounded-full border border-dark p-1"
                      />
                    </Link>
                  ))}
                </div>
              )
          )}
        </motion.div>
      )}
    </>
  );
};

export default NavViewPort;
