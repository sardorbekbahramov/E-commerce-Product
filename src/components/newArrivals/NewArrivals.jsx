import React from 'react';
import logoNew from "./arrivalImages/logo.png"
import CartArrival from './CartArrival';

const NewArrivals = () => {
    return (
        <>
            <section className="newarrivals background">
                <div className="container">
                    <div className="heading d-flex">
                        <div className="heading-left row f-flex">
                            <img src={logoNew} alt="arrivalImage" />
                            <h2>New Arrivals</h2>
                        </div>

                        <div className="heading-right row">
                            <span>View all</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>
                    <CartArrival/>
                </div>
            </section>
        </>
    );
}

export default NewArrivals;
