import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadOverlay from "../components/HeadOverlay";
import HomeProducts from "../components/HomeProducts";
import HomeAd from "../components/HomeAd";

function Home() {
  return (
    <div>
      <Header />
      <HomeAd />
      <HeadOverlay />
      <HomeProducts />
      <Footer />
    </div>
  );
}

export default Home;
