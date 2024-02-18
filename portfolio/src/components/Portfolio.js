import React, { useState } from 'react';
import '../styles/components/Portfolio.css';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className='portfolioMe'>
            <h1>Mon portfolio</h1>

            <div className='portfolioContent'>
                <ul className='fullstack'>
                    {images.map((image, index) => (
                        <li key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                            <a href={image.link} target='_blank' rel='noopener noreferrer'>
                                <div className="image-container">
                                    <img src={image.src} alt={image.alt} />
                                    <div className="overlay">
                                        <span>{image.overlay}</span>
                                    </div>
                                    <div className='containSite'>
                                        <h2>{image.title}</h2>
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='carousel-buttons'>
                    <button onClick={prevSlide}>Previous</button>
                    <button onClick={nextSlide}>Next</button>
                </div>
            </div>
        </div>
    );
};

const images = [
    {
        src: './p7-kasa.png',
        alt: 'site kasa utilisation de React.js',
        link: 'https://github.com/Margauxdo/P7_Cr-ez_une_application_web_de_location_immobili-re_avec_React',
        overlay: 'Github - React - HTMl - CSS',
        title: 'Kasa',
        description: '',
    },

    {
        src: './kanap-p5.png',
        alt: 'site kanap utilisation Javascript',
        link: 'https://github.com/Margauxdo/P5_creer_un_site_dynamique_ecommerce_avec_javascript',
        overlay: 'Github - Javascript - Node.js',
        title: 'Kanap',
        description: '',
    },

    {
        src: './p3-ohmyfood.png',
        alt: 'site ohmyfood utilisation HTML/CSS',
        link: 'https://github.com/Margauxdo/P3_Margaux',
        overlay: 'Github - HTML - CSS',
        title: 'Oh my food',
        description: '',
    },

    {
        src: './ericDoisy.png',
        alt: "site Wordpress réalisé pour l'artiste peintre Eric Doisy",
        link: 'https://www.ericdoisyart.com/',
        overlay: 'Wordpress - SEO',
        title: 'Eric Doisy Art',
        description: '',
    },

    {
        src: './fondationHopitauxCatho.png',
        alt: 'site Wordpress réalisé pour la Fondation des Hôpitaux de la Catho',
        link: 'https://fondation-hopitaux-catho.org/',
        overlay: 'Wordpress - SEO',
        title: 'La fondation des Hôpitaux de la Catho',
        description: '',
    },

    {
        src: './academic-risk-fiuc.png',
        alt: 'site Wordpress réalisé pour la Fédération Internationale des Universités Catholique',
        link: 'https://academic-risk-fiuc.org/',
        overlay: 'Wordpress - SEO',
        title: 'Academic Risk Fiuc',
        description: '',
    },

    // Ajoutez d'autres images avec leurs données ici
];

export default Portfolio;


