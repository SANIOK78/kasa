import React from 'react';
import './Footer.css';

const Footer = () => {

    return (

        <div className='footer'> 
        
            <img  
                src={process.env.PUBLIC_URL + `/images/logo2.png`} 
                alt="logo" 
            />
            <h1> &copy; 2023 Kasa. All rights reserved</h1>
                   
        </div>
    );
};

export default Footer;