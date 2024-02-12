import React from 'react'
import './Header.css'

import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";


const Header = () => {
  
// const bars = document.querySelector('.fa-bars');
// const navItems = document.querySelector('.nav_items');
// const navLinks = document.querySelectorAll('.nav-link');

// function openMenu(){
//     navItems.style.transform = 'translateX(0%)'
// }

// function closeMenu(){
//     navItems.style.transform = 'translateX(-100%)'
// }

  return (
    <>
    <h1>header gear</h1>
        <nav className="nav_slider">
            
            <div className="logo">
                <h2>Logo</h2>
            </div>


            <div className="nav_items">
                <ul>
                    <li><a href="#" className="nav_link">Home</a></li>
                    <li><a href="#menu" className="nav_link">Menu</a></li>
                    <li><a href="#restaurant_info" className="nav_link">Contact</a></li>
                </ul>

                <div id="cart-info" className="cart-info">
                    <span className="cart-info__icon"><FaCartShopping className="fas fa-shopping-cart" /></span>
                    <p><span id="item-count">0</span> items - &#8358; <span className="item-total">0</span></p>
                </div>

                <FaTimes className="fas fa-times" />
            </div>
            
            <div className="barDiv">
                <FaBarsStaggered className="fas fa-bars bar" />
            </div>
        </nav>
    </>
  )
}

export default Header

