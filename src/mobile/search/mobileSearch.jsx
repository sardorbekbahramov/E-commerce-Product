import React from "react";
import "./mobileSearch.css"

export default function MobileSearch() {
  return (
    <div className="mobile_search">
      <input type="text" placeholder="Search and hit enter ..." />
      <i className="fa fa-search"></i>
    </div>
  );
}
