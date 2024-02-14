import React from 'react';
import logoDisc from "./discountImage/gift.png"
import Dcard from './Dcard';

const Discount = () => {
    return (
        <>
            <section className="newarrivals background">
                <div className="container">
                    <div className="heading d-flex">
                        <div className="heading-left row f-flex">
                            <img src={logoDisc} alt="discountImage" />
                            <h2>Big Discounts</h2>
                        </div>

                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <Dcard/>
                </div>
            </section>
        </>
    );
}

export default Discount;
