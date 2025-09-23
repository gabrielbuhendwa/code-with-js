const startGameBtn = document.getElementById('start-game-btn');

// const start = function() {
//   console.log('Game is starting...');
// };

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// };

// person.greet();

// console.dir(startGame);


//here we used what we called anonymous function that means that we don't have a name for the function
startGameBtn.addEventListener('click', function() {
  console.log('Game is starting...');
});
