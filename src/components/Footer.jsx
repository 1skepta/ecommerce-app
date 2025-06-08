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
      <div className="bg-[#191919] text-white flex flex-col items-center py-14 px-6 md:px-[8%] ">
        <div className="md:flex md:justify-between md:items-center md:w-full cursor-pointer">
          <span
            className="text-2xl font-extrabold tracking-wider"
            onClick={() => navigate("/")}
          >
            audiophile
          </span>
          <ul className="flex flex-col items-center my-10 leading-12 md:flex-row">
            {footerLinks.map((link) => (
              <li
                key={link.name}
                onClick={() => handleNavigate(link.path)}
                style={{ cursor: "pointer" }}
                className="md:ml-10"
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex-row md:justify-between items-center flex flex-col">
          <div className="md:flex-col md:flex md:w-1/2 text-center md:text-left">
            <span className="text-[#ffffff80] text-center md:text-left">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you getthe most out of personal audio. Come and
              visit our demo facility - we’re open 7 days a week.
            </span>
            <span className="text-[#ffffff80] md:mt-8">
              Copyright {currentYear} SKEPTA. All rights reserved
            </span>
          </div>

          <div className="flex mt-8 md:mt-0">
            <img
              src={twitter}
              alt="none"
              className="md:w-7 md:h-7 cursor-pointer"
            />
            <img
              src={instagram}
              alt="none"
              className="md:w-7 md:h-7 mx-6 cursor-pointer"
            />
            <img
              src={facebook}
              alt="none"
              className="md:w-7 md:h-7 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
