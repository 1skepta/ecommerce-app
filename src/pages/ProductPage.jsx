import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import products from "../data";
import { resolveImage } from "../utils/resolveImage";
import HeadOverlay from "../components/HeadOverlay";
import FooterOverlay from "../components/FooterOverlay";
import { useCart } from "../utils/CartContext";

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.slug === productId);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!product) {
    return (
      <>
        <Header />
        <div className="px-6 pt-4 md:hidden">
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
      <div className="px-6 pt-4 md:hidden">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          &larr; Go Back
        </button>
      </div>

      <div className="py-6 mx-auto w-5/6">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 mb-12">
          <img
            src={resolveImage(product.image.desktop)}
            alt={product.name}
            className="rounded-xl w-full mb-6 md:w-1/2"
          />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold my-4">${product.price}</p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex border border-gray-400 rounded items-center">
                <button
                  className="px-4 py-2 text-xl cursor-pointer"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <button
                  className="px-4 py-2 text-xl cursor-pointer"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCart(product, quantity)}
                className="bg-[#d87d4a] text-white px-6 py-2 rounded cursor-pointer hover:opacity-70"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16 md:flex md:gap-16">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">FEATURES</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {product.features}
            </p>
          </div>
          <div className="md:w-1/3">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          <div className="flex flex-col gap-4">
            <img
              src={resolveImage(gallery.first.desktop)}
              alt="Gallery 1"
              className="rounded-lg"
            />
            <img
              src={resolveImage(gallery.second.desktop)}
              alt="Gallery 2"
              className="rounded-lg"
            />
          </div>
          <div>
            <img
              src={resolveImage(gallery.third.desktop)}
              alt="Gallery 3"
              className="rounded-lg h-full object-cover"
            />
          </div>
        </div>
      </div>

      <HeadOverlay />
      <FooterOverlay />
      <Footer />
    </>
  );
}

export default ProductPage;
