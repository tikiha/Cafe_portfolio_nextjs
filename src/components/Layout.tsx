import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <section
      className={`grid grid-cols-12 gap-x-8 gap-y-10 lg:container ${className}`}
    >
      {children}
    </section>
  );
};

export default Layout;
