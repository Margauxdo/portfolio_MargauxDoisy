import React from 'react';
import ImgBW from '../components/ImgBW';
import AnimationText from '../components/AnimationText';
import '../styles/pages/Home.css';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div>
            <div className='nav'>
                <div className='logoheader'>
                    <Logo/>
                </div>
                <div className='menuheader'>
                    <Menu/>

                </div>

            </div>
            <div className='header'>
                <div className='headerText'>
                    <div className='titre'>
                        <h1> Margaux Doisy</h1>
                        <h1> Je suis Développeuse web </h1>
                    </div>
                    <div className='animation'>

                        
                    </div>
                    <AnimationText/>
                    <div className='buttonHeader'>
                        <button className='cvOnline' href='./Cvonline.js' >Accéder à mon CV</button>
                        <button className='contactme'>Contactez-moi</button>
                    </div>
                </div>
                <div className='headerimg'>
                <ImgBW/>s
                </div>
                

                

            </div>
            <div className='bodyService'>
                <Services/>
            </div>

            <div className='monHistoire'>
            <div className='titre'>
                <div className='annotationtitre'>
                    <div className='tirettitre'></div>
                    <div className='pointtitre'></div>
                    <div className='annotation'>
                        <h4> Qui suis-je ?</h4>
                    </div>
                </div>
                <div className='titreh2'>
                    <h2>Mon histoire</h2>
                </div>
            </div>
            <div className='containHistory'>
                <div className='imgApropos'>
                    <img src='/margaux-illu.png' alt='portrait margaux'/>
                </div>
                <div className='textApropos'>
                    
                </div>
            </div>
            </div>
            <div className='contactMe'>
            <div className='titre'>
           
                    
           
            <div className='titreh2'>
                    <h2>Contactez-moi</h2>
            </div>
            </div>
                    <ContactForm/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
        
    );
};

export default Home;