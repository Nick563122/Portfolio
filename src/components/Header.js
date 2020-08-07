import React from 'react';
import './Header.css';
import ImageSource from './Images/Portfolio-Logo.png'


class Header extends React.Component{

    //props??
    //render: decides what is displayed on the page when this components is used
    render(){
        return(
            <header className="header">
                <img className="header__logo" alt="Site Logo" src={ImageSource}/>
                <h2 className="header__title">Nick Lucero • Apps • Games • Coding</h2>
            </header>
        )
    }
}
export default Header;