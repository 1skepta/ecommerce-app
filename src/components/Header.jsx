import { Link } from "react-router-dom";
import { Menu, LucideShoppingCart } from "lucide-react";

function Header() {
  return (
    <div>
      <nav className="bg-[#191919] text-white flex items-center justify-between py-7 px-5">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}

        <Menu size={20} />
        <span className="text-2xl font-extrabold">audiophile</span>
        <LucideShoppingCart size={20} />
      </nav>
    </div>
  );
}

export default Header;
