import React from 'react';
import './Main.css';
import ImageSource from './Images/Portfolio-Logo.png'
class Main extends React.Component{

    render(){
        return(
            <main className="content">
                <img className="content__logo" src={ImageSource} alt="site logo"></img>
                <p className="content__text">
                    Hello there! I am an aspiring UI/UX developer looking to develop apps, games, and websites
                    that everyone can enjoy, but first. Would you like to play a game?<br/> It's the best way to see what
                    I can do. Now go click on the Game button at the top and get a retro surprise.<br/> Hope you enjoy!<br/>
                    If you want to jump right to my other work then click Project and have a look around.<br/> There is 
                    more to come. If you need to contact me feel free to use the link above.<br/> Let's work together!

                </p>
                <div className="content__images">
                    <img src="https://img.icons8.com/color/48/000000/adobe-xd.png" alt="Adobe XD"/>
                    <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5"/>
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3"/>
                    <img src="https://img.icons8.com/color/48/000000/javascript-logo-1.png" alt="Javascript"/>

                </div>
                <div>
                    <a href="https://icons8.com/icon/4VVL78edhbW9/adobe-xd" className="content__icons">Adobe XD icon by Icons8 </a>
                    <a href="https://icons8.com/icon/20909/html-5" className="content__icons">Html 5 icon by Icons8 </a>   
                    <a href="https://icons8.com/icon/21278/css3" className="content__icons">CSS3 icon by Icons8 </a>
                    <a href="https://icons8.com/icon/EAUyKy3IwmqM/javascript" className="content__icons">Javascript icon by Icons8</a>
                </div>


            </main>

        )
    }
}
export default Main;