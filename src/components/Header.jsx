import { Menu, X } from "lucide-react";
import cart from "../assets/shared/desktop/icon-cart.svg";
import { useState } from "react";
import HeadOverlay from "./HeadOverlay";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="bg-[#191919] text-white flex items-center justify-between py-6 px-5">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="text-2xl font-extrabold tracking-wider">
          audiophile
        </span>
        <img src={cart} alt="none" />
      </nav>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#fafafa] ${
          isOpen ? "max-h-[800px] py-6" : "max-h-0 py-0"
        }`}
      >
        <HeadOverlay />
      </div>
    </div>
  );
}

export default Header;
