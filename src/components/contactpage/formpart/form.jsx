import React from "react";
import "./form.css";
import "../../../App.css";

export default function Form() {
  return (
    <div className="get_form">
      <div className="f_cont">
        <p className="f_ttl">Contact</p>
        <div className="f_grp">
          <div className="f_getInfo">
            <p className="f_p">Name:</p>
            <input type="text" placeholder="Enter your name..." className="f_input" />
            <p className="f_p">Phone Number:</p>
            <input type="text" placeholder="Phone Number..." className="f_input" />
            <p className="f_p">Email:</p>
            <input type="email" placeholder="Enter your email..." className="f_input" />
            <p className="f_p">Theme:</p>
            <input
              type="text"
              placeholder="Enter your theme of your question..."
              className="f_input"
            />
            <p className="f_p">Message:</p>
            <textarea placeholder="Enter your message..." className="f_input_textarea" />
            <button className="f_btn">Send</button>
          </div>
          {/* <div className="f_iframe">
            <iframe
              title="key"
              width="100%"
              height="450"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Manzilga+Toshkent+shahar+Yashnabod+tumani+Olmos+mahallasi+Yakkatol+3-tor+ko%E2%80%99chasi+38+uy&key=AIzaSyA-YgNEw2WDvbRixmD8lpNdwHo3qb-k-m0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
}
