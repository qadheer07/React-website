import React from 'react'
// import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="newsletter">
                <h4 className="newsletter-text">
                    Join our Newsletter for updates on our products and services
                </h4>
                <form>
                    <input type="email" name='email' className='email-input' placeholder='Type in your email' />
                    <Button className='btn-sub' buttonStyle='btn--outline'> Subscribe </Button>
                </form>
            </section>
            <h6 className='copyright'>Copyright © 2020 Gemelry Inc. All rights reserved.</h6>
            <div className="footer-links-wrapper">
                <div className="footer-link-items">
                    <a href='/'> About Us</a>
                    <a href='/'> Contact Us</a>
                    <a href='/'> Terms of Use</a>
                    <a href='/'>  Privacy{"\u00a0"}Policy</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
