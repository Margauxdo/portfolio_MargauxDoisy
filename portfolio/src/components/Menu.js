import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Menu.css';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            {/* Icône de menu hamburger */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navigation */}
            <div className={`naviguation ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/monHistoire">Mon histoire</Link></li>
                    <li><Link to="/cvonline">Mon parcours</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;
