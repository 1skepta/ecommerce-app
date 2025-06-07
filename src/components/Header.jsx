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
      <nav className="bg-[#191919] text-white flex items-center justify-between py-6 px-5">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="text-2xl font-extrabold tracking-wider">
          audiophile
        </span>
        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
          <img src={cart} alt="Cart" className="w-6 h-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#d87d4a] text-white text-[10px] font-bold rounded-full px-[7px] py-[2px] leading-none">
              {cartCount}
            </span>
          )}
        </div>
      </nav>
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
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
