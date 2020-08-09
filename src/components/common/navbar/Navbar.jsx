import React from 'react'
import {Link} from 'react-router-dom';

import './Navbar.css';
const navbar = () => {
    return (
        // <section className="navbar">
        //     <a href="/" className="navbar-item">Home</a>
        //     <a href="/about" className="navbar-item">About</a>
        //     <a href="/portfolio" className="navbar-item">Portfolio</a>
        //     <a href="/shop" className="navbar-item">Shop</a>
        //     <a href="/blog" className="navbar-item">Blog</a>
        //     <a href="/contact" className="navbar-item">Contact</a>
        // </section>

        <ul className="navbar">
            <Link to="/">
                <li className="navbar-item">Home</li>
            </Link>
            <Link to="/about">
                <li className="navbar-item">About</li>
            </Link>
            <Link to="/portfolio">
                <li className="navbar-item">Portfolio</li>
            </Link>
        </ul>
    )
}

export default navbar
