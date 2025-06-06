import { useNavigate } from "react-router-dom";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  const navigate = useNavigate();

  const footerLinks = [
    { name: "HOME", path: "/" },
    { name: "HEADPHONES", path: "/category/headphones" },
    { name: "SPEAKERS", path: "/category/speakers" },
    { name: "EARPHONES", path: "/category/earphones" },
  ];

  const currentYear = new Date().getFullYear();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="bg-[#191919] text-white flex flex-col items-center py-14 px-6">
        <span className="text-2xl font-extrabold tracking-wider">
          audiophile
        </span>
        <ul className="flex flex-col items-center my-10 leading-12">
          {footerLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => handleNavigate(link.path)}
              style={{ cursor: "pointer" }}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <span className="text-[#ffffff80] text-center">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you getthe most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
        </span>
        <span className="my-10 text-[#ffffff80]">
          Copyright {currentYear} SKEPTA. All rights reserved
        </span>
        <div className="flex">
          <img src={twitter} alt="none" />
          <img src={instagram} alt="none" className="mx-6" />
          <img src={facebook} alt="none" />
        </div>
      </div>
    </>
  );
}

export default Footer;
