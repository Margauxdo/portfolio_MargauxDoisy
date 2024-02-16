import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/PictoGithub.css';

const PictoGithub = () => {
    return (
        <div className='pictoGithub'>
             <Link to="https://github.com/Margauxdo" target="_blank" rel="noopener noreferrer">
          <img src="./github.png" alt="picto Github" />
        </Link>
        </div>
    );
};

export default PictoGithub;