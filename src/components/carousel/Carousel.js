import React, {useState} from 'react';
import './Carousel.css';

// récup props envoyé depuis "AppPage.js"
const Carousel = ({pictures}) => {
    // gestion affichage images carousel
    const [currentImg, setCurrentImg] = useState(0);
  
    const getClassName = (i) => {
        if(i === currentImg) return "show";
        return "" ;
    }
    
    const handleNext = () => {
        setCurrentImg((currentImg + 1) % pictures.length);
    }

    const handlePrev = () => {
        const newCurrentImg = currentImg - 1;
        if(newCurrentImg < 0) {
            setCurrentImg(pictures.length - 1);
            return;
        }
        setCurrentImg(currentImg - 1);
    }

    // Afficher boutons-fleches seulement si on a plusieurs images
    const showBtns = () => {

        if(pictures && pictures.length > 1) {
            return (
                <div className="btns">
                    <button className="prev" onClick={handlePrev}  >
                        <span className="fas fa-chevron-left"></span>
                    </button>
                    <button className='next' onClick={handleNext} >
                        <span className="fas fa-chevron-right"></span>
                    </button>                     
                    <span className='compteur'>
                        {currentImg + 1 } / {pictures.length}
                    </span>                  
                </div>
            );
        }
    }

    return (
        <div className="container">
        
            <div className='carousel'>
            
                { pictures.map((el, i) => {
                    return  <img className={getClassName(i)}
                                key={el}
                                src={el} 
                                alt="Chambre d'appartement"                    
                            />                   
                }) } 
                
                { showBtns() }
              
            </div>
        </div>      
    );
};

export default Carousel;