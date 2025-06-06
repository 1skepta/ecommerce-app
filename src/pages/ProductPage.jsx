import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import products from "../data";
import { resolveImage } from "../utils/resolveImage";
import HeadOverlay from "../components/HeadOverlay";

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.slug === productId);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!product) {
    return (
      <>
        <Header />
        <div className="px-6 pt-4">
          <button onClick={() => navigate(-1)} className="text-gray-500">
            &larr; Go Back
          </button>
        </div>
        <div className="p-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">
            Sorry, the product you're looking for does not exist.
          </p>
        </div>
        <HeadOverlay />
        <Footer />
      </>
    );
  }

  const gallery = product.gallery;

  return (
    <>
      <Header />
      <div className="px-6 pt-4">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          &larr; Go Back
        </button>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        <img
          src={resolveImage(product.image.mobile)}
          alt={product.name}
          className="rounded-xl w-full mb-6"
        />

        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold my-4">${product.price}</p>

        <div className="flex items-center space-x-4 mb-8">
          <div className="flex border border-gray-400 rounded items-center">
            <button className="px-4 py-2 text-xl" onClick={handleDecrement}>
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button className="px-4 py-2 text-xl" onClick={handleIncrement}>
              +
            </button>
          </div>
          <button className="bg-[#d87d4a] text-white px-6 py-2 rounded">
            ADD TO CART
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">FEATURES</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {product.features}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">IN THE BOX</h2>
          <ul className="text-gray-600">
            {product.includes.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold text-[#d87d4a] mr-3">
                  {item.quantity}x
                </span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          <img
            src={resolveImage(gallery.first.mobile)}
            alt="Gallery 1"
            className="rounded-lg"
          />
          <img
            src={resolveImage(gallery.second.mobile)}
            alt="Gallery 2"
            className="rounded-lg"
          />
          <img
            src={resolveImage(gallery.third.mobile)}
            alt="Gallery 3"
            className="rounded-lg md:col-span-2"
          />
        </div>
      </div>

      <HeadOverlay />
      <Footer />
    </>
  );
}

export default ProductPage;
