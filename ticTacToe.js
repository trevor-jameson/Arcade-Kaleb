// What is the starting state?
// How do I display the state of the game to the user?
// What controls/interface to I make available to the user?
// How does each interaction update the state?
// In many ways, this is the "game loop": show state -> wait for input -> update state -> go to step 1


const cells = document.querySelectorAll('.box');
const announcementBanner = document.querySelector('#announceBanner');
const restartButton = document.querySelector('#restartButton');

//const winningCondition lists all possible winning INDEX positions inside of board
const winningConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

//const userInput = document.getElementById('userInput').value;

function getUserName(){
  let userName = document.getElementById('userInput').value; 
  playerNames[currentPlayer] = userName;
  console.log(playerNames);
  swapPlayer();
}
 


let board =["", "", "", "", "", "", "", "", ""];
let playerNames = {
  X: "",
  O: ""
}
let currentPlayer = 'X';
let gameActive = false;

buildInitialState();

function buildInitialState() {
      cells.forEach(cell => cell.addEventListener('click',clickedCell));
      restartButton.addEventListener('click', restartGame);
      announcementBanner.textContent = `${currentPlayer}'s Turn`;
      gameActive = true;
}

function clickedCell(){
      const cellIndex = this.getAttribute("cellIndex");
      if(board[cellIndex] != "" || !gameActive){
        return;
      }
      updateDisplay(this, cellIndex);
      checkWinner();
}

function updateDisplay (cell,index){
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
}

function swapPlayer(){
     //currentPlayer = (currentPlayer == playerNames.X) ? playerNames.O : playerNames.X;
       currentPlayer = (currentPlayer == "X") ? "O" : "X";
      announcementBanner.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
      let matchWon = false;

      for (let i = 0; i < winningConditions.length; i++){
        const condition = winningConditions[i];
        const cell1 = board[condition[0]];
        const cell2 = board[condition[1]];
        const cell3 = board[condition[2]];

        if(cell1 == "" || cell2 == "" || cell3 == ""){
          continue;
        }
        if (cell1 == cell2 && cell2 == cell3){
          matchWon = true;
          break;
        }
      }
      if (matchWon){
        announcementBanner.textContent = `${currentPlayer} wins!`;
        gameActive = false;
      } else if (!board.includes("")){
        announcementBanner.textContent = 'Draw!';
        gameActive = false;
      } else {
        swapPlayer();
      }
}

function restartGame(){
    currentPlayer = "X"
    board = ["", "", "", "", "", "", "", "", ""];
    announcementBanner.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    gameActive = true;
}