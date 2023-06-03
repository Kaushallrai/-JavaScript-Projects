const questions = [
  {
    question: "What is the full form of HTML?",
    answers: [
      {
        text: "Hyper Text Markup Language",
        correct: true,
      },
      {
        text: "Hypermedia Markup Language",
        correct: false,
      },
      {
        text: "Hyperlink Text Markup Language",
        correct: false,
      },
      {
        text: "Hyperscript Text Markup Language",
        correct: false,
      },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      {
        text: "Coded Styling Syntax",
        correct: false,
      },
      {
        text: "Centralized Styling System",
        correct: false,
      },
      {
        text: "Cascading Style Sheets",
        correct: true,
      },
      {
        text: "Cascading Style Syntax",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of JavaScript?",
    answers: [
      { text: "To style web pages", correct: false },
      {
        text: "To add interactivity to web pages",
        correct: true,
      },
      {
        text: "To define the structure of web pages",
        correct: false,
      },
      {
        text: "To store data in databases",
        correct: false,
      },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Uranus", correct: false },
      {
        text: "Saturn",
        correct: false,
      },
      {
        text: "Neptune",
        correct: false,
      },
      { text: "Jupiter", correct: true },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Pablo Picasso", correct: false },
      {
        text: "Vincent van Gogh",
        correct: false,
      },
      {
        text: "Leonardo da Vinci",
        correct: true,
      },
      {
        text: "Michelangelo",
        correct: false,
      },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Rome", correct: false },
      {
        text: "London",
        correct: false,
      },
      {
        text: "Berlin",
        correct: false,
      },
      { text: "Paris", correct: true },
    ],
  },
  {
    question: "Which country is known for its pyramids?",
    answers: [
      {
        text: "Peru",
        correct: false,
      },
      {
        text: "Mexico",
        correct: false,
      },
      {
        text: "Sudan",
        correct: false,
      },
      { text: "Egypt", correct: true },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      {
        text: "Fe",
        correct: false,
      },
      {
        text: "Cu",
        correct: false,
      },
    ],
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    answers: [
      { text: "George Bernard Shaw", correct: false },
      {
        text: "Arthur Miller",
        correct: false,
      },
      {
        text: "William Shakespeare",
        correct: true,
      },
      {
        text: "Oscar Wilde",
        correct: false,
      },
    ],
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      {
        text: "Mount Everest",
        correct: true,
      },
      {
        text: "K2",
        correct: false,
      },
      {
        text: "Kangchenjunga",
        correct: false,
      },
      {
        text: "Makalu",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}
function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
