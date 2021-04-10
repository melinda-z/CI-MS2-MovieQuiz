// CONSTANTS
const userName = document.getElementById("username");
const saveHighScoreButton = document.getElementById("save-score-btn");
const finalScore = document.getElementById("final-score");
// get the most recent score from local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");
// get the highscore that saved in the local storage and convert it into an array with JSON.parse
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// get the two end game modals for a new high score is created and when it's not
const niceJob = document.getElementById("nice-job");
const congrats = document.getElementById("congrats");

// set the max number of high scores going to be saved and displayed
const MAX_HIGH_SCORES = 5;
// display the most recent score on the end screen
finalScore.innerText = mostRecentScore;

// LET
// get the top five high scores and push them into an array
let highScoresArray = [];
highScores.forEach(function (obj) {
  highScoresArray.push(obj.score);
});
// compare the most rencent score with the scores in the highScoreArray
if (mostRecentScore > Math.max(...highScoresArray)) {
  // display the congrats image if it's a new high score
  congrats.classList.remove("hidden");
} else {
  // display a nice job image if it's not a new high score
  niceJob.classList.remove("hidden");
}

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
