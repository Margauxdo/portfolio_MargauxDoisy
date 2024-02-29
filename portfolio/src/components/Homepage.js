import React from 'react';
import '../styles/components/Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='headerHome'>
            <h1>Margaux,                                              développeuse Front-End & passionée </h1>
            <img src="./margaux-illu.png" alt="portrait illustration"/>
            <div className='mainButton'>
                <ul>
                    <li>
                        <Link to="/cvonline">
                            <button className='CvOnline'>Accédez à mon CV en ligne</button>
                        </Link>
                    </li>
                    <li>
                    <button className="portfolioOnline"><a  href="#portfolio" > Portfolio</a></button>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default Homepage;