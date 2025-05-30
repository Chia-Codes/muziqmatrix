

// Function to hide landing page when enter button is clicked
const enterBtn = () => {
  ["landing-page", "canvas"].forEach(id => 
    document.getElementById(id).style.display = "none"
  );
};

// Enter button function
const enterBtnClick = () =>
document.getElementById("enter-btn")?.addEventListener("click", enterBtn);
  // Call function for event listener
enterBtnClick();


//Music Quiz
//Show quiz container when games button is clicked
const gamesBtn = () => {
  $(".games-btn").on("click", () => $("#quiz-container").removeClass("hidden"));
  //Hide home page & content when games button is clicked
  $(".games-btn").on("click", () => $("#home").addClass("hidden"));
  currentQuestion = 0;
};

// Load actions to run after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  enterBtnClick();
  gamesBtn();
  loadQuestion();
  resetQuiz();
});



let currentQuestion = 0;
let score = 0;

  // Load first question on page load
function loadQuestion() {
  const question = quizData[currentQuestion];
  $("#quiz-question").text(question.question);
  loadOptions();
}

// Load options for the displaed question
const loadOptions = () => {
  const options = quizData[currentQuestion].options;
  $("#quiz-options").empty();
  options.forEach((options, i) => { 
    $("#quiz-options").append(`<button class="option-btn" data-index="${i}">${options}</button>`);
  });
};

// Selecting correct answer for music quiz
$("#quiz-options").on("click", ".option-btn", e => { 
  const selected = $(e.target).text();
  const correct = quizData[currentQuestion].answer[0];
  //score++ will only run if correct answer is selected
  selected === correct && score++;
  // loadQuestion is called unless its the last one
  currentQuestion < quizData.length - 1
    ? (currentQuestion++, loadQuestion())
    : showScore(score, quizData.length);
});

// Show score function
const showScore = (score, total) => {
  $("#quiz-container").addClass("hidden");
  $("#quiz-score").removeClass("hidden");
  $("#score-message").text(`You scored ${score} out of ${total}`);
  console.log("showScore called");
};

// Set starting condition for quiz
const startQuiz = {
  score: 0,
  currentQuestion: 0,
};

function resetQuiz() {
  score = 0;
  currentQuestion = 0;
  $("#quiz-score").addClass("hidden");
  loadQuestion();
  console.log("Quiz has been reset");
}

$("#restart-btn").on("click", resetQuiz);

//Ensure button calls startQuiz function
$("#restart-btn").on("click", () => {
  resetQuiz();
});

// Music Quiz data
/** Correct answers for quiz questions 
 * are set up to be the first index of
 * the options array to make the questions 
 * more diverse and changeable.
 */
const quizData = [
  {
    question: "What genre is known for heavy bass and fast rhythms?",
    options: [ "Drum & Bass", "Jazz", "Rock", "Classical"],
    answer: ["Drum & Bass"]
  },
  {
    question: "Who was the first woman to have four country albums reach No. 1 on the Billboard 200?",
    options: [ "Carrie Underwood", "Dolly Parton", "Taylor Swift", "Shania Twain"],
    answer: ["Carrie Underwood"]
  },
  {
    question: "Who sang the Spongebob Squarepants theme song for the movie?",
    options: [ "Avril Lavigne", "Frank & The Walters", "Sugarbabes", "Busted"],
    answer: ["Avril Lavigne"]
  },
  {
    question: "Who is the frontman of 30 Seconds to Mars?",
    options: [ "Jared Leto", "James Lerore", "Leo Jared", "Jared Leo"],
    answer: ["Jared Leto"]
  },
  {
    question: "Which member of Kiss wore makeup to look like a cat?",
    options: [ "Peter Criss", "Paul Stanley", "Vinnie Vincent", "Gene Simmons"],
    answer: ["Peter Criss"]
  },
  {
    question: "John Mayer wrote a song about which law of physics?",
    options: [ "Gravity", "Nuclear ", "Conservation", "Electromagnetism"],
    answer: ["Gravity"]
  },
];



/** Export functions to work simultaneously with
 * node and browser enviroments 
  */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { enterBtn, enterBtnClick, gamesBtn, 
    loadQuestion, quizData, currentQuestion, showScore, getScore: () => score,
  getCurrentQuestion: () => currentQuestion,
  resetQuiz };
}