// CONSTANTS
const highScoresList = document.getElementById("highScoresList");
// get the array of high scores stored in the local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  // display each high score from the array using map method
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
