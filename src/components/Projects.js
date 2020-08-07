import React from 'react';
import './Projects.css';
import ImageSource from './Images/Insectopedia.png'
import ImageSource2 from './Images/tic-tac-toe.png'
import ImageSource3 from './Images/ToDo-list.png'
import ImageSource4 from './Images/Guess-the-Number.png'

class Projects extends React.Component{ 
    

    render(){
        return(
            <main className="content">
                <p className="content__header">
                    You came this far so I assume you want to see more. Look around
                    and see what I have worked on and watch as it grows as I gain more experience 
                    to level up my coding knowledge.
                </p>
                <div className="content__card">
                <img className="content__screen" alt="Insectopedia" src={ImageSource}/>
                <h4>Insectopedia</h4>
                <p className="content__projects">
                    This Insectopedia uses react to create a working
                    encyclopedia of insects. Information can be added and altered in the source code
                    and all the links are functional. Using CSS to add style and make the webpage 
                    more visually appealing.
                </p>
                </div>
                <div className="content__card">
                <img className="content__screen" alt="tic-tac-toe" src={ImageSource2}/>
                <h4>Tic-Tac-Toe</h4>
                <p className="content__projects">
                    A working tic-tac-toe game using Javascript to store the number of moves,
                    keep track of moves, and rollback to a previous move if the players wish to 
                    do so. CSS for style and some html to tie it all together.
                </p>
                </div>
                <div className="content__card">
                <img className="content__screen" alt="ToDo list" src={ImageSource3}/>
                <h4>ToDo List</h4>
                <p className="content__projects">
                    This to do list is entirely run by javascript with some CSS for style.
                    It is capable of storing any number of task with added functionality to
                    complete or remove a task with the click of a button.
                </p>
                </div>
                <div className="content__card">
                <img className="content__screen" alt="Guess the Number" src={ImageSource4}/>
                <h4>Number Guessing Name</h4>
                <p className="content__projects">
                    A simple guess the number game it generates
                    a random number between 1-100 and stores it. The player then inputs a 
                    guess. The game uses loops and logic to provide feedback
                    of "too high" or "to low" depending on the guess.
                </p>
                </div>
            </main>
        )
    }
}
export default Projects;