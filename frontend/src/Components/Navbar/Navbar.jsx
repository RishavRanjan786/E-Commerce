import React, { useContext, useRef, useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from "../Assets/Frontend_Assets/nav_dropdown.png";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className="navbar">
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPIFY</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to="/E-Commerce">Shop</Link>{menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: "none" }} to="/E-Commerce/mens">Men</Link>{menu === "mens" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: "none" }} to="/E-Commerce/womens">Women</Link>{menu === "womens" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none" }} to="/E-Commerce/kids">Kids</Link>{menu === "kids" ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/E-Commerce/login"> <button>Login</button></Link>
                <Link to="/E-Commerce/cart"><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
