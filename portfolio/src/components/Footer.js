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
                    <p>Télécharger mon cv</p>
                </Link>
                <ul className='listReseaux'>
                    <li><a href='https://github.com/Margauxdo'><Github/></a></li>
                    <li><a href='https://www.linkedin.com/in/margaux-doisy-089a90b8/'><Linkedin/></a></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;