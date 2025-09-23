const startGameBtn = document.getElementById('start-game-btn');

//creating constant for different choices 
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;


const getPlayerChoice = function(){
  const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();

  //using conditions to avoid user to enter anything he want 
  if(
    selection !== ROCK &&
    selection !== PAPER && 
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! we chose ${ROCK} for you`);
  }

}

startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
});
