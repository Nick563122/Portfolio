import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component{

    //props??
    //render: decides what is displayed on the page when this components is used
    render(){
        return(
            <nav className="navbar">
                {/* these links change the current route */}
                <button><NavLink to="/Main" className="navbar__link">Main</NavLink></button>
                <button><NavLink to="/contact-page" className="navbar__link">Contact</NavLink></button>
                <button><NavLink to="/Projects" className="navbar__link">Projects</NavLink></button>
                <button><NavLink to="/PacMan" className="navbar__link">Game Time</NavLink></button>
                
            </nav>
        )
    }
}
export default Navbar;