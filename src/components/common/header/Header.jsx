import React from 'react'
import {Navbar} from '../../common';
import './Header.css';

const header = () => {
    return (
       <section className="header">
        <section className="header-top">
            <section className="header-top__logo">
                <a href="/" className="header-logo">LOGO</a>
            </section>

            <section className="header-top__navbar">
                <section className="header-top__navigation">
                    <Navbar/>
                </section>
                <hr className="header-top__seperator"/>
            </section>
            
        </section>
        
        <section className="header-bottom">
            <section className="header-bottom__phone">
                1234567890
            </section>

            <section className="header-bottom__email">
                mohit.t@ibirdsservices.com
            </section>
        </section>
       </section>
    )
}

export default header;
