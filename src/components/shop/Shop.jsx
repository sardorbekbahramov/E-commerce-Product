import React from 'react';
import Catg from './Catg';
import "./shopStyle.css";
import ShopCart from './ShopCart';
import logoNew from "../newArrivals/arrivalImages/logo.png"

const Shop = ( {shopItems, addToCart} ) => {
    return (
        <>
            <section className="shop background">
                <div className="container d-flex">
                    <Catg/>

                    <div className="contentWidth">
                        <div className="heading d-flex shop-heading">
                            <div className="heading-left row f-flex shop-header">
                            <img src={logoNew} alt="arrivalImage" />
                                <h2>Mobile Accessories</h2>
                            </div>

                            <div className="heading-right row">
                                <span>View all</span>
                                <i className="fa fa-caret-right"></i>
                            </div>
                        </div>

                        <div className="product-content grid1">
                            <ShopCart shopItems={shopItems} addToCart={addToCart} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shop;
