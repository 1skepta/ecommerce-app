import xx99mobile from "../assets/home/tablet/image-header.jpg";

function HomeAd() {
  return (
    <div className="bg-[#191919] px-6 pb-4">
      <div
        className="bg-cover bg-center flex items-center justify-center text-white text-center pb-20 h-[500px]"
        style={{ backgroundImage: `url(${xx99mobile})` }}
      >
        <div className="flex flex-col items-center">
          <span className="text-[#ffffff80] tracking-widest">NEW PRODUCT</span>
          <h1 className="text-3xl font-bold my-4 ">XX99 MARK II HEADPHONES</h1>
          <p className="text-sm max-w-md mx-auto text-[#ffffff80]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music artist
          </p>
          <div className="mt-12 bg-[#d87d4a] text-white p-4">SEE PRODUCT</div>
        </div>
      </div>
    </div>
  );
}

export default HomeAd;
