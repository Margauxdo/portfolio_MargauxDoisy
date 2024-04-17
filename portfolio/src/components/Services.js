import React, { useState } from 'react';
import '../styles/components/Services.css';

const Services = () => {
    const [isWebdesignClicked, setIsWebdesignClicked] = useState(false);
    const [isDeveloppementClicked, setIsDeveloppementClicked] = useState(false);

    const handleWebdesignClick = () => {
        setIsWebdesignClicked(true);
        setTimeout(() => {
            setIsWebdesignClicked(false);
        }, 2000); // Réinitialisez le clic après 2 secondes
    };

    const handleDeveloppementClick = () => {
        setIsDeveloppementClicked(true);
        setTimeout(() => {
            setIsDeveloppementClicked(false);
        }, 2000); // Réinitialisez le clic après 2 secondes
    };

    return (
        <div className='service'>
            <div className='titre'>
                <div className='annotationtitre'>
                    <div className='tirettitre'></div>
                    <div className='pointtitre'></div>
                    <div className='annotation'>
                        <h4> Soft skills</h4>
                    </div>
                </div>
                <div className='titreh2'>
                    <h2>Mes compétences & mon savoir-faire</h2>
                </div>
            </div>
            <div className='containService'>
                <div className={`webdesign ${isWebdesignClicked ? 'clicked' : ''}`} onClick={handleWebdesignClick}>
                    <div className='imageService'>
                        <img className='pictoWebdesign' alt='picto Webdesigner' src='/pictoWebdesigner.png'/>
                    </div>
                    <div className='titleservice'>
                        <h3> Web Design</h3>
                    </div>
                </div>
                <div className={`developpement ${isDeveloppementClicked ? 'clicked' : ''}`} onClick={handleDeveloppementClick}>
                    <div className='imageService'>
                        <img className='pictoDeveloppement' alt='picto Developpement' src='/pictoDeveloppement.png'/>
                    </div>
                    <div className='titleservice'>
                        <h3> Développement web</h3>
                    </div>
                </div>
            </div>
            <div className='languagesInfo'></div>
        </div>
    );
};

export default Services;



