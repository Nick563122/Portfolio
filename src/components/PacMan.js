import React from 'react';
import './JS/style.css';
import startGame from'./JS/script'



class PacMan extends React.Component{
    componentDidMount(){
    startGame()
    }
    render(){
        return(
            

            <main className="PacMan">
                <div className="refresh">May need to refresh browser</div>
                <div className="control">Left=A, Up=W, Right=D, Down=S</div>
                 
                <div className="grid"></div>

                <h3>Score: <span id="score">0</span></h3>
               
            </main>
            
        )
    }
}
export default PacMan;