import Navbar from "./website/Navbar";
import HomePage from "./website/HomePage";
import "./App.css";
import { useState } from "react";
import { data } from "./data/product-data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./website/Product";
import Cart from "./website/Cart";
import Checkout from "./website/Checkout";
import Footer from "./website/Footer";
import About from "./website/About";
import Contact from "./website/Contact";

/* mm */

function App() {
  const [product, setProduct] = useState(data);
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage setProduct={setProduct} product={product} />}
          />
          <Route
            path="/product"
            element={
              <Product product={product} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                checkout={checkout}
                setCheckout={setCheckout}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout checkout={checkout} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
