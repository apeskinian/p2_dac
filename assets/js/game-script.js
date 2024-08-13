/*jshint esversion: 11 */

// DEFINING VARIABLES FOR GAME
let numberOfQuestions = localStorage.getItem('questions'); // HOW MANY QUESTIONS THE QUIZ WILL BE
let currentQuestion = 0; // THE CURRENT QUESTION ITERATOR
let playerScore = 0; // PLAYER SCORE FOR THE GAME
let dragonScore = 0; // COUNT ON HOW MANY TIMES THE PLAYER ANSWERS 'Dragons are cool'
let noSelectionMessage = document.getElementById('no-selection'); // MESSAGE WINDOW FOR NON SELECTION SUBMISSION
let answerOptions = document.getElementsByName('attempt'); // ARRAY FOR THE RADIO BUTTONS
let answerBoxes = document.getElementsByClassName('question-box'); // ARRAY FOR THE RADIO BUTTON LABELS
let dismissButton = document.getElementById('dismiss-button');
let submitButton = document.getElementById('submit-button');

// EVENT LISTENERS
dismissButton.addEventListener('click', dismissNoSelectionMessage);
submitButton.addEventListener('click', answerSubmitted);

// FUNCTIONS

/**
 * Generates a random array for the round from the question pool.
 * @param {int} amount How many questions the round will be.
 * @returns An array of numbers used to pull questions from the pool.
 */
function generateQuestions(amount) {
  let set = [];
  while (set.length < amount && set.length < questionPool.length) {
    let num = (Math.floor(Math.random() * questionPool.length));
    if (!set.includes(num)) {
      set.push(num);
    }
  }
  return set;
}

/**
 * Shuffles an array sent as the parameter using the Fisher Yates Shuffle Method from https://javascript.info/task/shuffle.
 * @param {array} array The array to be shuffled.
 * @returns The shuffled question array.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Dismisses the message informing them they need to make a selection before continuing.
 */
function dismissNoSelectionMessage(event) {
  document.getElementById('no-selection').style.display = "none";
  for (let uncheck of answerOptions) {
    uncheck.disabled = false;
  }
}

/**
 * Loads the next question from the question set into the page. Answers are shuffled.
 * @param {int} n Which question in the set to load.
 */
function loadQuestion(n) {
  let nextQuestion = questionPool[questionSet[n]];
  document.getElementById('question').innerText = nextQuestion.question;
  let allAnswers = ([...nextQuestion.wrongAnswers, nextQuestion.correctAnswer]);
  // SHUFFLING ANSWERS ARRAY
  let shuffledAnswers = shuffle(allAnswers);
  for (let n = 0; n <= 4; n++) {
    answerBoxes[n].innerText = shuffledAnswers[n];
    answerOptions[n].value = shuffledAnswers[n];
  }
  document.getElementById('progress').style.width = `${(((n+1)/numberOfQuestions)*100)}%`; // ADVANCING THE PROGRESS BAR
}

/**
 * Resets inputs and checks to see if the end has been reached, if not the next question is requested.
 * If the game has finished, the user is sent to the relevant results page where their score is shown.
 */
function nextQuestionPlease() {
  // RESET ANSWERBOXES AND SUBMIT BUTTON NAME
  submitButton.innerHTML = `Dracarys!<p id="submit-hint" class="button-hints">Submit</p>`;
  submitButton.classList.add('check');
  for (let option of answerOptions) {
    option.disabled = false;
  }
  for (let box of answerBoxes) {
    box.classList.remove('correct-answer');
    box.classList.remove('incorrect-answer');
  }
  // CHECK CURRENT QUESTION FOR ENDGAME EVENT
  if (currentQuestion < numberOfQuestions) {
    loadQuestion(currentQuestion);
  } else {
    // ENDGAME REACHED - SET SCORE TO LOCALSTORAGE AND GO TO RELEVANT RESULTS PAGE
    localStorage.setItem('score', playerScore);
    localStorage.setItem('dragon', dragonScore);
    if (dragonScore == numberOfQuestions) {
      window.location.href = 'dac.html';
    } else {
      window.location.href = 'results.html';
    }
  }
}

