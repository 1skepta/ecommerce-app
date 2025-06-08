import gear from "../assets/shared/mobile/image-best-gear.jpg";

function FooterOverlay() {
  return (
    <div className="w-5/6 mx-auto text-center md:flex md:items-center md:flex-row-reverse">
      <img src={gear} alt="gear" className="rounded-xl md:w-1/2 md:ml-10" />
      <div>
        <h1 className="my-6 text-3xl font-semibold md:text-left">
          BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-[#00000080] mb-16 md:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default FooterOverlay;
