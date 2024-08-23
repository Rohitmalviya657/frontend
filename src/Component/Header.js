import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header({ onLogout }) {
    return (
        <div className="header-container">
            <Link to="/profile" className="header-link">
                <small>Profile</small> </Link>

            <Link to="/" className="header-link">
                <small>Home</small>
            </Link>
            <Link to="/about" className="header-link">
                <small>About Us</small>
            </Link>
            <Link to="/contact" className="header-link">
                <small>Contact Us</small>
            </Link>
            <Link to="/login/signup" className="header-link">
                <small onClick={onLogout}>Logout</small>
            </Link>
        </div>
    );
}

export default Header;
