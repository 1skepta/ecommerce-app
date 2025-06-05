import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadOverlay from "../components/HeadOverlay";
import HomeProducts from "../components/HomeProducts";
import HomeAd from "../components/HomeAd";
import gear from "../assets/shared/mobile/image-best-gear.jpg";

function Home() {
  return (
    <div>
      <Header />
      <HomeAd />
      <HeadOverlay />
      <HomeProducts />
      <div className="w-5/6 mx-auto text-center">
        <img src={gear} alt="gear" className="rounded-xl" />
        <h1 className="my-6 ">
          BRINGING YOU THE <span className="text-[#d87d4a]">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="text-[#00000080]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
