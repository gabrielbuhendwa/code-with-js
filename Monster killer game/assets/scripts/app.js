//these constants will hold the values for attack, strong attack, monster attack and heal
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

//these variables will hold the max life and current health of player and monster
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

//this function make sure that player does not heal to more than his initial max health, and also heals the player
function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE)//basically this means if the current health of player is greater than or equal to max life - heal value that means we cant heal the player to more than his max initial health
    {
        alert("lesten you can't heal to more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;//this will heal the player to his max initial health
    }else{
        healValue = HEAL_VALUE;//the else bring the heal value to the constant heal value
    }
    //these code does the actual healing of player
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

//event listeners for attack, strong attack and heal buttons
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

