To start; Initilize project.
MAKE SEPERATE HTML, CSS, AND JAVASCRIPT FILES FOR EACH GAME.

Game Loops
In all of the games below you must figure out:

What is the starting state?
How do I display the state of the game to the user?
What controls/interface to I make available to the user?
How does each interaction update the state?
In many ways, this is the "game loop": show state -> wait for input -> update state -> go to step 1

// state
let state;

function buildInitialState() {

}


Tic Tac Toe -->

how do I know when the game has ended?
    [] if no more empty spaces
        []there is a winner
        []there is a tie
        []three in a row

how to track state
        [] what teams are playing, players
        [] whose turn is it
        [] what positions are filled and which are empty if filled, 
            with an x or o ?
        [] how do we add to state? after a move.
            []click evet.
                [] check, if the position is open?


// MICRO
checkIsGameOver = () => {

}