/*jshint esversion: 11 */

const startButton = document.getElementById('start-quiz-button');

// Save the user quiz length choice to local storage and begin the game.
startButton.addEventListener('click', function() {
    let lengthOptions = document.getElementsByName('quiz-length');
        for (let option of lengthOptions) {
            if (option.checked) {
                localStorage.setItem('questions', option.id);
            }
        }
    window.location.href="game.html";
});