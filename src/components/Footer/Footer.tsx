import React from "react";
import Contact from "./Contact";
import SiteMap from "./SiteMap";
import OnlineShop from "./OnlineShop";

const Footer = ({ className = "" }) => {
  return (
    <footer className={className}>
      <Contact />
      <SiteMap />
      <OnlineShop />
    </footer>
  );
};

export default Footer;
