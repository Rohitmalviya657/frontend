import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function LandlordHeader({ onLogout }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`header-container ${menuOpen ? 'menu-open' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776;
            </div>
            <Link to="/profile" className="header-link">
                <small>Profile</small>
            </Link>
            <Link to="/" className="header-link">
                <small>Home</small>
            </Link>
            {/* <Link to="/about" className="header-link">
                <small>About Us</small>
            </Link> */}
            <Link to="/contact" className="header-link">
                <small>Contact Us</small>
            </Link>
            <Link to="/myrooms" className="header-link">
                <small>My Rooms</small>
            </Link>
            <Link to="/" className="header-link" onClick={onLogout}>
                <small>Logout</small>
            </Link>
        </div>
    );
}

export default LandlordHeader;
