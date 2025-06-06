import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import products from "../data";

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((item) => item.slug === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const correctedImage = product.image.mobile.replace("./", "/");
  const gallery = product.gallery;

  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <img
          src={correctedImage}
          alt={product.name}
          className="rounded-xl w-full mb-6"
        />
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold my-4">${product.price}</p>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex border border-gray-400 rounded">
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

        {/* Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {product.features}
          </p>
        </div>

        {/* In the Box */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">In the Box</h2>
          <ul className="text-gray-600">
            {product.includes.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold text-[#d87d4a]">
                  {item.quantity}x
                </span>{" "}
                {item.item}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={gallery.first.mobile.replace("./", "/")}
            alt="Gallery 1"
            className="rounded-lg"
          />
          <img
            src={gallery.second.mobile.replace("./", "/")}
            alt="Gallery 2"
            className="rounded-lg"
          />
          <img
            src={gallery.third.mobile.replace("./", "/")}
            alt="Gallery 3"
            className="rounded-lg md:col-span-2"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
