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

// determine questions for the round
// let amountOfQuestions = localStorage.getItem('questions');
let questionSet = generateQuestions(localStorage.getItem('questions'));

for (question of questionSet) {
    console.log(questionPool[question].question);
}
console.log(questionPool.length, questionSet.length);

function answerSubmitted() {
  console.log('answer submitted...');
}