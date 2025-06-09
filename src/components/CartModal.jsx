import { useCart } from "../utils/CartContext";
import { useEffect } from "react";
import { resolveImage } from "../utils/resolveImage";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function CartModal({ onClose }) {
  const navigate = useNavigate();

  const { cartItems, cartCount, cartTotal, updateQuantity, removeAll } =
    useCart();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto px-4 pt-28"
    >
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">CART ({cartCount})</h2>
          {cartCount > 0 && (
            <button
              onClick={removeAll}
              className="text-sm text-gray-500 hover:underline cursor-pointer"
            >
              Remove all
            </button>
          )}
        </div>

        {cartCount === 0 ? (
          <div className="flex flex-col items-center justify-center text-center text-gray-500 py-12">
            <ShoppingCart className="w-12 h-12 mb-4 text-gray-400" />
            <p className="text-lg font-semibold">Your cart is empty</p>
            <p className="text-sm mt-1">Add something to make it happy!</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {item?.image ? (
                      <img
                        src={resolveImage(item.image)}
                        alt={item.name}
                        className="w-16 h-16 rounded-md"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-md" />
                    )}

                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-sm">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center border rounded overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 text-sm font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 text-sm font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="uppercase text-gray-500">Total</p>
              <p className="text-lg font-bold">${cartTotal}</p>
            </div>

            <button
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="mt-6 bg-[#d87d4a] w-full text-white py-3 rounded cursor-pointer hover:opacity-90"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
