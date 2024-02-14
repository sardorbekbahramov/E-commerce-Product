import React, { useEffect, useState } from "react";
import logo from "../assets/images.png";
import { Link } from "react-router-dom";

const Search = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".search");
    search.classList.toggle("active", this.window.screenY > 100);
  });

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
      <section className="search">
        <div className="container c-flex">
          {innerWidth > 290 && (
            <div className="logo width">
              <img src={logo} alt="pic" />
            </div>
          )}

          {innerWidth > 767 && (
            <div className="search-box f-flex">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search and hit enter ..." />
              <span>All Categories</span>
            </div>
          )}

          <div className="icon f-flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;
