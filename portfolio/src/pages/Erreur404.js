import React from 'react';
import Logo from '../components/Logo';
import Error404 from '../components/Error404';


const Erreur404 = () => {
    return (
        <div className='mainError'> 
            <Logo/>

            <div className='imgError'>

                <Error404/>
            </div>
           
        </div>
    );
};

export default Erreur404;
