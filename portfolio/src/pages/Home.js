import React from 'react';
import ImgBW from '../components/ImgBW';
import AnimationText from '../components/AnimationText';
import '../styles/pages/Home.css';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

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
                </div>
                <div className='headerimg'>
                <ImgBW/>
                </div>
                

                

            </div>
        </div>
        
    );
};

export default Home;