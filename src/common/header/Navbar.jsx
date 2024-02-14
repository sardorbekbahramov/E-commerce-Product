import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileSearch from "../../mobile/search/mobileSearch";

const Navber = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

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
      <header>
        <div className="container d-flex">
          <div className="categories d-flex">
            <span className="fa-solid fa-border-all"></span>
            <h4>
              {innerWidth > 767 && "Categories"}
              <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          {innerWidth < 769 && <MobileSearch />}
          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f-flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link className="default-home" to="/">
                  home
                </Link>
              </li>
              {/* <li>
                                <Link to ="/pages">pages</Link>
                            </li> */}
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              {/* <li>
                                <Link to ="/track">track my order</Link>
                            </li> */}
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-bth"></i>
              ) : (
                <i className="fa-solid fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navber;
