import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import cod from "../assets/checkout/icon-cash-on-delivery.svg";

function Checkout() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "momo",
    momoNumber: "",
    momoNetwork: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{9,10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!form.address.trim()) newErrors.address = "Address is required";

    if (!form.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^[a-zA-Z0-9\-]+$/.test(form.zip)) {
      newErrors.zip = "Enter a valid ZIP code";
    }

    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.country.trim()) newErrors.country = "Country is required";

    if (form.paymentMethod === "momo") {
      if (!form.momoNumber.trim()) {
        newErrors.momoNumber = "Momo number is required";
      } else if (!/^\d{9,10}$/.test(form.momoNumber)) {
        newErrors.momoNumber = "Enter a valid momo number";
      }

      if (!form.momoNetwork.trim()) {
        newErrors.momoNetwork = "Network is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Checkout successful!");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <div className="px-4 sm:px-8 pt-6 max-w-xl mx-auto">
        <button onClick={() => navigate(-1)} className="text-gray-500 mb-6">
          &larr; Go Back
        </button>

        <div className="bg-white rounded-xl shadow-md p-6 sm:p-10 mb-12">
          <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>

          <form onSubmit={handleSubmit} noValidate>
            <h2 className="text-[#d87d4a] font-semibold mb-4">
              BILLING DETAILS
            </h2>

            {[
              { id: "name", label: "Name", placeholder: "Paul Prosper Lawer" },
              {
                id: "email",
                label: "Email Address",
                placeholder: "prospaul999@gmail.com",
              },
              { id: "phone", label: "Phone Number", placeholder: "0594760444" },
            ].map(({ id, label, placeholder }) => (
              <div className="mb-6" key={id}>
                <label
                  htmlFor={id}
                  className={`block mb-1 font-semibold ${
                    errors[id] ? "text-red-600" : ""
                  }`}
                >
                  {label}
                </label>
                {errors[id] && (
                  <p className="text-red-600 text-sm mb-1">{errors[id]}</p>
                )}
                <input
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  value={form[id]}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 focus:outline-none ${
                    errors[id] ? "border-red-600" : "border-gray-300"
                  }`}
                />
              </div>
            ))}

            <h2 className="text-[#d87d4a] font-semibold mb-4">SHIPPING INFO</h2>

            <div className="mb-6">
              <label
                htmlFor="address"
                className={`block mb-1 font-semibold ${
                  errors.address ? "text-red-600" : ""
                }`}
              >
                Your Address
              </label>
              {errors.address && (
                <p className="text-red-600 text-sm mb-1">{errors.address}</p>
              )}
              <input
                id="address"
                name="address"
                placeholder="EL-0099-0385"
                value={form.address}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none ${
                  errors.address ? "border-red-600" : "border-gray-300"
                }`}
              />
            </div>

            <div className="flex gap-4 mb-6">
              {[
                { id: "zip", placeholder: "GA123" },
                { id: "city", placeholder: "Accra" },
              ].map(({ id, placeholder }) => (
                <div key={id} className="flex-1">
                  <label
                    htmlFor={id}
                    className={`block mb-1 font-semibold ${
                      errors[id] ? "text-red-600" : ""
                    }`}
                  >
                    {id === "zip" ? "ZIP Code" : "City"}
                  </label>
                  {errors[id] && (
                    <p className="text-red-600 text-sm mb-1">{errors[id]}</p>
                  )}
                  <input
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 focus:outline-none ${
                      errors[id] ? "border-red-600" : "border-gray-300"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label
                htmlFor="country"
                className={`block mb-1 font-semibold ${
                  errors.country ? "text-red-600" : ""
                }`}
              >
                Country
              </label>
              {errors.country && (
                <p className="text-red-600 text-sm mb-1">{errors.country}</p>
              )}
              <input
                id="country"
                name="country"
                placeholder="Ghana"
                value={form.country}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:outline-none ${
                  errors.country ? "border-red-600" : "border-gray-300"
                }`}
              />
            </div>

            <h2 className="text-[#d87d4a] font-semibold mb-4">
              PAYMENT DETAILS
            </h2>

            <div className="mb-4">
              <p className="font-semibold mb-2">Payment Method</p>
              <label className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="momo"
                  checked={form.paymentMethod === "momo"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Electronic Cash
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={form.paymentMethod === "cod"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>

            {form.paymentMethod === "momo" ? (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="momoNumber"
                    className={`block mb-1 font-semibold ${
                      errors.momoNumber ? "text-red-600" : ""
                    }`}
                  >
                    Momo Number
                  </label>
                  {errors.momoNumber && (
                    <p className="text-red-600 text-sm mb-1">
                      {errors.momoNumber}
                    </p>
                  )}
                  <input
                    id="momoNumber"
                    name="momoNumber"
                    placeholder="0594760444"
                    value={form.momoNumber}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 focus:outline-none ${
                      errors.momoNumber ? "border-red-600" : "border-gray-300"
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="momoNetwork"
                    className={`block mb-1 font-semibold ${
                      errors.momoNetwork ? "text-red-600" : ""
                    }`}
                  >
                    Network
                  </label>
                  {errors.momoNetwork && (
                    <p className="text-red-600 text-sm mb-1">
                      {errors.momoNetwork}
                    </p>
                  )}
                  <select
                    id="momoNetwork"
                    name="momoNetwork"
                    value={form.momoNetwork}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 focus:outline-none ${
                      errors.momoNetwork ? "border-red-600" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select Network</option>
                    <option value="MTN">MTN</option>
                    <option value="TELECEL">TELECEL</option>
                    <option value="AIRTEL TIGO">AIRTEL TIGO</option>
                  </select>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={cod}
                  alt="Cash on Delivery"
                  className="w-20 h-20 object-contain"
                />
                <p className="text-sm text-gray-700">
                  Cash on delivery option enables you to pay in cash when our
                  ride arrives. Just make sure your address is correct so your
                  order reaches you safely.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="my-3 mb-7 w-full bg-[#d87d4a] text-white py-3 rounded hover:opacity-90 font-semibold"
            >
              Checkout
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
