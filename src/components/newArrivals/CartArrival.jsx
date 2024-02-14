import React from 'react';
import Ndata from './Ndata';
import "./newarrival.css"

const CartArrival = () => {
    return (
        <>
            <div className="content grid product">
                {Ndata.map((item, index)=> {
                    return(
                        <div className="box" key={index}>
                            <div className="img newimage">
                                <img src={item.cover} alt="arrivalPic" />
                            </div>
                            <h4 className='newarrivalName'>{item.name}</h4>
                            <span className='newarrivalPrice'>${item.price}</span>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default CartArrival;
