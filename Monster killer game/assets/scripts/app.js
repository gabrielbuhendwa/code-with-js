//contants to hold attack values for player and monster 
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

//variables to hold max life and current life of player and monster
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

//get the attack button from the DOM
adjustHealthBars(chosenMaxLife);

//this fonction will handle the end round logic for player and monster
function endRound(){
    //deal damage to player 
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
    endRound();
}
//fuction to handle attack button click for player and monster
function attackHandler(){
    attackMonster('ATTACK'); 
} 
//function to handle strong attack button click for player and monster
function strongAttackHandler(){
    attackMonster('STRONG_ATTACK');
}

//function to handle heal button click for player
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE)//basically this means if the current health of player is greater than or equal to max life - heal value that means we cant heal the player to more than his max initial health
    {
        alert("you can't heal to more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    endRound();
}

//add event listener to attack button and strong attack button
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

