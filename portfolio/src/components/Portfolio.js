import React, { useState } from 'react';
import '../styles/components/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
                                    
                                    <div className='containSite'>
                                        <h2>{image.title}</h2>
                                        <div className="overlay">
                                            <span>{image.overlay}</span>
                                        </div>
                                        <p>{image.description}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='carousel-buttons'>
                    <button  onClick={prevSlide}><FontAwesomeIcon className="prev" icon={faChevronLeft} /></button>
                    <button onClick={nextSlide}><FontAwesomeIcon className="next" icon={faChevronRight} /></button>
                </div>
                <div className='carousel-dots'>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentIndex ? 'active' : ''}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const images = [
    {
        src: './kasa.png',
        alt: 'site kasa utilisation de React.js',
        width:'800px',
        link: 'https://github.com/Margauxdo/P7_Cr-ez_une_application_web_de_location_immobili-re_avec_React',
        title: 'Kasa',
        overlay: 'Github - React - HTMl - CSS',
        description: 'Kasa prévoit une refonte totale de son infrastructure, passant ainsi à une architecture entièrement basée sur JavaScript, avec Node.js côté back-end et React côté front-end.',
    },

    {
        src: './kanap.png',
        alt: 'site kanap utilisation Javascript',
        link: 'https://github.com/Margauxdo/P5_creer_un_site_dynamique_ecommerce_avec_javascript',
        title: 'Kanap',
        overlay: 'Github - Javascript - Node.js',
        description: 'Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.',
    },

    {
        src: './ohmyfood.png',
        alt: 'site ohmyfood utilisation HTML/CSS',
        link: 'https://github.com/Margauxdo/P3_Margaux',
        title: 'Oh my food',
        overlay: 'Github - HTML - CSS',
        description: "Concevoir un site 'mobile first' qui répertorie les menus des restaurants gastronomiques. En ajoutant aux fonctionnalités habituelles de réservation, les clients auront la possibilité de composer leur menu avant leur arrivée, permettant ainsi aux plats d'être prêts dès leur venue. Adieu les longues attentes au restaurant !",
    },

    {
        src: './ericdoisy.png',
        alt: "site Wordpress réalisé pour l'artiste peintre Eric Doisy",
        link: 'https://www.ericdoisyart.com/',
        title: 'Eric Doisy Art',
        overlay: 'Wordpress - SEO',
        description: "Conception d'un site vitrine mettant en avant les œuvres d'Eric Doisy et développement d'une plateforme e-commerce utilisant Wordpress."







    },

    {
        src: './fondation.png',
        alt: 'site Wordpress réalisé pour la Fondation des Hôpitaux de la Catho',
        link: 'https://fondation-hopitaux-catho.org/',
        title: 'La fondation des Hôpitaux de la Catho',
        overlay: 'Wordpress - SEO',
        description: "Développement d'un site vitrine Wordpress destiné à présenter les projets de la Fondation des Hôpitaux de la Catho, ainsi que ses établissements, tout en offrant la possibilité aux visiteurs d'y faire des dons "
    },

    {
        src: './rsu-fiuc.png',
        alt: 'site Wordpress réalisé pour la Fédération Internationale des Universités Catholique',
        link: 'https://www.rsu-fiuc.org/fr/310-2/',
        title: 'RSU Fiuc',
        overlay: 'Wordpress - SEO',
        description: "Site vitrine Wordpress destiné à la Responsabilité Sociale Universitaire (RSU) au sein de la FIUC qui a lancé un projet international emblématique visant à offrir aux établissements d'enseignement supérieur catholiques un cadre complet sur la Responsabilité Sociale Universitaire (RSU) ainsi qu'un outil d'évaluation novateur.",
    },

    // Ajoutez d'autres images avec leurs données ici
];

export default Portfolio;

