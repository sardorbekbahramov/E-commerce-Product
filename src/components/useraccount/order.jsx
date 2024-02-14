import React, { useState } from "react";
import second from "../flashDeals/Data";
import "../../App.css";
import "./order.css";

export default function Order({addToCart}) {
  const data = second.productItems;
  const [count, setCount] = useState(0);
    const increment = ()=> {
        setCount(count +1 );
    }
  return (
    <div className="user_product_order">
      {data.map((productItems, index) => (
        <div className="box" key={index}>
        <div className="product mtop">
            <div className="img">
                <span className="discount">{productItems.discount}% Off</span>
                <img src={productItems.cover} alt="pic" />
                <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
            </div>

            <div className="product-details">
                <h3>{productItems.name}</h3>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>

                <div className="price">
                    <h4>{productItems.price}.00</h4>

                    <button onClick={()=> addToCart(productItems)}>
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
      ))}
    </div>
  );
}
