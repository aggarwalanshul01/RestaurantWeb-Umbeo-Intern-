import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className='navbar-text'>
                <div className='logo'><img className='logo_img' src='/img/logo.png' alt='logo'/></div>
                <ul className='navbar_ul'>
                    <li><a href="">HOME</a></li> 
                    <li><a href="">PAGES</a></li> 
                    <li><a href="">ABOUT</a></li> 
                    <li><a href="">SPECIAL</a></li> 
                    <li><a href="">MENU</a></li> 
                    <li><a href="">NEWS</a></li> 
                    <li><a href="">CONTACT</a></li>    
                    <div class="btn_area">
                        <a class="navbar_btn" href="">Reservation</a>
                    </div>
                </ul>           
            </div>
        </div>
    )
}

export default Navbar
