/*jshint esversion: 11 */

/**
 * Save the user quiz length choice to local storage and begin the game.
 */
function startQuiz() {
    let lengthOptions = document.getElementsByName('quiz-length');
    for (let option of lengthOptions) {
        if (option.checked) {
            localStorage.setItem('questions', option.id);
        }
    }
    window.location.href="game.html";
}

