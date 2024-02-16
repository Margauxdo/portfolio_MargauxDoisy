import React from 'react';
import Logo from './Logo';
import PictoLinkedin from './PictoLinkedin';
import PictoGithub from './PictoGithub';
import '../styles/components/Footer.css';



const Footer = () => {
    return (
        <div className='containFooter'>
            <div className='logoF'>
                <Logo/>
            </div>
            <div>
                <ul className='list-contact'>
                    <li><a href="#contact"> Contactez-moi</a></li>
                    <li><a href="./cv_MargauxDoisy.pdf" target="_blank" rel="noopener noreferrer" >Télécharger mon CV</a></li>
                </ul>
            </div>
            <div className='reseaux-sociaux'>
                <ul >
                <li><PictoLinkedin/></li>
                <li><PictoGithub/></li>

            </ul>
            </div>
        </div>
    );
};

export default Footer;