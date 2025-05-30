

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
});

// Music Quiz data
const quizData = [
  {
    question: "What genre is known for heavy bass and fast rhythms?",
    options: ["Jazz", "Rock", "Drum & Bass", "Classical"],
    answer: "Drum & Bass"
  },
];

let currentQuestion = 0;

function loadQuestion() {
  const question = quizData[currentQuestion];
  $("#quiz-question").text(question.question);
}



/** Export functions to work simultaneously with
 * node and browser enviroments 
  */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { enterBtn, enterBtnClick, gamesBtn, loadQuestion, quizData, currentQuestion };
}