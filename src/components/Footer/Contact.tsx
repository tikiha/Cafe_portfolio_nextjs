import Link from "next/link";
import React from "react";

const Contact = ({ className = "" }) => {
  return (
    <div className={`flex bg-primary ${className}`}>
      <Link
        className="w-full aspect-square max-h-[80vh] bg-[url(/coffeePics/contact.jpg)] bg-no-repeat bg-cover bg-bottom rounded-bl-[10%] overflow-hidden border-r relative"
        href={"/contact"}
      >
        <div className="h-full w-full bg-Dark/30 absolute" />

        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-start text-Light">
          <span>お問い合わせ</span>
          <h2 className="font-mont text-h2">Contact</h2>
        </div>
      </Link>
      <Link
        className="w-full aspcet-square max-h-[80vh] bg-[url(/coffeePics/brown.jpg)] bg-no-repeat bg-cover bg-center rounded-br-[10%] overflow-hidden relative"
        href={"/faq"}
      >
        <div className="h-full w-full bg-Dark/30 absolute" />

        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-start text-Light">
          <span>よくあるご質問</span>
          <h2 className="font-mont text-h2">FAQ</h2>
        </div>
      </Link>
    </div>
  );
};

export default Contact;
