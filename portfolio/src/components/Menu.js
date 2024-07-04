import React from 'react';
import '../components/Apropos';
import { Link } from 'react-router-dom';
import '../styles/components/Menu.css';

const Menu = () => {
    return (
        <div className='naviguation'>
            <ul>
            
                <li>Projets</li>
                <li><Link to="/monHistoire">Mon histoire</Link></li>
                <li><Link to="/cvonline"> Mon parcours</Link></li>
                <li><Link to="/contact">Contact </Link></li>
                
            </ul>
        </div>
    );
};

export default Menu;