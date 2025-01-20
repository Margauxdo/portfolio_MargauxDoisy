import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Apropos.css';
import Logo from './Logo';



const Apropos = () => {
    return (
        <div className='AboutMe'>



<h3> " Je vous aide à concevoir un site web ou une application mobile, en recherchant des solutions digitales adaptés a votre besoin "</h3>
            <div className='portrait-margaux'>
       
            <div className='portrait-img zoom'>
                
                <img src="/presentationMargaux-fd.png" alt="margaux"/>
                
            </div>
            <div className='portrait-text'>
            
             <p>
                    Mon parcours, marqué par une soif de connaissances et une détermination sans faille, témoigne d'une aventure riche en découvertes 
                    et en défis.</p>
                    <p>Dès mes premiers pas dans le monde du webdesign, j'ai été captivée par l'art de créer des expériences en ligne uniques et captivantes. 
                    Pourtant, mon appétit pour l'apprentissage m'a poussée à explorer de nouveaux territoires. Intriguée par les mystères du référencement naturel (SEO),
                    j'ai plongé dans cette discipline complexe, afin de comprendre ses subtilités et ses implications.</p>
                    <p>Cette exploration m'a ouvert les portes du développement web, où chaque ligne de code devient une opportunité de construire et d'innover. 
                    Chez OpenClassrooms, j'ai trouvé un refuge pour cultiver ma passion et affiner mes compétences. La maîtrise de JavaScript et l'exploration de ses 
                    Framework ont été autant de défis stimulants qui ont enrichi mon parcours, je me suis spécialisée sur React.js</p>
                    <p>Animée par le désir de repousser mes limites, je me suis lancé dans une nouvelle aventure académique au sein de M2I Formation.
                    L'obtention de connaissances de développeuse informatique est pour moi une étape cruciale dans ma quête de perfectionnement et d'excellence.
                    Je suis déterminée à explorer le développement backend, afin d’y maîtriser les outils numériques de demain, notamment en apprenant Java, Spring et PostgreSQL</p>
                    <p>Cependant, ma quête ne saurait être complète sans une immersion totale dans le monde professionnel. 
                    C'est pourquoi je suis à la recherche d'une entreprise engagée, soucieuse de l'humain et de l'environnement, où je pourrai mettre en pratique 
                    mes compétences et contribuer à des projets porteurs de sens.</p>
                    <p>Mon parcours témoigne de ma passion pour la technologie et de ma détermination à repousser les frontières du possible. 
                    Je suis convaincue que chaque défi est une opportunité de croissance et que chaque étape est une invitation à l'exploration.
                    Je suis Margaux, et je suis prête à plonger au cœur de l'action, à relever de nouveaux défis et à façonner un avenir où la technologie et 
                    l'humanité se conjuguent pour créer un monde meilleur.

                    </p>

                    
            </div>
            </div>
            <Link to="/cvonline">
                    <button className='buttonCv'>Accédez à mon CV en ligne</button>
                </Link>
        </div>
    );
};

export default Apropos;
