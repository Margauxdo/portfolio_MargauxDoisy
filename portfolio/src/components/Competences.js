import React from 'react';
import'../styles/components/Competences.css';
import Node from './Node';
import Bootstraps from './Bootstraps';
import CSS from './CSS';
import Github from './Github';
import GoogleAnalytics from './GoogleAnalytics';
import Illustrator from './Illustrator';
import Javascript from './Javascript';
import Wordpress from './Wordpress';
import MongoDB from './MongoDB';
import Photoshop from './Photoshop';
import Reactjs from './Reactjs';

const Competences = () => {
    return (
        <div className='skills'>
            <h1>Mes compétences en développement</h1>
            <div className='bloc-ul'>
                <h2>Développement Back-end & Front-end</h2>
                    <ul className='dev'>
                        <li><CSS/></li>
                        <li><Reactjs/></li>
                        <li><Bootstraps/></li>
                        <li><Javascript/></li>
                        <li><Node/></li>
                        <li><MongoDB/></li>
                    </ul>
            </div>
            <div className='bloc-ul'>   
                <h2>CMS & SEO</h2>
                    <ul className='seo'>
                        <li><Wordpress/></li>
                        <li><Github/></li>
                        <li><GoogleAnalytics/></li>
                    </ul>
            </div>
            <div className='bloc-ul'>
                <h2>Logiciels graphiques</h2>
                    <ul className='graf'>
                        <li><Illustrator/></li>
                        <li><Photoshop/></li>
                    </ul>
            </div>    
            
        </div>
    );
};

export default Competences;