import { useParams, useNavigate } from "react-router-dom";
import products from "../data";
import { resolveImage } from "../utils/resolveImage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeadOverlay from "../components/HeadOverlay";
import FooterOverlay from "../components/FooterOverlay";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filtered = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length === 0) {
    return (
      <>
        <Header />
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">
            No products found in {category}
          </h1>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-[#d87d4a] underline cursor-pointer"
          >
            Back to home
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-black text-white text-center py-10 mb-8">
        <h1 className="text-3xl font-semibold uppercase">{category}</h1>
      </div>
      <div className="px-6 md:hidden">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          &larr; Go Back
        </button>
      </div>
      <div className="py-6 w-5/6 mx-auto">
        {filtered.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.slug}
              className={`mb-14 flex flex-col items-center text-center md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } md:items-center md:gap-10 md:text-left`}
            >
              <img
                src={resolveImage(item.image.desktop)}
                alt={item.name}
                className="rounded-xl mb-6 md:w-1/2"
              />
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold uppercase">{item.name}</h2>
                <p className="my-4 text-gray-600">{item.description}</p>
                <button
                  onClick={() => navigate(`/product/${item.slug}`)}
                  className="bg-[#d87d4a] text-white px-6 py-3 rounded cursor-pointer hover:opacity-70"
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <HeadOverlay />
      <FooterOverlay />
      <Footer />
    </>
  );
}

export default CategoryPage;
