import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import { useParams } from 'react-router-dom';
// Data_Appartement
import appsData from '../../appsData.json';
import InfosAppart from '../../components/infoAppart/InfosAppart';
import AppDescription from '../../components/appDescription/AppDescription';
import './AppPage.css';

const AppPage = () => {
  
    // récuperation de l'ID de l'appart cliké, envoyé dans URL 
    const { id } = useParams();
    
    // Récup de l'objet correspondant a ce ID, depuis "appsData.json"
    const appart = appsData.find(obj => obj.id === id);
    
    // if( !appart ) {
    //     return <Navigate to="/404" />;
    // }
    
    return (
        <div className='container'>

            <Carousel pictures={appart.pictures} />

            <InfosAppart logement={appart} />
            
            <div className="detail-app">
                <AppDescription 
                    title="Description" 
                    content={appart.description}                        
                />

                <AppDescription 
                    title="Èquipements" 
                    content={appart.equipments.map(el => 

                        <li key={el}>{el}</li>
                    )}                        
                />
            </div>            
        </div>
    );
};

export default AppPage;