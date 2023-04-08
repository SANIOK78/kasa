import React from 'react';
import "./Banner.css";

const Banner = ({ img }) => {

    return (
        <div className='container banner'>

            <img src={img} alt="Paysage" />
           
        </div>
    );
};

export default Banner;