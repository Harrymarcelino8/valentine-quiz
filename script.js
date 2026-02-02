const quiz = [
  {
    question: "What is my favorite way to spend time together?",
    answers: [
      "Watching movies",
      "Eating together",
      "Traveling",
      "All of the above ❤️"
    ],
    correct: 3
  },
  {
    question: "Will you be my Valentine?",
    answers: [
      "Yes 💕",
      "Of course 💖",
      "Absolutely 😘"
    ],
    correct: 0
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

function showQuestion() {
  resultEl.textContent = "";
  answersEl.innerHTML = "";
  questionEl.textContent = quiz[currentQuestion].question;

  quiz[currentQuestion].answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === quiz[currentQuestion].correct) {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      showQuestion();
    } else {
      questionEl.textContent = "Happy Valentine’s Day! 💝";
      answersEl.innerHTML = "";
    }
  } else {
    resultEl.textContent = "Try again 😜";
  }
}

showQuestion();
