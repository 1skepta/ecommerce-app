import { Link } from "react-router-dom";
import { Menu, LucideShoppingCart, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#191919] text-white flex items-center justify-between py-7 px-5">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="text-2xl font-extrabold">audiophile</span>
        <LucideShoppingCart className="w-6 h-6" />
      </nav>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center">
          image
          <span>HEADPHONES</span>
          <span className="text-[#00000080]">SHOP </span>
        </div>
        <div className="flex flex-col items-center">
          image
          <span>SPEAKERS</span>
          <span className="text-[#00000080]">SHOP </span>
        </div>
        <div className="flex flex-col items-center">
          image
          <span>EARPHONES</span>
          <span className="text-[#00000080]">SHOP </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
