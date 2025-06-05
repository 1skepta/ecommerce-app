import Header from "../components/Header";
import Footer from "../components/Footer";
import xx99mobile from "../assets/home/mobile/image-header.jpg";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-[#191919]">
        <div
          className="bg-cover bg-center flex items-center justify-center text-white text-center px-4 h-[500px]"
          style={{ backgroundImage: `url(${xx99mobile})` }}
        >
          <div>
            <h1 className="text-3xl font-bold mb-4">XX99 Mark II Headphones</h1>
            <p className="text-sm max-w-md mx-auto">
              Experience natural, lifelike audio and exceptional build quality.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
