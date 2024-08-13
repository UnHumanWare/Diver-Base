
import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="down-main-footer">
            <div className="main-footer-container">
                <p>&copy; 2024 Diving World. All rights reserved.</p>
                <div>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
};


