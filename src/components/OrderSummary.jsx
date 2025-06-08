import { useCart } from "../utils/CartContext";
import { useEffect } from "react";
import { resolveImage } from "../utils/resolveImage";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

function OrderSummary({ onClose }) {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();
  const { removeAll } = useCart();

  const shippingCost = 50;
  const vat = cartTotal * 0.2;
  const grandTotal = cartTotal + shippingCost + vat;

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

  const downloadOrderPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Order Summary", 20, 20);

    doc.setFontSize(12);
    let y = 30;
    cartItems.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.name} - ${item.quantity} x $${item.price} = $${(
          item.quantity * item.price
        ).toFixed(2)}`,
        20,
        y
      );
      y += 10;
    });

    y += 10;
    doc.text(`Product Total: $${cartTotal.toFixed(2)}`, 20, y);
    y += 10;
    doc.text(`Shipping: $${shippingCost.toFixed(2)}`, 20, y);
    y += 10;
    doc.text(`VAT (20%): $${vat.toFixed(2)}`, 20, y);
    y += 10;
    doc.setFont(undefined, "bold");
    doc.text(`Grand Total: $${grandTotal.toFixed(2)}`, 20, y);

    doc.save("order-summary.pdf");
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto px-4 pt-28"
    >
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-6">Order Confirmation</h2>

        <p className="mb-4 text-gray-600">
          Thank you for your order! Here is the summary:
        </p>

        <div className="space-y-4 max-h-[300px] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
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
                  <p className="text-gray-500 text-sm">
                    {item.quantity}x ${item.price}
                  </p>
                </div>
              </div>
              <p className="font-semibold text-sm">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Product Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT (20%)</span>
            <span>${vat.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-black text-base">
            <span>Grand Total</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={downloadOrderPDF}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded hover:bg-gray-200 w-full justify-center"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </button>
          <button
            onClick={() => {
              removeAll();
              onClose();
              navigate("/");
            }}
            className="bg-[#d87d4a] text-white py-3 px-4 rounded hover:opacity-90 w-full"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
