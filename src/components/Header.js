import React from 'react';
import '../App.css';

function Header() {
    return (
        <div className='banner'>
            <div className='banner__content'>
                <div className='container'>
                    <h3 className='csi-subtitle'>Hot & Spicy</h3>
                    <h2 className="csi-title">DELICIOUS FOOD</h2>
                    <div class="btn-area">
                        {/* <button type="button" class="csi-btn btn btn-outline-secondary">Secondary</button> */}
                        <a class="csi-btn" href="#csi-reservation">Book A Table</a>
                        <a class="csi-btn csi-btn-white" href="#csi-menu">Our Menu</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
