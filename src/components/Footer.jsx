import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import gear from "../assets/shared/mobile/image-best-gear.jpg";

function Footer() {
  return (
    <>
      <div className="w-5/6 mx-auto text-center">
        <img src={gear} alt="gear" className="rounded-xl" />
        <h1 className="my-6 text-3xl font-semibold ">
          BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-[#00000080] mb-16">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="bg-[#191919] text-white mb-24 flex flex-col items-center py-14 px-6">
        <span className="text-2xl font-extrabold tracking-wider">
          audiophile
        </span>
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
          <img src={twitter} alt="none" />
          <img src={instagram} alt="none" />
          <img src={facebook} alt="none" />
        </div>
      </div>
    </>
  );
}

export default Footer;
