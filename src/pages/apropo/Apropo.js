import React from 'react';
import AppDescription from '../../components/appDescription/AppDescription';
import Banner from '../../components/banner/Banner';
import ImgBaner2 from './banner.png';
import './Apropo.css';

const Apropo = () => {
    const txtFiabilite = `Les annonces postées sur Kasa garantissent une fiabilité
        totale. Les photos sont conformes aux logements et toutes les informations 
        sont régulièrement vérifiées par nos équipes.`;
    const txtRespect = `La bienveillance fait partie des valeurs fondamentales de 
        Kasa. Tout comportement discriminatoire ou de perturbation de voisinage 
        entrainera une exclusion de notre plateforme.`;
    const txtService = `Nos équipes se tiennent à votre disposition pour fournir
        une expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question. `  ; 
    const txtSecurite = `La sécurité est la priorité de Kasa. Aussi bien pour nos
        hôtes que pour les voyageurs, chaque logement correspond aux critères de 
        sécurité établis par nos services. En laissant une note aussi bien à l'hôte
        qu'au locataire, cela permet à nos équipes de vérifier que les standards
        sont bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes`;  

    return (
        <div className='container info'>

            <div className="img-banner">
                <Banner img={ImgBaner2} />
            </div>
            
            <div className="about-box">
                <AppDescription title="Fiabilité" content={txtFiabilite } />    
                <AppDescription title="Respect" content={txtRespect } />    
                <AppDescription title="Service" content={txtService } />    
                <AppDescription title="Sécurité" content={txtSecurite } />    

            </div>
        </div>
    );
};

export default Apropo;