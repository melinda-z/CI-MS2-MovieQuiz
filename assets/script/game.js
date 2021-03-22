questions = [
  {
    text: "Which planet skywalker is from1 ?",
    answer: "Tatooine1",
    choice2: "Mars1",
    choice3: "Saturn1",
    choice4: "Hoth1",
  },
  {
    text: "Which planet skywalker is from2?",
    answer: "Tatooine2",
    choice2: "Mars2",
    choice3: "Saturn2",
    choice4: "Hoth2",
  },
  {
    text: "Which planet skywalker is from3 ?",
    answer: "Tatooine3",
    choice2: "Mars3",
    choice3: "Saturn3",
    choice4: "Hoth3",
  },
  {
    text: "Which planet skywalker is from4 ?",
    answer: "Tatooine4",
    choice2: "Mars4",
    choice3: "Satur4",
    choice4: "Hoth4",
  },
  {
    text: "Which planet skywalker is from5 ?",
    answer: "Tatooine5",
    choice2: "Mars5",
    choice3: "Saturn5",
    choice4: "Hoth5",
  },
];
currentQuestion = {};
currentScore = 0;

function getRandomIndex() {
  min = Math.ceil(0);
  max = Math.floor(questions.length - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showQuestion() {
  question = questions[getRandomIndex()];
  document.getElementById("question").innerHTML = question["text"];
  document.getElementById("answer").innerHTML = question["answer"];
  document.getElementById("choice2").innerHTML = question["choice2"];
  document.getElementById("choice3").innerHTML = question["choice3"];
  document.getElementById("choice4").innerHTML = question["choice4"];
  currentQuestion = question;
}
showQuestion();
