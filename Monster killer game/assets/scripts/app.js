//contants to hold attack values for player and monster 
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

//variables to hold max life and current life of player and monster
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

//get the attack button from the DOM
adjustHealthBars(chosenMaxLife); 

//function to handle attack and strong attack logic for player and monster
function attackMonster(mode){
    let maxDamage;
    if(mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    }else if(mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    //deal damage to monster and player
    const damage = dealMonsterDamage(maxDamage);
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
//fuction to handle attack button click for player and monster
function attackHandler(){
    attackMonster('ATTACK'); 
} 
//function to handle strong attack button click for player and monster
function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');
}
//add event listener to attack button and strong attack button
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);

