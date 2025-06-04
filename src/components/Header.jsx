import { Link } from "react-router-dom";
import { Menu, LucideShoppingCart, X } from "lucide-react";
import { useState } from "react";
import data from "../data.json";

const allImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png}", {
  eager: true,
});

const getMobileImage = (path) => {
  const match = Object.entries(allImages).find(([key]) =>
    key.includes(path.replace("./", ""))
  );
  return match ? match[1].default : null;
};

const categories = ["speakers", "earphones", "headphones"];

const categoryItems = data.filter((item) =>
  categories.includes(item.category.toLowerCase())
);

const categoryImages = categoryItems.map((item) => ({
  name: item.category.toUpperCase(),
  image: getMobileImage(item.categoryImage.mobile),
}));

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
        <LucideShoppingCart className="w-6 h-6" />
      </nav>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#fafafa] ${
          isOpen ? "max-h-[500px] py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-5">
          {categoryImages.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-28 h-28 object-cover rounded-lg shadow-md mb-2"
              />
              <span className="font-bold text-sm tracking-wide">
                {cat.name}
              </span>
              <span className="text-[#00000080] text-xs">SHOP</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
