import speaker from "../assets/home/mobile/image-speaker-zx9.png";
import zx7 from "../assets/home/mobile/image-speaker-zx7.jpg";
import earphone from "../assets/home/mobile/image-earphones-yx1.jpg";

function HomeProducts() {
  return (
    <div className="flex flex-col">
      <div className="relative bg-[#d87d4a] px-6 w-5/6 rounded-xl mx-auto overflow-hidden h-[600px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/5 w-[500px] h-[500px] bg-no-repeat bg-center bg-contain z-0 bg-[url('/src/assets/home/desktop/pattern-circles.svg')]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full">
          <img src={speaker} alt="speaker on my screen" className="w-3/6" />
          <h1 className="text-3xl font-bold my-4">ZX9 SPEAKER</h1>
          <p className="text-sm max-w-md mx-auto">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </p>
          <div className="mt-12 bg-[#191919] text-white px-4 py-3">
            SEE PRODUCT
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center rounded-xl w-5/6 mx-auto h-[350px] my-6 flex flex-col items-start px-6 justify-center"
        style={{ backgroundImage: `url(${zx7})` }}
      >
        <h1 className="text-3xl font-semibold ">ZX7 SPEAKER</h1>
        <div className="mt-9 border border-black px-4 py-3">SEE PRODUCT</div>
      </div>

      <div className="w-5/6 mx-auto">
        <div>
          <img src={earphone} alt="earphones" className="rounded-xl" />
        </div>
        <div className="bg-[#f1f1f1] my-5 px-6 py-10 rounded-xl flex flex-col items-start justify-center">
          <h1 className="text-3xl font-semibold ">YX1 EARPHONES</h1>
          <div className="mt-9 border border-black px-4 py-3">SEE PRODUCT</div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
