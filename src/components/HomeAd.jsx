import xx99mobile from "../assets/home/tablet/image-header.jpg";
import xx99desktop from "../assets/home/desktop/image-hero.jpg";
import { useNavigate } from "react-router-dom";

function HomeAd() {
  const navigate = useNavigate();
  const productSlug = "xx99-mark-two-headphones";

  return (
    <div className="bg-[#191919] px-6 pb-4 md:px-[8%]">
      {/* Mobile background (default) */}
      <div
        className="bg-cover bg-center flex items-center justify-center text-white text-center pb-20 h-[500px] md:hidden"
        style={{ backgroundImage: `url(${xx99mobile})` }}
      >
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <span className="text-[#ffffff80] tracking-widest md:mt-20">
            NEW PRODUCT
          </span>
          <h1 className="text-3xl font-bold my-4 md:text-5xl">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-sm max-w-md mx-auto text-[#ffffff80] md:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music artist
          </p>
          <button
            onClick={() => navigate(`/product/${productSlug}`)}
            className="mt-12 bg-[#d87d4a] text-white p-4 cursor-pointer hover:opacity-80"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>

      {/* Desktop/Tablet background (md and up) */}
      <div
        className="bg-cover bg-center hidden md:flex items-center justify-start text-white text-left pb-20 h-[500px]"
        style={{ backgroundImage: `url(${xx99desktop})` }}
      >
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <span className="text-[#ffffff80] tracking-widest md:mt-20">
            NEW PRODUCT
          </span>
          <h1 className="text-3xl font-bold my-4 md:text-5xl">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-sm max-w-md mx-auto text-[#ffffff80] md:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music artist
          </p>
          <button
            onClick={() => navigate(`/product/${productSlug}`)}
            className="mt-12 bg-[#d87d4a] text-white p-4 cursor-pointer hover:opacity-80"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeAd;
