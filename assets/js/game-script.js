//DEFINING VARIABLES FOR GAME

let numberOfQuestions = localStorage.getItem('questions');
let currentQuestion = 0;
let playerScore = 0;
let dragonScore = 0;
let noSelectionMessage = document.getElementById('no-selection');
let answerOptions = document.getElementsByName('attempt');
let answerBoxes = document.getElementsByClassName('question-box');

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
  // let answerBoxes = document.getElementsByClassName('question-box');
  for (let n = 0;  n <= 4; n++) {
    answerBoxes[n].innerText = shuffledAnswers[n];
    answerOptions[n].value = shuffledAnswers[n];
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
console.log('Loading first question...');
loadQuestion(currentQuestion);

function nextQuestionPlease() {
  //REVERT ANSWERBOXES AND RESET SUBMIT BUTTON NAME
  document.getElementById('submit-button').textContent = 'Dracarys!';
  for (let option of answerOptions) {
    option.disabled = false;
  }
  for (let box of answerBoxes) {
    box.classList.remove('correct-answer');
    box.classList.remove('incorrect-answer');
  }
  if (currentQuestion < numberOfQuestions) {
    loadQuestion(currentQuestion);
  } else {
    //SET SCORE TO LOCALSTORAGE AND GO TO RESULTS PAGE
    localStorage.setItem('score', playerScore);
    localStorage.setItem('dragon', dragonScore);
    window.location.href='results.html';
  }
}

function highlightCorrectAnswer(correct, given) {
  //UNCHECK ALL BOXES SO THAT BACKROUND COLOUR IS SEEN AND DISABLE INPUTS
  for (let uncheck of answerOptions) {
    uncheck.checked = false;
    uncheck.disabled = true;
  }
  for (let label of answerBoxes) {
    if (label.innerText === correct) {
      label.classList.add('correct-answer');
    }
  }
  if (given !== correct) {
    for (let label of answerBoxes) {
      if (label.innerText === given) {
        label.classList.add('incorrect-answer');
      }
    }
  }
}

function correctAnswerGiven(answer) {
  playerScore += 1;
  document.getElementById('question').innerText = 'Well done, wise one! You chose correctly, march on!';
  document.getElementById('submit-button').textContent = 'Raise the banners!';
}

function incorrectAnswerGiven(answer) {
  if (answer === "Dragons are cool") {
    dragonScore += 1;
  }
  document.getElementById('question').innerText = 'Alas, that was not the right choice. Keep moving on, brave soul!';
  document.getElementById('submit-button').textContent = 'Seal my fate!';
}

function answerSubmitted() {
  //CHECK IF SUBMIT ANSWER FOR CHECKING OR NEXT QUESTION REQUEST
  if (document.getElementById('submit-button').textContent === "Dracarys!") {
    //CHECK FOR VALID ANSWER, IF NOT SEND USER A MESSAGE
    let givenAnswer = "";
    for (let answer of answerOptions) {
      if (answer.checked) {
        givenAnswer = answer.value;
      }
    }
    if (givenAnswer === "") {
      noSelectionMessage.style.display = "flex";
    }
    //CHECK IF ANSWER IS CORRECT AND CALL RELEVANT FUNCTION
    let actualAnswer = questionPool[questionSet[currentQuestion]].correctAnswer;
    if (givenAnswer === actualAnswer) {
      correctAnswerGiven(givenAnswer);
    } else {
      incorrectAnswerGiven(givenAnswer);
    }
    //HIGHLIGHT CORRECT ANSWER
    highlightCorrectAnswer(actualAnswer, givenAnswer);
  } else {
    currentQuestion += 1;
    nextQuestionPlease();
  }
}

//END OF GAME


