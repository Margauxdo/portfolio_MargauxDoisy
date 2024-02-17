import React from 'react';
import Logo from '../components/Logo';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Apropos from '../components/Apropos';
import Competences from '../components/Competences';
import Portfolio from '../components/Portfolio';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <Logo/>
                <Naviguation/>
            </div>
            <div className='homepage'> 

            </div>
            <div className='techno'> 
                <Competences/>
            </div>
            <div className='about'> 
                <Apropos/>
            </div>
            <div className='portfolio'> 
                <Portfolio/>
            </div>

            <div id="contact">
                <Contact/>
            </div>

            <div className='footer'>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;