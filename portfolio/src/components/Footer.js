import React from 'react';
import '../styles/components/Footer.css';
import Logo from './Logo';

const Footer = () => {
    return (
        <div className='footerBack'>
            <div className='logofooter'>
                <Logo/>
            </div>
            <div className='textfooter'>
                <a href='/'> Télécharger mon CV</a>
                <ul className='listReseaux'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;