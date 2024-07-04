import React from 'react';
import '../styles/pages/CVonline.css';
import { Link } from 'react-router-dom';


import Logo from '../components/Logo';
import Menu from '../components/Menu';
import ImgCv from '../components/ImgCv';



const CVonline = () => {
    

    return (
        <div className='mainCV'>

            <div className="progressBar"></div>
            <Logo/>
            <Menu/>

            
            <div className='containAPropos'>
                <div className='imageSection'>
                    <div className='headerHistory'>
                        <ImgCv/>
                    </div>
                </div>
                <div className='textSection'>
                    <div className='mainHistory'>
                        
                        <div className='presentation'>
                    
                            <div className='containTitle'>
                                <h2>Margaux Doisy</h2>
                            </div> 
                            <h3>Développeuse Frontend junior </h3>
                                <p>
                                    Passionnée par le développement web et déterminée à me perfectionner dans ce domaine,
                                    je suis animée par le désir d'apporter mes compétences et mon expertise au
                                    sein d'une entreprise.  
                                    Ayant effectué un virement à 360 degrés pour
                                    devenir Développeuse web, mon objectif est de 
                                    concevoir des solutions digitales sur mesure,
                                    parfaitement adaptées aux besoins des clients.
                                    Mon engagement et ma volonté d'apprendre sont
                                    mes meilleurs atouts pour relever les défis à
                                    venir.
                                </p>
                        </div>
                        <div className='formation'>
                    
                            <div className='containTitle'>
                                <h2>Formations</h2>

                            </div> 
                    <h4>Fev 2024 - janv 2025 - Junia XP - Bachelor Développeur Informatique </h4>
                    <p> Gestion de projet et compétences transverse, réseaux et travail collaboratif,
                        développement applicatif frontend et backend, administration et exploitation des données</p>
                    
                    <h4>2023 - ENI - Formation POEC JAVA EE </h4>
                    <p>  Développer dans l'environnement JAVA / JAVA EE et 
                        mettre en œuvre les méthodes et outils</p>
                    <h4>sept 2021 - Oct 2023 - OpenClassrooms - Développeur Web </h4>
                    <p>Certification de niveau 5 “Développeur web” (RNCP).
                        Formation initiant à la création, l’animation,
                         l’interaction et la conception de sites web
                          à l’aide d’HTML, CSS et JavaScript, React.js, Node.js...</p>
                    <h4>Mai 2020 - Juil 2021 - Esecad - Webdesigner</h4>
                    <p>Concevoir le design d’interfaces web (Phototoshop, Illustrator )
                    et création de sites web ( HTML - CSS - Wordpress)</p>

                </div>
                <div className='projets'>
                <div className='containTitle'>
<h2>Expériences et projets</h2>

    </div> 
                    <h4> Portfolio personnel :    <Link to="https://github.com/Margauxdo/portfolio_MargauxDoisy" >Github</Link></h4>
                    <p>Site présentant une partie de mes réalisations </p>
                    <h4> Kasa :   <Link to="https://github.com/Margauxdo/P7_Cr-ez_une_application_web_de_location_immobili-re_avec_React" >Github</Link></h4>
                    <p>Création d’une application web de location immobilière avec React.js</p>
                    <h4>Piiquante :    <Link to="https://github.com/Margauxdo/P6_construire_API_Sitegastronomiques" >Github</Link></h4>
                    <p>Construire une API sécurisée pour une application 
                        d’avis gastronomiques en utilisant Node.js </p>
                    <h4>Kanap :    <Link to="https://github.com/Margauxdo/P5_creer_un_site_dynamique_ecommerce_avec_javascript" >Github</Link></h4>
                    <p>Construire une plateforme e-commerce avec 
                        Javascript</p>
                    <h4> La Fondation des Hôpitaux de la Catho :    <Link to="https://fondation-hopitaux-catho.org/" >fondation-hopitaux-catho.org</Link></h4>
                    <p>Création d’un site avec Wordpress</p>
                    <h4> FIUC - Développeur web (alternance) :   <Link to="https://www.rsu-fiuc.org/fr/310-2/" >Responsabilité Sociale des Universités</Link></h4>
                    <p> Création d’identité visuelle, réalisation de sites web
                        ( Wordpress, HTML,CSS), mise en page et application de charte 
                        graphique</p>
                    <h4> SARL JA - Chargé SEO</h4>
                    <p> Création et gestion de sites web Wordpress en 
                        multisites et élaboration de stratégie netlinkings, découvrir 
                        MySQL</p>
                </div>
                <div className='competences'>
                <div className='containTitle'>
<h2>Mes compétences</h2>

    </div> 

                    <div className='containInfo'>
            <div className='listService'>
                <h4 >Front End & Back End</h4>
                <ul>


            </ul>
            </div>
            <div className='listUsers'>
            <h4>CMS & logiciels graphiques</h4>
            <ul>

            </ul>
            </div>
            </div>

                </div>
                <div className='qualites'>
                    
                <div className='containTitle'>
<h2>Mes qualités</h2>

    </div> 
                    <p>
                    Ma créativité, me permet d'explorer des
                     perspectives innovantes et d'apporter des solutions
                      originales aux défis rencontrés.
                    Autonome de nature, je sais prendre des initiatives
                     et gérer efficacement mes responsabilités, tout en
                      collaborant harmonieusement au sein d'une équipe 
                      pour atteindre nos objectifs communs. 
                      Ma curiosité me pousse à explorer 
                      de nouveaux horizons, à apprendre constamment
                       et à m'adapter aux évolutions du domaine.
                       Enfin, ma générosité se reflète dans ma 
                       volonté de partager mes connaissances,
                        d'aider mes collègues et de contribuer
                         au succès collectif. Ces qualités combinées 
                         font de moi une collaboratrice engagée et 
                         polyvalente, prête à relever les défis avec
                          enthousiasme et détermination.
                    </p>

                </div>
               

                    </div>
                </div>
            </div>


        </div>
    );
};

export default CVonline;