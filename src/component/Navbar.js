import React from 'react'
import Logo from './images/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar" id='Home'>
                <div className='comfort_wear'>
                    <img src={Logo} alt="logo" className='logo' />
                    <h3>Comfort</h3>
                    <h4 className='wear'>.wear</h4>
                </div>
                <ul class="nav-list">
                    <b><li><a href="#Home">Home</a></li></b>
                    <b><li><a href="#Shop">Shop</a></li></b>
                    <b><li><a href="#Product">Product</a></li></b>
                    <b><li><a href="#Contact">Contact Us</a></li></b>
                </ul>
                <span class="fa fa-search nav-btn"></span>
                <span class="fa fa-shopping-cart nav-btn"></span>
                <button className='btn-all'>Sign Up</button>
            </nav>
        </div>
    )
}

export default Navbar
