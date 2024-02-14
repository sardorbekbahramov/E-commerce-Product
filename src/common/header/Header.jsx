import React from "react";
import './Header.css'
import Head from "./Head";
import Search from "./Search";
import Navber from "./Navbar";

 const Header = ({cartItem}) => {
    return (
        <div>
            <Head/>
            <Search cartItem={cartItem} />
            <Navber/>
        </div>
    )
 }
 export default Header;