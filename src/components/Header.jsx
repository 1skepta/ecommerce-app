import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="bg-[#191919] text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Header;
