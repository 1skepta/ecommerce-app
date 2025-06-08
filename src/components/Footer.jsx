import { useNavigate, useLocation } from "react-router-dom";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "HOME", path: "/" },
    { name: "HEADPHONES", path: "/category/headphones" },
    { name: "SPEAKERS", path: "/category/speakers" },
    { name: "EARPHONES", path: "/category/earphones" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#191919] text-white py-14 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <span
            onClick={() => navigate("/")}
            className="text-2xl font-extrabold cursor-pointer tracking-wider block mb-6"
          >
            audiophile
          </span>
          <p className="text-[#ffffff80] text-sm mb-6 max-w-md">
            Audiophile is an all-in-one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="text-[#ffffff80] text-sm">
            Copyright {currentYear} SKEPTA. All rights reserved.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-start md:items-end gap-6">
          <ul className="flex flex-col md:flex-row gap-4 text-sm tracking-widest">
            {footerLinks.map((link) => (
              <li
                key={link.name}
                onClick={() => navigate(link.path)}
                className={`cursor-pointer hover:text-[#d87d4a] ${
                  isActive(link.path) ? "text-[#d87d4a]" : ""
                }`}
              >
                {link.name}
              </li>
            ))}
          </ul>
          <div className="flex gap-6 mt-4">
            <img
              src={facebook}
              alt="Facebook"
              className="cursor-pointer hover:opacity-80"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="cursor-pointer hover:opacity-80"
            />
            <img
              src={twitter}
              alt="Twitter"
              className="cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
