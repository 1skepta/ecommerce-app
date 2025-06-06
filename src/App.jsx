import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./utils/ScrollToTop";
import CategoryPage from "./pages/CategoryPage";
import { CartProvider } from "./utils/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
