import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png";
import women_banner from "./Components/Assets/Frontend_Assets/banner_women.png";
import kid_banner from "./Components/Assets/Frontend_Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/E-Commerce" element={<Shop />} />
          <Route path="/E-Commerce/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/E-Commerce/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/E-Commerce/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/E-Commerce/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/E-Commerce/cart" element={<Cart />} />
          <Route path="/E-Commerce/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
