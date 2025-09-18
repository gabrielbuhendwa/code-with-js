//constant that holds the attack value
const ATTACK_VALUE = 10;

//variables to hold max life and current life of player and monster
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

//get the attack button from the DOM
adjustHealthBars(chosenMaxLife); 

//fuction to handle attack button click
function attackHandler(){
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage; 
}

//add event listener to attack button
attackBtn.addEventListener('click', attackHandler);

