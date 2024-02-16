import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/PictoLinkedin.css';

const PictoLinkedin = () => {
    return (
        <div className='pictoLinkedin'>
            <Link to="https://www.linkedin.com/in/margaux-doisy-089a90b8/"  target="_blank" rel="noopener noreferrer">
                <img src="./linkedin.png" alt="picto Linkedin" />
            </Link>
        </div>
    );
};

export default PictoLinkedin;