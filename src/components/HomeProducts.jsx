import speaker from "../assets/home/mobile/image-speaker-zx9.png";

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
    </div>
  );
}

export default HomeProducts;
