import React from 'react';
import '../styles/components/naviguation.css';
import {Link} from'react-router-dom';

const Naviguation = () => {
    return (
        <div className='nav'>
            <li><Link to="/">Accueil</Link></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#portfolio"> Portfolio</a></li>
            <li><a href="#contact"> Contact</a></li>
        </div>
    );
};

export default Naviguation;