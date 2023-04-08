import React from 'react';
import { Link } from 'react-router-dom';
import './AppartCard.css';

const AppartCard = ({ element }) => {   
    // recup depuis props, des propriétes qu'on 
    // veut utiliser pour l'affichage de ce composant 
    const {id, title, cover} = element;

    return (
        <div className='app-card'>
            <Link to={{pathname : `/logement/${ id }`}} > 

                <img src={cover} alt={title} />
                <div className="app-title">
                    <h1>{title}</h1>               
                </div>

            </Link>

        </div>
    );
};
export default AppartCard;