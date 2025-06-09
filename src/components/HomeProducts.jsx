import { useNavigate } from "react-router-dom";
import zx7 from "../assets/home/mobile/image-speaker-zx7.jpg";
import speaker from "../assets/home/desktop/image-speaker-zx9.png";
import earphone from "../assets/home/mobile/image-earphones-yx1.jpg";
import bigzx7 from "../assets/home/desktop/image-speaker-zx7.jpg";

function HomeProducts() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="relative bg-[#d87d4a] px-6 w-5/6 rounded-xl mx-auto overflow-hidden h-[600px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/5 w-[500px] h-[500px] bg-no-repeat bg-center bg-contain z-0 bg-[url('/src/assets/home/desktop/pattern-circles.svg')] md:left-0 md:top-auto md:bottom-0 md:translate-x-0 md:translate-y-0 md:w-[700px] md:h-[700px]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full md:flex-row md:pt-24 md:items-start">
          <img
            src={speaker}
            alt="ZX9 speaker"
            className="w-3/6 md:w-4/10 md:mt-14"
          />
          <div className="md:w-1/3 md:mt-16 md:text-left md:ml-10">
            <h1 className="text-3xl font-bold my-4 md:text-5xl">ZX9 SPEAKER</h1>
            <p className="text-sm max-w-md mx-auto">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound
            </p>
            <button
              onClick={() => navigate("/product/zx9-speaker")}
              className="mt-12 bg-[#191919] text-white px-4 py-3 cursor-pointer hover:bg-transparent hover:border hover:border-white"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center rounded-xl w-5/6 mx-auto h-[350px] my-6 flex flex-col items-start px-6 justify-center md:hidden"
        style={{ backgroundImage: `url(${zx7})` }}
      >
        <h1 className="text-3xl font-semibold">ZX7 SPEAKER</h1>
        <button
          onClick={() => navigate("/product/zx7-speaker")}
          className="mt-9 border border-black px-4 py-3 hover:bg-black hover:text-white cursor-pointer"
        >
          SEE PRODUCT
        </button>
      </div>

      <div
        className="bg-cover bg-center hidden md:flex rounded-xl w-5/6 mx-auto h-[350px] my-6 flex-col items-start px-6 justify-center md:pl-20"
        style={{ backgroundImage: `url(${bigzx7})` }}
      >
        <h1 className="text-3xl font-semibold">ZX7 SPEAKER</h1>
        <button
          onClick={() => navigate("/product/zx7-speaker")}
          className="mt-9 border border-black px-4 py-3 hover:bg-black hover:text-white cursor-pointer"
        >
          SEE PRODUCT
        </button>
      </div>

      <div className="w-5/6 mx-auto md:flex md:justify-between md:">
        <div>
          <img src={earphone} alt="YX1 Earphones" className="rounded-xl" />
        </div>
        <div className="bg-[#f1f1f1] my-5 px-6 py-10 rounded-xl flex flex-col items-start justify-center md:w-[50%] md:my-0 md:ml-10 md:pl-12">
          <h1 className="text-3xl font-semibold">YX1 EARPHONES</h1>
          <button
            onClick={() => navigate("/product/yx1-earphones")}
            className="mt-9 border border-black px-4 py-3 cursor-pointer hover:bg-black hover:text-white"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
