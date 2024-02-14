import React, { useState } from "react";
import "./App.css";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./common/cart/CartSelection";
import Sdata from "./components/shop/Sdata";
import Footer from "./common/footer/FooterPage";
import Contact from "./pages/Contact";
import UserAccount from "./pages/UserAccount";
import Vendor from "./components/vendorAccount/vendor";

function App() {
  // fetch data from database 'Data.js'
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const backShopping = () => {
    return true;
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
                backShopping={backShopping}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<UserAccount />} />
          <Route path="/vendor" element={<Vendor/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
