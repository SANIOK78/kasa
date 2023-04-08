import React from 'react';
import appsData  from '../../appsData.json';
import AppartCard from '../../components/apps/AppartCard';
import Banner from '../../components/banner/Banner';
import ImgBanner from './banner1.png';
import './Home.css';

const Home = () => {

    return (
        <div className='container'>
        
            <div className="txt-banner">
            
                <Banner img={ImgBanner} />

                <div className="titre-banner">
                    <h1>Chez vous, {" "}
                        <span>partous et ailleurs</span>
                    </h1>
                </div> 
          
            </div>
            
            <div className="home-items">
                {
                    appsData.map((item) => {
                        
                        return (                        
                            <AppartCard 
                                key={item.id} 
                                element={item}
                            />                                               
                        )
                    })
                }
            </div>
           
        </div>
    );
};

export default Home;