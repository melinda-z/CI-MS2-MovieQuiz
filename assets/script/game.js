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
const game = document.getElementById("game");
const loader = document.getElementById("loader");
const timeleft = document.getElementById("timeleft");
const sound = document.getElementById("sound");
const muteButton = document.getElementById("mute");
const soundUpButton = document.getElementById("sound-up");
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

// LET
let currentQuestion = {};
let currentScore = 0;
let availableQuestions = [];
let questionCounter = 0;
let acceptingAnswers = false;
let questions = [];

// fetch questions from json file
fetch("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
  .then((res) => {
    return res.json();
  })
  // load questions
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map((loadedQuestion) => {
      // set the question format
      const formattedQuestion = {
        question: loadedQuestion.question,
      };
      // set the choices format
      const answerChoices = [...loadedQuestion.incorrect_answers];
      // set the correct answer format
      formattedQuestion.answer = loadedQuestion.correct_answer;
      answerChoices.splice(
        // get a random number between 0-3
        Math.floor(Math.random() * 4),
        0,
        // insert the correct answer into a random place inbetween the choices
        loadedQuestion.correct_answer
      );

      // set the incorrect answers format
      answerChoices.forEach((choice, index) => {
        formattedQuestion["choice" + (index + 1)] = choice;
      });
      return formattedQuestion;
    });
    startGame();
    console.log(questions);
  })
  // catch error
  .catch((err) => {
    console.log(err);
  });

// FUNCTIONS
startGame = () => {
  questionCounter = 0;
  currentscore = 0;

  //   spread operator expands the array into individual elements
  availableQuestions = [...questions];
  displayQuestion();
  //  display a loader while the questions are being loaded
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

timer = () => {
  // set timer decrease 1 every second
  time = time - 1;
  if (time < 60) {
    // display time left
    timeleft.innerHTML = `<i class="fas fa-clock"> Time Left : ${time} seconds`;
  }
  if (time < 1) {
    // move onto the next question when the time is up
    window.clearInterval(update);
    displayQuestion();
  }
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
  // set timer of 60s for each question
  time = 60;
  update = setInterval("timer()", 1000);
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

soundOn = () => {
  muteButton.classList.toggle("hidden");
  soundUpButton.classList.toggle("hidden");
};

for (var index = 0; index < choices.length; index++) {
  choices[index].addEventListener("click", validateAnswer);
}

sound.addEventListener("click", soundOn);
