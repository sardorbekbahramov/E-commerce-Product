import React, { useEffect, useState } from 'react';
import imgFation from './images/cart1.png';
import electronic from './images/cart2.png';
import cars from './images/cart3.png';
import garden from './images/cart4.png';
import gift from './images/cart5.png';
import music from './images/cart6.png';
import pets from './images/cart7.png';
import health from './images/cart8.png';
import toys from './images/cart9.png';
import greceries from './images/cart10.png';
import books from './images/cart11.png';


const Categories = () => {

    const data = [
        {
            cateImg: imgFation,
            cateName: "Fashion",
        },
        {
            cateImg: electronic,
            cateName: "Electronics",
        },
        {
            cateImg: cars,
            cateName: "Cars",
        },
        {
            cateImg: garden,
            cateName: "home & garden",
        },
        {
            cateImg: gift,
            cateName: "gifts",
        },
        {
            cateImg: music,
            cateName: "music",
        },
        {
            cateImg: health,
            cateName: "health & beauty",
        },
        {
            cateImg: pets,
            cateName: "pets",
        },
        {
            cateImg: toys,
            cateName: "baby toys",
        },
        {
            cateImg: greceries,
            cateName: "greceries",
        },
        {
            cateImg: books,
            cateName: "books",
        },

    ];
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
        <>
            <div className="category">
                {data.map((value, index)=> {
                        return(
                            <div className="box f-flex" key={index}>
                                <img src={value.cateImg} alt="picFation" />
                                {innerWidth>1024&&<span>{value.cateName}</span> }
                            </div>
                        )
                    })}
            </div>
        </>
    );
}

export default Categories;
