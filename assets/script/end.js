// CONSTANTS
const userName = document.getElementById("username");
const saveHighScoreButton = document.getElementById("save-score-btn");
const finalScore = document.getElementById("final-score");
// get the most recent score from local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");
// get the highscore that saved in the local storage and convert it into an array with JSON.parse
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// set the max number of high scores going to be saved and displayed
const MAX_HIGH_SCORES = 5;
// display the most recent score on the end screen
finalScore.innerText = mostRecentScore;

// FUNCTIONS
allowUserSave = () => {
  // enable user input if there is a value
  saveHighScoreButton.disabled = !username.value;
};

saveHighScore = (event) => {
  event.preventDefault();
  // set the score to an object format
  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  // push score into the high scores array
  highScores.push(score);
  // sort high scores
  highScores.sort((a, b) => b.score - a.score);
  // cut off the array at index 5 (show top 5 scores)
  highScores.splice(5);
  // set the high score to a string in local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
  // return to the home when score has been saved
  window.location.assign("index.html");
};

// EVENTS
saveHighScoreButton.addEventListener("click", saveHighScore);
userName.addEventListener("keyup", allowUserSave);
