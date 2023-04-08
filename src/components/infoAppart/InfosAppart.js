import React from 'react';
// import appsData from '../data/appsData.json';
import './InfosAppart.css';

const InfosAppart = ({ logement }) => {

    return (
        <div className='container infos'>

            <div className="info-titre">
                <h1 className='titre-app'>{logement.title}</h1>
                <h4 className='local-app'>{logement.location}</h4>

                <div className="tags-app">
                    {   logement.tags.map((item) => {
                            return <div className="tag" key={item}>
                                    <h5>{item}</h5>
                                </div>                          
                        })
                    }
                </div>
            </div> 

            <div className="info-rating">
                <div className="rating-client">
                    <h4>{logement.host.name}</h4>
                    <img src={logement.host.picture} alt="Client" />
                </div> 

                <div className="rating">
                    {
                        [1, 2, 3, 4, 5].map((num) => {                                                              
                            return (
                                <span key={num}
                                    className={ logement.rating >= num ? 
                                        "fas fa-star red" : "fas fa-star"
                                    } 
                                ></span>                              
                            )                                                  
                        } ) 
                    }
                </div>   
            </div>         
        </div>
    );
};
export default InfosAppart;