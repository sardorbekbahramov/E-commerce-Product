import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Tdata from "./Tdata";
import "./topcart.css";

const TopCart = () => {
  const [mb, setMb] = useState(1);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setMb((prevMb) => {
      if (innerWidth > 1024) {
        return 3;
      } else if (innerWidth <= 1024 && innerWidth > 700) {
        return 2;
      } else if (innerWidth > 500 && innerWidth <= 700) {
        return 1;
      } else {
        return 1;
      }
    });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: mb,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className="topCate product" key={index}>
                <div className="nametop d-flex">
                  <span className="tleft">{value.para}</span>
                  <span className="tright">{value.desc}</span>
                </div>

                <div className="img">
                  <img src={value.cover} alt="topcartImage" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
