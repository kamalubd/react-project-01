import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div><p><img src={logo} alt="" /></p></div>
            <div className='nav-items'>
            <a href="http://">Order</a>
            <a href="http://">Order Review</a>
            <a href="http://">Manage Inventory</a>
            <a href="http://">Login</a>
            </div>

        </div>
    );
};

export default Header;