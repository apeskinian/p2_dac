//DEFINING VARIABLES FOR GAME

let numberOfQuestions = localStorage.getItem('questions');
let playerScore = 0;
let dragonScore = 0;
let noSelectionMessage = document.getElementById('no-selection');

//FUNCTIONS

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

/**
 * Shuffles an array sent as the parameter using teh Fisher Yates Shuffle Method from https://javascript.info/task/shuffle
 * @param {} array the array to be shuffled
 * @returns the shuffled array
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function dismissNoSelectionMessage() {
  document.getElementById('no-selection').style.display = "none";
}

/**
 * Loads the next question from the question set into the page. Answers are shuffled
 * @param {*} n which question in the set to load
 */
function loadQuestion(n) {
  let nextQuestion = questionPool[questionSet[n]];
  console.log(nextQuestion);
  document.getElementById('question').innerText = nextQuestion.question;
  let allAnswers = ([...nextQuestion.wrongAnswers, nextQuestion.correctAnswer]);
  let shuffledAnswers = shuffle(allAnswers);
  let answerBoxes = document.getElementsByClassName('question-box');
  for (let n = 0;  n <= 4; n++) {
    answerBoxes[n].innerText = shuffledAnswers[n];
  }
  document.getElementById('progress').style.width = `${(((n+1)/numberOfQuestions)*100)}%`;
}

//GAME PREP

// GENERATE QUESTION SET FOR THE ROUND
let questionSet = generateQuestions(numberOfQuestions);
//Logging questions for chosen for the game
console.log('The ',questionSet.length, ' questions drawn for game:');
for (question of questionSet) {
    console.log(questionPool[question].question);
}
console.log('There are ',questionPool.length,' questions currently in the pool.');



loadQuestion(0);

function answerSubmitted() {
  console.log('answer submitted...');
  
  noSelectionMessage.style.display = "flex";
}

//END OF GAME

//SET SCORE TO LOCALSTORAGE
localStorage.setItem('score', playerScore);
localStorage.setItem('dragon', dragonScore);