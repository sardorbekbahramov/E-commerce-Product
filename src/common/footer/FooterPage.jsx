import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2 med">
          <div className="box  width1">
            <h1>Bonik</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur vitae ab reprehenderit
              adipisicing elit. Corporis vitae ab reprehenderit, reiciendis
              magni.
            </p>

            <div className="icon d-flex">
              <div className="img d-flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d-flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box box_one width2">
            <h2>About Us</h2>
            <ul>
              <li></li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box box_one width2">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box box_one width2">
            <h2>Contact Us</h2>
            <ul>
              <li>70 Washington Square, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
