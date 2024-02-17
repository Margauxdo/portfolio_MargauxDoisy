import React from 'react';
import '../styles/components/naviguation.css';
import {Link} from'react-router-dom';

const Naviguation = () => {
    return (
        <div className='nav'>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/apropos">À propos</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </div>
    );
};

export default Naviguation;