import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadOverlay from "../components/HeadOverlay";
import HomeProducts from "../components/HomeProducts";
import HomeAd from "../components/HomeAd";
import ProductPage from "../components/ProductPage";
import { useState } from "react";

function Home() {
  const [showProductPage, setShowProductPage] = useState(false);

  return (
    <div>
      <Header />
      {!showProductPage ? (
        <>
          <HomeAd onSeeProduct={() => setShowProductPage(true)} />
          <HeadOverlay />
          <HomeProducts />
        </>
      ) : (
        <ProductPage />
      )}

      <Footer />
    </div>
  );
}

export default Home;
