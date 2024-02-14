import React, { useState } from "react";
import "./myProduct.css";
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import Order from "../useraccount/order";

export default function MyProduct() {
  const [tog, setTog] = useState(false);

  const changeFalse = () => {
    setTog(false);
  };
  const changeTrue = () => {
    setTog(true);
  };
  return (
    <div className="vendor_product">
      {tog ? <AddProduct funkadd={changeFalse} /> : <AllProducts funck={changeTrue} />}
    </div>
  );
}

function AllProducts({ funck }) {
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
  return (
    <div className="vendor_products">
      <div className="vndprd_grp_btn">  
        <button className="vendor_btn" onClick={funck}>
          <FaPlus /> Add product
        </button>
      </div>
      <Order addToCart={addToCart} />
    </div>
  );
}

function AddProduct({ funkadd }) {
  return (
    <div className="vendor_addproduct">
      <div className="vndProduct_grp">
        <div className="vnd_grp">
          <p className="vnd_p">Name:</p>
          <div className="vnd_for_save">
            <input type="text" className="input" placeholder="Name..." />
          </div>
        </div>
        <div className="vnd_grp">
          <p className="vnd_p">Price:</p>
          <div className="vnd_for_save">
            <input type="text" className="input" placeholder="Price..." />
          </div>
        </div>
        <div className="vnd_grp">
          <p className="vnd_p">Discount:</p>
          <div className="vnd_for_save">
            <input type="text" className="input" placeholder="Discount..." />
          </div>
        </div>
        <div className="vnd_grp">
          <p className="vnd_p">Image:</p>
          <div className="vnd_for_save">
            <input
              type="file"
              className="input"
              placeholder="Enter your name"
            />
          </div>
        </div>
      </div>
      <div className="vendor_add_btn">
        <button className="vnd_add_btn" onClick={funkadd}>
          Save
        </button>
      </div>
    </div>
  );
}
