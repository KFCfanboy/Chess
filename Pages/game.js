const board = [["R", "H", "B", "Q", "K", "B", "H", "R"], ["P", "P", "P", "P", "P", "P", "P", "P"], [" ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " "], [" ", " ", " ", " ", " ", " ", " ", " "], ["p", "p", "p", "p", "p", "p", "p", "p"], ["r", "h", "b", "q", "k", "b", "h", "r"]]


class Game {
  #turn = 0
  constructor(turn, board) {
    this.#turn = turn
    this.board = board
  }
  nextturn() { //Flips the turn from 0-White to 1-Black
    this.printBoard();
    this.#turn = (this.#turn+1) % 2;
  }
  printBoard() {
    let temp = "|";
    for (let n = 0; n < this.board.length; n++) {
        console.log("---------------------------------");
        for (let m = 0; m < this.board.length; m++) {
            temp+=" " + board[n][m] + " |";
        }
        console.log(temp);
        temp = "|";
    }
    console.log("---------------------------------");
  }
  startGame() { // Main gameloop
    let player1 = new WhitePlayer()
    let player2 = new BlackPlayer() 
    while (this.#gameEnded() == false) {
      console.log((this.#turn == 0 ? "White" : "Black") + " Enter your move (chess notation)")
      let entered = "b2 b4" //This is where the input from the frontend will go
      this.#move(entered)
      break
    }
  }
  get turn() {
    return this.#turn
  }
  #move(entered) { //Called whenever a move is entered
    console.log("move "+entered)
    const currMove = new moveValid(entered, this.#turn)
    if (currMove.validate()) {
      this.#makeMove(entered)
    }
  }
  #makeMove(move) {
    this.board[Number(move[4]-1)][move[3].charCodeAt(0)-97] = this.board[Number(move[1]-1)][move[0].charCodeAt(0)-97]
    this.board[Number(move[1]-1)][move[0].charCodeAt(0)-97] = " "
    this.printBoard()
  }

  #gameEnded() { //Condition to check if the game has ended (pieces reset)
    return false
  }
}

//Class to find the validity of the move
class moveValid {
  #move
  #turn
  constructor(m, t) {
    this.#move = m
    this.#turn = t 
  }
  validate() {
    //Bunch of time consuming maths and things here...
    return true //If Valid
  }
}

class Player {
  constructor() {
    var turn
    var pieces
  }
}

class WhitePlayer extends Player{
  constructor() {
    super()
    this.turn = 0
    this.pieces = ["p", "r", "h", "b", "q", "k"]
  }
}

class BlackPlayer extends Player {
  constructor() {
    super() 
    this.turn = 1
    this.pieces = ["P", "R", "H", "B", "Q", "K"]
  }
}


const game1 = new Game(0, board)
game1.startGame()
document.body.innerHTML += game1.board