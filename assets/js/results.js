/*jshint esversion: 6 */

// DEFINE VARIABLES
let finalScore = Math.floor((localStorage.getItem('score'))/(localStorage.getItem('questions'))*100); // CALCULATING USER SCORE AS A PERCENTAGE
let scoreFeedback = document.getElementById('player-feedback');
let scoreBoard = document.getElementById('player-score');

// UPDATING FEEDBACK ACCORDING TO PERFORMANCE
scoreBoard.innerText = `${finalScore}%`;
if (finalScore >= 100) {
    scoreFeedback.innerText = "Incredible! You’ve proven yourself a true Maester of Targaryen lore. The Iron Throne would be proud!";
} else if (finalScore >= 90) {
    scoreFeedback.innerText = "Magnificent! You’ve nearly mastered the Targaryen lore. Just a few more details and you’ll be a true Maester.";
} else if (finalScore >= 80) {
    scoreFeedback.innerText = "Outstanding! Your expertise rivals that of a Maester. The Seven Kingdoms are impressed by your knowledge!";
} else if (finalScore >= 70) {
    scoreFeedback.innerText = "Excellent! You have a strong grasp of the Targaryen dynasty. The Iron Throne is within your reach!";
} else if (finalScore >= 60) {
    scoreFeedback.innerText = "Great job! Your knowledge of Targaryen lore is commendable. You’re a true student of Westeros.";
} else if (finalScore >= 50) {
    scoreFeedback.innerText = "Well done! You’ve proven your worth in the game of thrones. Keep honing your knowledge!";
} else if (finalScore >= 40) {
    scoreFeedback.innerText = "Impressive! You’re well on your way to mastering the intricate web of ‘House of the Dragon’.";
} else if (finalScore >= 30) {
    scoreFeedback.innerText = "A decent effort! Your understanding of the Targaryen lineage grows stronger.";
} else if (finalScore >= 20) {
    scoreFeedback.innerText = "Not bad, but the realm’s secrets still elude you. Keep striving, and you’ll conquer more.";
} else if (finalScore >= 10) {
    scoreFeedback.innerText = "You’ve sparked a small flame of knowledge. Keep fanning it, and you’ll soon blaze through!";
} else if (finalScore >= 1) {
    scoreFeedback.innerText = "Your journey through Westeros has just begun. Keep trying, and you’ll uncover more of its secrets!";
} else if (finalScore === 0) {
    scoreFeedback.innerText = "Alas, the dragons did not favor you this time. Better luck next time, brave soul.";
}
