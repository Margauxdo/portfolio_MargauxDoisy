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
   
            <div className='bloc-ul'>
               
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

                    <ul className='seo'>
                        <li><Wordpress/></li>
                        <li><Github/></li>
                        <li><GoogleAnalytics/></li>
                    </ul>
            </div>
            <div className='bloc-ul'>
   
                    <ul className='graf'>
                        <li><Illustrator/></li>
                        <li><Photoshop/></li>
                    </ul>
            </div>    
            
        </div>
    );
};

export default Competences;