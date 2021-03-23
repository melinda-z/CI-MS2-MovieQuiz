let questions = [
  {
    question: "Who voices Woody in Toy Story?",
    choice1: "Nicolas Cage",
    choice2: "Richard Harris",
    choice3: "Tom Cruise",
    choice4: "Tom Hanks",
    answer: "Tom Hanks",
  },
  {
    question:
      "Including this year's release No Time To Die, how many official James Bond films are there?",
    choice1: "10",
    choice2: "25",
    choice3: "19",
    choice4: "21",
    answer: "25",
  },
  {
    question: "When was the first Star Wars film released?",
    choice1: "1977",
    choice2: "1981",
    choice3: "1980",
    choice4: "1983",
    answer: "1977",
  },
];

// CONSTANTS
const question = document.getElementById("question");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const choice4 = document.getElementById("choice-4");
const choices = document.getElementsByClassName("choice-text");
const score = document.getElementById("score");
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

let currentQuestion = {};
let currentScore = 0;
let availableQuestions = [];
let questionCounter = 0;

startGame = () => {
  questionCounter = 0;
  currentscore = 0;
  //   spread operator expands the array into individual elements
  availableQuestions = [...questions];
  displayQuestion();
};

displayQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  //  get a random number between 1 and the max question number
  randomIndex = Math.floor(Math.random() * availableQuestions.length);
  displayingQuestion = questions[randomIndex];
  question.innerHTML = displayingQuestion["question"];
  choice1.innerHTML = displayingQuestion["choice1"];
  choice2.innerHTML = displayingQuestion["choice2"];
  choice3.innerHTML = displayingQuestion["choice3"];
  choice4.innerHTML = displayingQuestion["choice4"];
  currentQuestion = displayingQuestion;
};

validateAnswer = (event) => {
  userAnswer = event.target.innerHTML;
  selectedAnswer = event.target;
  // checking if the user answer is matching with the correct answer
  if (userAnswer.localeCompare(currentQuestion["answer"]) === 0) {
    currentScore = currentScore + CORRECT_BONUS;
    score.innerHTML = currentScore;

    // add correct class to the selected answer
    selectedAnswer.parentElement.classList.add("correct");
    // remove the correct class after 1 second
    setTimeout(() => {
      selectedAnswer.parentElement.classList.remove("correct");
      // remove the question has been used
      availableQuestions.splice(randomIndex, 1);
      displayQuestion();
    }, 1000);
  } else {
    // add incorrect class to the selected answer
    selectedAnswer.parentElement.classList.add("incorrect");
    // remove the incorrect class after 1 second
    setTimeout(() => {
      selectedAnswer.parentElement.classList.remove("incorrect");
      availableQuestions.splice(randomIndex, 1);
      console.log(availableQuestions);
      displayQuestion();
    }, 1000);
  }
};
// add event listener to the choices
for (var index = 0; index < choices.length; index++) {
  choices[index].addEventListener("click", validateAnswer);
}

startGame();
