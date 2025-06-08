import { Menu, X } from "lucide-react";
import cart from "../assets/shared/desktop/icon-cart.svg";
import { useState } from "react";
import HeadOverlay from "./HeadOverlay";
import { useCart } from "../utils/CartContext";
import CartModal from "./CartModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartCount } = useCart();

  return (
    <div className="relative">
      <nav className="bg-[#191919] text-white flex items-center justify-between py-6 px-5 md:px-10 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <span className="text-2xl font-extrabold tracking-wider">
            audiophile
          </span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm tracking-widest">
          <li className="cursor-pointer hover:text-[#d87d4a]">HOME</li>
          <li className="cursor-pointer hover:text-[#d87d4a]">HEADPHONES</li>
          <li className="cursor-pointer hover:text-[#d87d4a]">SPEAKERS</li>
          <li className="cursor-pointer hover:text-[#d87d4a]">EARPHONES</li>
        </ul>

        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <img src={cart} alt="Cart" className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#d87d4a] text-white text-[10px] rounded-full px-[7px] py-[2px] leading-none">
              {cartCount}
            </span>
          )}
        </div>
      </nav>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}

      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden bg-[#fafafa] ${
          isOpen ? "max-h-[800px] py-6" : "max-h-0 py-0"
        }`}
      >
        <HeadOverlay />
      </div>
    </div>
  );
}

export default Header;
