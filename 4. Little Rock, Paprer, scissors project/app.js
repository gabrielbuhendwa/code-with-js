const startGameBtn = document.getElementById('start-game-btn');

//creating constant for different choices 
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;


const getPlayerChoice = function(){
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();

  //using conditions to avoid user to enter anything he want 
  if(
    selection !== ROCK &&
    selection !== PAPER && 
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
}

startGameBtn.addEventListener('click', function() {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
