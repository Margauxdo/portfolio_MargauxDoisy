import React from 'react';
import Logo from '../components/Logo';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Apropos from '../components/Apropos';
import Competences from '../components/Competences';
import Portfolio from '../components/Portfolio';
import Homepage from '../components/Homepage';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <Logo/>
                <Naviguation/>
            </div>
            <div className='homepage'> 
                <Homepage/>

            </div>
            <div id='techno'> 
                <Competences/>
            </div>
            <div id='about'> 
                <Apropos/>
            </div>
            <div id='portfolio'> 
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