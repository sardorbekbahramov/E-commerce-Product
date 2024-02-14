import React, { useEffect, useState } from "react";
import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css";

const SlideCard = () => {
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      if (innerWidth > 768) {
        return <ul style={{ margin: "0px" }}>{dots}</ul>;
      } else {
        return <ul></ul>;
      }
    },
    prevArrow: null, // Remove prev button
    nextArrow: null, // Remove next button
  };

  return (
    <>
      <Slider {...settings}>
        {Sdata.map((item, index) => {
          return (
            <div
              className={innerWidth > 768 ? "box d-flex top" : "mobile_slider"}
              key={index}
            >
              {innerWidth <= 768 && (
                <div className="right">
                  <img
                    src={item.cover}
                    alt="pic"
                    style={
                      innerWidth < 768 && index === 2
                        ? { marginLeft: "-15px",width:"230px", height:"250px",objectFit:"cover" }
                        : {width:"200px", height:"250px",objectFit:"contain"}
                    }
                  />
                </div>
              )}
              <div className="left">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className="btn-primary">Visit Collection</button>
              </div>
              {innerWidth > 769 && (
                <div className="right">
                  <img src={item.cover} alt="pic" />
                </div>
              )}
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
