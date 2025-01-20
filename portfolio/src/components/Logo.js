import React from 'react';
import '../styles/components/logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">
            <img className="logoMD" src='./logoMD.png'  alt='logo margaux doisy'/>
            </Link>
        </div>
    );
};

export default Logo;
