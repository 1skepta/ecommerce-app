import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#191919] text-white mb-24 flex flex-col items-center py-14 px-6">
      <span className="text-2xl font-extrabold">audiophile</span>
      <ul className="flex flex-col items-center my-10 leading-12">
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>
      <span className="text-[#ffffff80] text-center">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you getthe most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </span>
      <span className="my-10 text-[#ffffff80]">
        Copyright 2025. All rights reserved
      </span>
      <div className="flex">
        <FaFacebook size={24} />
        <FaInstagram size={24} /> <FaXTwitter size={24} />
      </div>
    </div>
  );
}

export default Footer;
