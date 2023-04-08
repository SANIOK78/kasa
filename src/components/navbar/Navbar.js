import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (

        <nav className='container nav'>
            <Link to="/" >
                <img 
                src={process.env.PUBLIC_URL + `/images/logo.png`} 
                alt="logo"                        
                />
            </Link>

            <div className='nav-items'>

                <NavLink to="/">
                    <h3>Accueil</h3>
                </NavLink>

                <NavLink to="/about">
                    <h3>A Propos</h3>                    
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;