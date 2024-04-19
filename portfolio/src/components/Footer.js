import React from 'react';
import '../styles/components/Footer.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Github from './Github';
import Linkedin from './Linkedin';

const Footer = () => {
    return (
        <div className='footerBack'>
            <div className='logofooter'>
                <Logo/>
            </div>
            <div className='textfooter'>
            <Link to="/cvonline">
                    <p>Accédez à mon CV en ligne</p>
                </Link>
                <ul className='listReseaux'>
                    <li><Github/></li>
                    <li><Linkedin/></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;