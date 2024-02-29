import React from 'react';
import '../styles/pages/Erreur404.css';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import Footer from '../components/Footer';




const Erreur404 = () => {
    return (
        <div className="page-container">
            <div className="top-navigation">
                
            </div>


            
            <div className="progressBar"></div>
            <div className='header-erreur'>
                <Logo/>
            </div>
            
            <div className="content-erreur">
                


                <div className="imageErreur">
                    <img className='chiffre-r' src='./quatre.png' alt='quatre'/>
                   <Loader/>
                   <img className='chiffre-l' src='./quatre.png' alt='quatre'/>
                    
                    
                </div>
                
                <div className='text404'>
                    <h2>Oups...Nous avons cherché votre page partout !! </h2>
                    <p>Mais il y a peut être une chance de trouvez ce que vous chercher...</p>
                    <p><Link to="./">Retourner sur la page d'acceuil</Link></p>

                </div>
                
                
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    );
};

export default Erreur404;
