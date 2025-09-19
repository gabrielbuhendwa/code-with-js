//these are the constants that define the values for attacks and healing 
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

//these are the variables that will hold the current health values
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

//function to get the maximum life value from the user
adjustHealthBars(chosenMaxLife);

//this function resets the game state after a win/loss/draw
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}
//this block handles the end of each round
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;//to save the player's health before the monster attacks
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);//monster attacks the player
  currentPlayerHealth -= playerDamage; //update the player's health

  //this block checks if the player has a bonus life and uses it if necessary
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false; //this ensures the bonus life is only used once
    removeBonusLife();//remove the bonus life from the UI after use
    currentPlayerHealth = initialPlayerHealth;//restore player's health
    setPlayerHealth(initialPlayerHealth);//set the player's health in the UI
    alert('You would be dead but the bonus life saved you!');
  }
  //this block checks the win/loss/draw conditions
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('congratulations, you won');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Oh, sorry you lost');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('Damn, you have a draw');
  }
  //if the game is over, reset the game state
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {//check if either the player or monster has no health left
    reset();//reset the game state
  }

}

//this function handles the player's attack actions and the monster's counterattack
function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage); //player attacks the monster
  currentMonsterHealth -= damage;//update the monster's health
  endRound();//end the round and let the monster attack back
}
//this function handles the attack button click
function attackHandler() {
  attackMonster('ATTACK');
}
//this function handles the strong attack button click
function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}
//this function handles the heal button click
function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {//
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;//heal only the amount needed to reach max health
  } else {
    healValue = HEAL_VALUE;//heal the full heal value
  }
  //here we increase the player's health
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();//end the round and let the monster attack back
}
//down here we set up the event listeners for the buttons
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);