/**
 * Highlights the correct answer for the user in green. If they answered incorrectly, their answer is highlighted red.
 * All radio input is disabled at this point until the next question to prevent the user attempting to select the correct one.
 * This would not achieve much anyway as the submit button will not submit any updated selection.
 * @param {string} correct The correct answer for the question.
 * @param {string} given The users answer for the question.
 */
function highlightCorrectAnswer(correct, given) {
  // UNCHECK ALL BOXES SO THAT BACKROUND COLOUR IS SEEN AND DISABLE INPUTS
  for (let uncheck of answerOptions) {
    uncheck.checked = false;
    uncheck.disabled = true;
  }
  // HIGHLIGHTING CORRECT ANSWER
  for (let label of answerBoxes) {
    if (label.innerText === correct) {
      label.classList.add('correct-answer');
    }
  }
  // HIGHLIGHTING INCORRECT ANSWER
  if (given !== correct) {
    for (let label of answerBoxes) {
      if (label.innerText === given) {
        label.classList.add('incorrect-answer');
      }
    }
  }
}

function getCorrectAnswerMessage() {
  return correctAnswerMessages[Math.floor(Math.random()*correctAnswerMessages.length)];
}

function getIncorrectAnswerMessage() {
  return wrongAnswerMessages[Math.floor(Math.random()*correctAnswerMessages.length)];
}

/**
 * Update the player score and inform the user of their correct answer.
 */
function correctAnswerGiven() {
  playerScore += 1;
  document.getElementById('question').innerText = getCorrectAnswerMessage();
}

/**
 * Inform the user of their incorrect answer and check for "Dragons are cool". If found, the dragonScore is increased.
 * @param {string} answer The users answer.
 */
function incorrectAnswerGiven(answer) {
  if (answer === "Dragons are cool") {
    dragonScore += 1;
  }
  document.getElementById('question').innerText = getIncorrectAnswerMessage();
}

/**
 * First checks whether this is an answer check or submission by the text of the button.
 * If it is an answer check, it first looks for a valid submission and notifies via pop up message if nothing was selected.
 * Then the answers is checked to see if it's correct. The relevant function is then called along with the function to highight the correct and any wrong answers.
 * If it is not an answer check it increases the currentQuestion count and calls the function to request a new question.
 */
function answerSubmitted(event) {
  // CHECK FOR ANSWER CHECK OR SUBMIT BY LOOKING AT BUTTON TEXT
  if (submitButton.classList.contains('check')) {
    // CHECK FOR VALID ANSWER, IF NOT SEND USER A MESSAGE
    let givenAnswer = "";
    for (let answer of answerOptions) {
      if (answer.checked) {
        givenAnswer = answer.value;
      }
    }
    if (givenAnswer === "") {
      noSelectionMessage.style.display = "flex";
      for (let uncheck of answerOptions) {
        uncheck.disabled = true;
      }
    } else {
      // CHECK IF ANSWER IS CORRECT AND CALL RELEVANT FUNCTION
      let actualAnswer = questionPool[questionSet[currentQuestion]].correctAnswer;
      if (givenAnswer === actualAnswer) {
        correctAnswerGiven();
      } else {
        incorrectAnswerGiven(givenAnswer);
      }
      // CHANGE BUTTON TEXT
      submitButton.innerHTML = `Swear Your Oath<p id="submit-hint" class="button-hints">Next Question</p>`;
      submitButton.classList.remove('check');
      // HIGHLIGHT CORRECT ANSWER
      highlightCorrectAnswer(actualAnswer, givenAnswer);
    }
  } else {
    // MOVE ON TO THE NEXT QUESTION
    currentQuestion += 1;
    nextQuestionPlease();
  }
}

// GENERATE QUESTION SET FOR THE ROUND
let questionSet = generateQuestions(numberOfQuestions);

// BEGININNING THE GAME
loadQuestion(currentQuestion);


