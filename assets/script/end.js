// CONSTANTS
const userName = document.getElementById("username");
const saveHighScoreButton = document.getElementById("save-score-btn");
const finalScore = document.getElementById("final-score");
// get the most recent score from local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");
// display the most recent score on the end screen
finalScore.innerText = mostRecentScore;

// FUNCTIONS
allowUserSave = () => {
  saveHighScoreButton.disabled = !username.value;
};

saveHighScore = (event) => {
  event.preventDefault();
};
// EVENTS
saveHighScoreButton.addEventListener("click", saveHighScore);
userName.addEventListener("keyup", allowUserSave);
