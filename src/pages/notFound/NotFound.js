import React from 'react';
import { useNavigate} from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className='container notFound'>

            <div className="infos-error">

                <h1 className='titre'>404</h1>
                <h2 className='titre2'>
                    Oups! La page que {" "} 
                    <span>vous demandez n'existe pas.</span>
                </h2>
               
                <button onClick={() => navigate("/")}>
                    Retournez sur la page d'accueil
                </button>
              
            </div>
        </div>
    );
};

export default NotFound;