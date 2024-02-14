import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'

const CartSelection = ({ cartItem, addToCart, backShopping, decreaseQty }) => {
    const totalPrice = cartItem.reduce((price, item)=> price + item.qty * item.price, 0);

    return (
        <>
            <section className="cart-items">
                <div className="container d-flex ">
                    <div className="cart-details ">
                        {cartItem.length === 0 && <h1 className='no-items product'>No Items, It's empty here ...</h1>}

                        {cartItem.map((item, index)=> {
                            const productQty = item.price * item.qty;
                            return(
                                <div key={index} className="cart-list product d-flex">
                                    <div className="img">
                                        <img src={item.cover} alt="flashPic" />
                                    </div>

                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>${item.price}.00 * {item.qty}</h4>
                                        <span>${productQty}.00</span>
                                    </div>

                                    <div className="cart-items-function" >
                                        <div className="removeCart">
                                            <button className="removeCart">
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                        <div className="cartControl d-flex">
                                            <button className='incCart' onClick={()=> addToCart(item)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className='incCart' onClick={()=> decreaseQty(item)}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-item-price"></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total product">
                        <h2>Cart Summary</h2>
                        <div className="d-flex">
                            <h4>Total Price: </h4>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link to={'/'}><button className='back-shopping btn-primary' onClick={backShopping}>Back to shopping</button></Link>
                </div>
            </section>
        </>
    );
}

export default CartSelection;
