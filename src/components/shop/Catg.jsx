import React, { useEffect, useState } from 'react';
import brandLogo1 from "./shopImages/cat-1.png";
import brandLogo2 from "./shopImages/cat-2.png";



const Catg = () => {
  const data = [
    {
      cateImg: brandLogo1,
      cateName: "Apple",
    },
    {
      cateImg: brandLogo2,
      cateName: "Samasung",
    },
    {
      cateImg: brandLogo1,
      cateName: "Oppo",
    },
    {
      cateImg: brandLogo2,
      cateName: "Vivo",
    },
    {
      cateImg: brandLogo1,
      cateName: "Redimi",
    },
    {
      cateImg: brandLogo2,
      cateName: "Sony",
    },
  ]

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
            <div className={innerWidth>1024?"category":"new1"}>
                <div className="chead d-flex">
                    <h1>Brands</h1>
                    <h1>Shops</h1>
                </div>
                {data.map((item, index)=> {
                        return(
                            <div className="box f-flex" key={index}>
                            <img src={item.cateImg} alt="brandLogo" />
                            {innerWidth>1024&&<span>{item.cateName}</span>}
                        </div>
                        )
                    })
                }

                <div className="box box2">
                    <button>
                        View All Brands
                    </button>
                </div>
            </div>
        </>
    );
}

export default Catg;
