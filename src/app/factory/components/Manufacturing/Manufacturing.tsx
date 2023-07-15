import React from "react";
import Process from "./Process";

const Manufacturing = ({ className = "" }) => {
  return (
    <section className={`h-screen ${className}`}>
      <div className="flex flex-col items-start container">
        <p className="">/01</p>
        <p className="mt-[1em] font-mont">Manufacturing Engineering</p>
        <h2 className="text-h3 mt-[0.5em]">製造工程</h2>
      </div>
      <div className="flex h-full container">
        <div className="h-full w-20" />
        <div className="flex flex-col">
          <Process
            area={"生豆エリア"}
            title={"生豆受け入れ・保管"}
            description={
              "生豆は乾式比重選別機で異物を取り除かれたあと、生豆サイロに保管されます。"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
