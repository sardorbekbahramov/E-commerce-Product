import React from "react";
import "../../App.css";
import "./logout.css";

export default function Logout() {
  return (
    <div className="user_logout">
      <div className="user_logout_grp">
        <p className="user_logout_grp_prg">Really you want to delete your account?</p>
        <div className="user_logout_grp_btn">
            <button className="log_btn">Yes</button>
            <button className="log_btn">No</button>
        </div>
      </div>
    </div>
  );
}
