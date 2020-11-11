import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    })

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <i className="far fa-compass" />art 
                    </Link>
                    <div className="menu-icon" onClick ={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/plan" className="nav-links" onClick={closeMobileMenu}>
                            Book Your Trip
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/destinations" className="nav-links" onClick={closeMobileMenu}>
                            Destinations
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            About Alex
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/plan" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Start planning!
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Book now!</Button>}
            </nav>
        </>
    );
}

export default Navbar;
