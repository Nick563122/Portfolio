function startGame(){

document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,
    1,3,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,3,1,
    1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,
    1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,0,1,1,1,2,2,1,1,1,0,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,
    1,1,1,1,1,1,0,1,1,0,1,2,2,2,2,2,2,1,0,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,
    1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,
    1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,
    1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-dot
  // 4 - empty

  const squares = []

  //create and render board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      // layout for game
      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } 
      
      else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } 
      
      else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      } 
      
      else if (layout[i] === 3) {
        squares[i].classList.add('power-dot')
      }
    }
  }
  createBoard()


  //create pacman
  let pacmanCurrentIndex = 490
  squares[pacmanCurrentIndex].classList.add('pac-man')


  //move pacman
  function movePacman(e) {
    
    squares[pacmanCurrentIndex].classList.remove('pac-man')
    switch(e.keyCode) {
        case 65:
            if(
            pacmanCurrentIndex % width !== 0 &&
            !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair'))
            pacmanCurrentIndex -= 1
            
        
            if (squares[pacmanCurrentIndex -1] === squares[363]) {
            pacmanCurrentIndex = 391
            
        }
        break
      
        case 87:
            if(
            pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentIndex -width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')) 
            pacmanCurrentIndex -= width
        break
      
        case 68:
            if(pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair'))
            pacmanCurrentIndex += 1
        
            if (squares[pacmanCurrentIndex +1] === squares[392]) {
            pacmanCurrentIndex = 364
        }
        break
      
        case 83:
            if (pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair'))
            pacmanCurrentIndex += width
        break
    }
    squares[pacmanCurrentIndex].classList.add('pac-man')
    //funtions that will be needed later
    pacDotEater()
    powerDotEaten()
    checkForGameOver()
    checkForWin()
  }
  
  document.addEventListener('keyup', movePacman);
  
  
    

  // when pac-dot is eaten
  function pacDotEater() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
      score++
      scoreDisplay.innerHTML = score
      squares[pacmanCurrentIndex].classList.remove('pac-dot')
    }
  }

  //what happens when you eat a power-dot
  function powerDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-dot')) {
      score +=10
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      squares[pacmanCurrentIndex].classList.remove('power-dot')
    }
  }

  //set the ghost back to normal
  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }

  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }

  //store the ghosts
  
  const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500) 
    ]
    return ghosts.map(ghost => {
      squares[ghost.currentIndex].classList.add(ghost.className)
      squares[ghost.currentIndex].classList.add('ghost')
      
    

   //create ghosts
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    }) 

  //ghosts will move randomly
  moveGhost(ghost);
  })

  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
   

    ghost.timerId = setInterval(function() {
      let direction = directions[Math.floor(Math.random() * directions.length)]
      //determine if ghost can move
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          //remove the ghost
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          //move ghost into new space
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //if not ghost will look for a new direction to move 
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      //if the power dot is eaten this changes the ghsost
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      //if the ghost is and shares a space with pacman
      if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
    checkForGameOver()
    }, ghost.speed)
  }

  //check for a game over
  function checkForGameOver() {
    if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
      !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      scoreDisplay.innerHTML = ' GAME OVER'
    }
  }

  //check for a win
  function checkForWin() {
    if (score === 274) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', movePacman)
      scoreDisplay.innerHTML = ' WINNER!!!'
    }
  }
})
}

export default startGame;