import React from 'react';
import Ddata from './Ddata';


const Dcard = () => {

    return (
        <>
           <div className="content grid product">
                {Ddata.map((item, index)=> {
                    return(
                        <div className="box" key={index}>
                            <div className="img newimage">
                                <img src={item.cover} alt="dcardPic" />
                            </div>
                            <h4 className='newarrivalName'>{item.name}</h4>
                            <span className='newarrivalPrice'>{item.price}</span>
                        </div>
                    )
                })}
            </div> 
        </>
    );
}

export default Dcard;

