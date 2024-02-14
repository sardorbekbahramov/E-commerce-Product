import React, { useEffect, useState } from "react";
import "./user.css";
import "../../App.css";
import { CgProfile } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { VscListOrdered } from "react-icons/vsc";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { RiLogoutCircleFill } from "react-icons/ri";
import img from "./image/images.jpeg";
import UserProfile from "./userProfile";
import Order from "./order";
import Discount from "./discount";
import Logout from "./logout";

export default function User() {
  const [profile, setProfile] = useState(false);
  const [shop, setShop] = useState(false);
  const [setting, setSetting] = useState(false);
  const [order, setOrder] = useState(false);
  const [log, setLog] = useState(true);
  const [discount, setDiscount] = useState(false);
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
  console.log(setting);

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

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="user_nav">
      <div className="in_nav">
        <img src={img} alt="user image" className="user_img boxShadow" />
        <ul className="nav_ul">
          <li
            className={profile ? "nav_ul_li active" : "nav_ul_li"}
            onClick={() => {
              setProfile(true);
              setSetting(false);
              setShop(false);
              setOrder(false);
              setLog(false);
              setDiscount(false);
            }}
          >
            <span className="spn">
              <CgProfile /> {innerWidth>1024&&"Profile"}
            </span>
          </li>
          <li
            className={shop ? "nav_ul_li active" : "nav_ul_li"}
            onClick={() => {
              setProfile(false);
              setSetting(false);
              setShop(true);
              setOrder(false);
              setLog(false);
              setDiscount(false);
            }}
          >
            <span className="spn">
              <FaBagShopping /> {innerWidth>1024&&"My Shop"}
            </span>
          </li>
          <li
            className={order ? "nav_ul_li active" : "nav_ul_li"}
            onClick={() => {
              setProfile(false);
              setSetting(false);
              setShop(false);
              setOrder(true);
              setLog(false);
              setDiscount(false);
            }}
          >
            <span className="spn">
              <VscListOrdered /> {innerWidth>1024&&"My Orders"}
            </span>
          </li>
          <li
            className={discount ? "nav_ul_li active" : "nav_ul_li"}
            onClick={() => {
              setProfile(false);
              setSetting(false);
              setShop(false);
              setOrder(false);
              setLog(false);
              setDiscount(true);
            }}
          >
            <span className="spn">
              <TbDiscountCheckFilled /> {innerWidth>1024&&"My Discounts"}
            </span>
          </li>
          <li
            className={log ? "nav_ul_li logout active" : "nav_ul_li logout"}
            onClick={() => {
              setProfile(false);
              setSetting(false);
              setShop(false);
              setOrder(false);
              setLog(true);
              setDiscount(false);
            }}
          >
            <span className="spn">
              <RiLogoutCircleFill /> {innerWidth>1024&&"Log out"}
            </span>
          </li>
        </ul>
      </div>
      <div className="user_body">
        <p className="user_roll">
          User: <span>John Doe </span>
        </p>
        <div className="user_body_part">
          {profile && <UserProfile />}
          {shop && (
            <div className="user_cart">
              <CartSelection
                backShopping={backShopping}
                addToCart={addToCart}
                cartItem={cartItem}
                decreaseQty={decreaseQty}
              />
            </div>
          )}
          {order && <Order addToCart={addToCart} />}
          {discount && <Discount />}
          {log && <Logout />}
        </div>
      </div>
    </div>
  );
}

const CartSelection = ({ cartItem, addToCart, backShopping, decreaseQty }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  return (
    <>
      <section className="user_cart_part">
        <div className="user_cont">
          <div className="user_cart_items boxShadow">
            {cartItem.length === 0 && (
              <h1 className="no_product">No Items, It's empty here ...</h1>
            )}

            {cartItem.map((item, index) => {
              const productQty = item.price * item.qty;
              return (
                <div key={index} className="cart-list product d-flex">
                  <div className="img">
                    <img src={item.cover} alt="flashPic" />
                  </div>

                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                    </h4>
                    <span>${productQty}.00</span>
                  </div>

                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d-flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="incCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="user_cart_total">
            <h2>Cart Summary</h2>
            <div className="d-flex">
              <h4>Total Price: </h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
        <div className="cnt">
          <button className="back-shopping btn-primary" onClick={backShopping}>
            Back to shopping
          </button>
        </div>
      </section>
    </>
  );
};
