import React from 'react';
import '../styles/components/ProjetsWeb.css';

const ProjetsWeb = () => {
    const projets = [
        {
            title: "Portfolio",
            imgSrc: "/ecran-portfolio.png",
            languages: ["React.js", "CSS"],
            link: "https://github.com/Margauxdo/portfolio_MargauxDoisy.git",
        },

        {
            title: "Freelance : Site vitrine Eric Doisy Art",

            languages: ["Vue.js", "CSS"],
            link: "https://www.ericdoisyart.com/",
        },
        {
            title: "Freelance : Site vitrine Elizen massages",
            imgSrc: "/elizen-massages.png",
            languages: ["React.js", "CSS"],
            link: "https://elizen-massages.fr/",
        },
        {
            title: "Freelance : Creation d'une base de donnée",
            imgSrc: "/bdd.png",
            languages: ["Spring", "PostgreSQL", "PgAdmin", "Thymeleaf"],
            link: "https://github.com/Margauxdo/buncker_TS.git",
        },
        {
            title: "Projet d'école : Créez une application web de location immobilière",
            imgSrc: "/kasa-img.png",
            languages: ["React.js", "CSS"],
            link: "https://github.com/Margauxdo/Creez_une_application_web_de_location_immobiliere_avec_React",
        },
        {
            title: "Projet d'école : Développer un site mobile first OhMyFood",
            imgSrc: "/ohmyfood.png",
            languages: ["HTML", "CSS"],
            link: "https://github.com/Margauxdo/OhMyFood_pages_Html_CSS",
        },
        {
            title: "Projet d'école : Construisez une API sécurisée",

            languages: ["JavaScript", "CSS"],
            link: "https://github.com/Margauxdo/Construire_API_Sitegastronomiques.git",
        },
        {
            title: "Projet d'école : Kanap",
            imgSrc: "/kanap.png",
            languages: ["JavaScript"],
            link: "https://github.com/Margauxdo/Creer_un_site_dynamique_ecommerce_avec_javascript",
        },
        {
            title: "Alternance : Site vitrine FIUC",
            imgSrc: "/fiuc.png",
            languages: ["WordPress", "SEO"],
            link: "https://www.rsu-fiuc.org/fr/310-2/",
        },
    ];

    return (
        <div className="containProjet">
            <div className="projets">
                <div className="annotationtitre">
                    <div className="tirettitre"></div>
                    <div className="pointtitre"></div>
                    <div className="annotation">
                        <h4>Portfolio</h4>
                    </div>
                </div>
                <div className='titreh2'>
                    <h2>Mes projets  </h2>
                </div>
                <div className="main-projet">
                    {projets.map((projet, index) => (
                        <a
                            key={index}
                            href={projet.link}
                            className="bloc-projet"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="imgProjet">
                                {projet.imgSrc ? (
                                    <img src={projet.imgSrc} alt={projet.title} />
                                ) : (
                                    <div style={{ height: "100%", backgroundColor: "#ccc" }}>Image indisponible</div>
                                )}
                            </div>
                            <div className="text-contain">
                                <h4>{projet.title}</h4>
                                <div className="list-language">
                                    <ul>
                                        {projet.languages.map((lang, i) => (
                                            <li key={i}>{lang}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjetsWeb;
