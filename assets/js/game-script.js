/**
 * Generates a random array for the round from the question pool
 * @param {} amount how many questions the round will be
 * @returns an array of numbers used to pull questions from the pool
 */
function generateQuestions(amount) {
    let set = [];  
    while (set.length < amount && set.length < questionPool.length) {
      let num = (Math.floor(Math.random() * questionPool.length));
      if (!set.includes(num)) {
          // debugger;
          set.push(num);
      }
  }
  return set;
}

// determine questions for the round by retrieving choice from index.html in local storage
let questionSet = generateQuestions(localStorage.getItem('questions'));

//Logging questions for chosen for the game
console.log('The ',questionSet.length, ' questions drawn for game:');
for (question of questionSet) {
    console.log(questionPool[question].question);
}
console.log('There are ',questionPool.length,' questions currently in the pool.');

function answerSubmitted() {
  console.log('answer submitted...');
}