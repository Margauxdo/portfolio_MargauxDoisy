import React from 'react';
import '../styles/pages/CVonline.css';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import ImgCv from '../components/ImgCv';
import Footer from '../components/Footer';


const CVonline = () => {
    return (
        <div className="mainCV">
            {/* Navigation */}
            <div className="nav">
                <div className="logoheader">
                    <Logo />
                </div>
                <div className="menuheader">
                    <Menu />
                </div>
            </div>

            {/* Barre de progression */}
            <div className="progressBar"></div>

            {/* Contenu principal */}
            <div className="containAPropos">


                <div className="textSection">
                    <div className="mainHistory">

                        {/* Présentation */}
                        <div className="presentation">
                            <div className="containTitle">
                                <h2>Margaux Doisy</h2>
                            </div>
                            <h3>Développeuse Frontend junior</h3>
                            <p>
                                Passionnée par le développement web et déterminée à me perfectionner dans ce domaine,
                                je suis animée par le désir d'apporter mes compétences et mon expertise au sein d'une entreprise.
                                Ayant effectué un virement à 360 degrés pour devenir Développeuse web, mon objectif est de concevoir des
                                solutions digitales sur mesure, parfaitement adaptées aux besoins des clients. Mon engagement et ma
                                volonté d'apprendre sont mes meilleurs atouts pour relever les défis à venir.
                            </p>
                        </div>

                            <div className="bodyCV">
                        <div className="imageSection">
                           <div className="headerHistory">
                              <ImgCv />
                           </div>
                        </div>
                        <div className="textCV">

                        {/* Formations */}
                        <div className="formation">
                            <div className="containTitle">
                                <h2>Formations</h2>
                            </div>
                            <h4>Fév 2024 - Jan 2025 : Junia XP - Bachelor Développeur Informatique</h4>
                            <p>Gestion de projet, réseaux et travail collaboratif, développement frontend/backend, exploitation des données.</p>

                            <h4>2023 : ENI - Formation POEC JAVA EE</h4>
                            <p>Développer dans l'environnement JAVA / JAVA EE et utiliser les outils associés.</p>

                            <h4>Sept 2021 - Oct 2023 : OpenClassrooms - Développeur Web</h4>
                            <p>Certification de niveau 5. Formation sur HTML, CSS, JavaScript, React.js, Node.js, etc.</p>

                            <h4>Mai 2020 - Juil 2021 : Esecad - Webdesigner</h4>
                            <p>Conception graphique (Photoshop, Illustrator) et création de sites web (HTML, CSS, WordPress).</p>
                        </div>

                        {/* Projets */}
                        <div className="projets">
                            <div className="containTitle">
                                <h2>Expériences et projets</h2>
                            </div>
                            <h4>
                                Portfolio personnel :{' '}
                                <a href="https://github.com/Margauxdo/portfolio_MargauxDoisy" target="_blank"
                                   rel="noopener noreferrer">
                                    Voir sur Github
                                </a>
                            </h4>
                            <p>Site présentant une partie de mes réalisations.</p>

                            <h4>
                                Freelance : Site vitrine Eric Doisy Art :{' '}
                                <a href="https://www.ericdoisyart.com/" target="_blank" rel="noopener noreferrer">
                                    ericdoisyart.com
                                </a>
                            </h4>
                            <p>Création d'un site vitrine avec Vue.js et CSS.</p>

                            <h4>
                                Freelance : Site vitrine Elizen massages :{' '}
                                <a href="https://elizen-massages.fr/" target="_blank" rel="noopener noreferrer">
                                    elizen-massages.fr
                                </a>
                            </h4>
                            <p>Développement d'un site vitrine avec React.js et CSS.</p>

                            <h4>
                                Freelance : Création d'une base de données :{' '}
                                <a href="https://github.com/Margauxdo/buncker_TS" target="_blank"
                                   rel="noopener noreferrer">
                                    Voir sur Github
                                </a>
                            </h4>
                            <p>Conception d'une base de données avec Spring, PostgreSQL, PgAdmin et Thymeleaf.</p>

                            <h4>
                                Freelance : Site vitrine La Fondation des Hôpitaux de la Catho :{' '}
                                <a href="https://fondation-hopitaux-catho.org/" target="_blank"
                                   rel="noopener noreferrer">
                                    Fondation des Hôpitaux de la Catho
                                </a>
                            </h4>
                            <p>Création d'un site vitrine avec Wordpress</p>


                            <h4>
                                Projet d'école : OhMyFood :{' '}
                                <a href="https://github.com/Margauxdo/OhMyFood_pages_Html_CSS" target="_blank"
                                   rel="noopener noreferrer">
                                    Voir sur Github
                                </a>
                            </h4>
                            <p>Développement d'un site mobile-first avec HTML et CSS.</p>

                            <h4>
                                Alternance : Site vitrine FIUC :{' '}
                                <a href="https://www.rsu-fiuc.org/fr/310-2/" target="_blank" rel="noopener noreferrer">
                                    rsu-fiuc.org
                                </a>
                            </h4>
                            <p>Création d'un site vitrine avec WordPress et SEO.</p>
                        </div>

                        {/* Compétences */}
                        <div className="competences">
                            <div className="containTitle">
                                <h2>Mes compétences</h2>
                            </div>
                            <div className="containInfo">
                                <div className="listService">
                                    <h4>Front End & Back End</h4>
                                    <ul>
                                        <li>HTML5 / CSS3</li>
                                        <li>JavaScript , React.js, Vue.js</li>
                                        <li>Node.js</li>
                                        <li>MongoDB, PostgreSQL</li>
                                        <li>Spring, Java</li>
                                    </ul>
                                </div>
                                <div className="listUsers">
                                    <h4>CMS & Logiciels graphiques</h4>
                                    <ul>
                                        <li>WordPress</li>
                                        <li>Photoshop, Illustrator</li>
                                        <li>SEO</li>
                                        <li>Docker</li>
                                        <li>Git</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Qualités */}
                        <div className="qualites">
                            <div className="containTitle">
                                <h2>Mes qualités</h2>
                            </div>
                            <p>
                                Créative et autonome, je prends des initiatives tout en collaborant efficacement en équipe.
                                Curieuse, je m'adapte rapidement aux évolutions et aime partager mes connaissances pour atteindre des objectifs communs.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            </div>

            {/* Footer */}
                        <Footer />
        </div>


    );
};

export default CVonline;
