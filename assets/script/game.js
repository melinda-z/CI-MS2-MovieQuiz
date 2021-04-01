// CONSTANTS
const question = document.getElementById("question");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const choice4 = document.getElementById("choice-4");
const choices = document.getElementsByClassName("choice-text");
const scoreText = document.getElementById("score");
const questionCounterText = document.getElementById("questionCounter-text");
const progressBarFull = document.getElementById("progress-bar-full");
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

// LET
let currentQuestion = {};
let currentScore = 0;
let availableQuestions = [];
let questionCounter = 0;
let acceptingAnswers = false;

// FUNCTIONS
startGame = () => {
  questionCounter = 0;
  currentscore = 0;
  //   spread operator expands the array into individual elements
  availableQuestions = [...questions];
  displayQuestion();
};

displayQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // save the score in local storage
    localStorage.setItem("mostRecentScore", currentScore);
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  questionCounterText.innerHTML = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  // update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  //  get a random number between 1 and the max question number
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  displayingQuestion = availableQuestions[randomIndex];

  question.innerHTML = displayingQuestion["question"];
  choice1.innerHTML = displayingQuestion["choice1"];
  choice2.innerHTML = displayingQuestion["choice2"];
  choice3.innerHTML = displayingQuestion["choice3"];
  choice4.innerHTML = displayingQuestion["choice4"];
  currentQuestion = displayingQuestion;
  // remove used question
  availableQuestions.splice(randomIndex, 1);
  acceptingAnswers = true;
};

validateAnswer = (event) => {
  userAnswer = event.target.innerHTML;
  selectedAnswer = event.target;
  // checking if the user answer is matching with the correct answer
  if (userAnswer.localeCompare(currentQuestion["answer"]) === 0) {
    currentScore = currentScore + CORRECT_BONUS;
    scoreText.innerHTML = currentScore;

    // add correct class to the selected answer
    selectedAnswer.parentElement.classList.add("correct");
    acceptingAnswers = false;
    // remove the correct class after 1 second
    setTimeout(() => {
      selectedAnswer.parentElement.classList.remove("correct");
      displayQuestion();
    }, 1000);
  } else {
    // add incorrect class to the selected answer
    selectedAnswer.parentElement.classList.add("incorrect");
    acceptingAnswers = false;
    // remove the incorrect class after 1 second
    setTimeout(() => {
      selectedAnswer.parentElement.classList.remove("incorrect");
      displayQuestion();
    }, 1000);
  }
};

// EVENTS
for (var index = 0; index < choices.length; index++) {
  choices[index].addEventListener("click", validateAnswer);
}
// call the function
startGame();
