import React, {useState} from 'react';
import './AppDescription.css';

// recup des props envoye depuis composant parent
const AppDescription = ({ title, content }) => {
    
    // State qui va gerer l'affichage du contenu "description"
    const [visibleContent, setVisibleContent] = useState(false);
    const showContent = () => {
        setVisibleContent( !visibleContent )
    }

    return (
        <div className="container">
            <div className="description">

                <div className="titre-desc" >
                    <h3>{ title }</h3>                           
                    <span 
                        onClick={showContent} 
                        className={ visibleContent ? 
                            "fas fa-chevron-down" :
                            "fas fa-chevron-down rotate"
                        } 
                    ></span>                                                                
                </div>
                            
                <p className={ visibleContent ?
                    "txt__content" : "txt__content hidden" }
                >
                    {content}
                </p>
                                                                                    
            </div> 
        </div>
    );
};

export default AppDescription;