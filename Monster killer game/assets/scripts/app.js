//contants to hold attack values for player and monster 
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

//variables to hold max life and current life of player and monster
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

//get the attack button from the DOM
adjustHealthBars(chosenMaxLife); 

//fuction to handle attack button click for player and monster
function attackHandler(){
    //deal damage to monster and player
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage; 
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert("congrats you won");
    }else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){
        alert("Oh, saddly you lost");
    }else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert("this case is a draw");
    }
} 
//add event listener to attack button
attackBtn.addEventListener('click', attackHandler);

