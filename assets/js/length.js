function startQuiz() {
    let lengthOptions = document.getElementsByName('quiz-length');
    for (let option of lengthOptions) {
        if (option.checked) {
            localStorage.setItem('questions', option.id)
        }
    }
    window.location.href="game.html";
}

