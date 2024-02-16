import React from 'react';
import Logo from '../components/Logo';
import Naviguation from '../components/Naviguation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <div className='header'>
                <Logo/>
                <Naviguation/>
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