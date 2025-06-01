/**
 * @jest-environment jsdom
 */

const $ = require("jquery");
global.$ = $;

//Import functions to test
const {
  enterBtnClick,
  gamesBtn,
  loadQuestion,
  quizData,
  showScore,
  resetQuiz,
  getScore,
  getCurrentQuestion,
  rockBtn,
  jazzBtn,
  classicalBtn,
  hiphopBtn,
  artistNavbar,
} = require("../muziqmatrix");

//Runs before each test is run
// Creates a mock html to test on
beforeEach(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.body.innerHTML = fileContents;
  enterBtnClick();
  gamesBtn();
  showScore();
  resetQuiz();
});

// Tests for landing page
describe("Landing page tests", () => {
  test("removes landing page click enter button", () => {
    const btn = document.getElementById("enter-btn");
    btn.click();
    expect(document.getElementById("landing-page").style.display).toBe("none");
    expect(document.getElementById("canvas").style.display).toBe("none");
  });
});

//Navbar tests
describe("Navbar display changes when artist profile is shown", () => {
  test("'Close' action displayed when artist profiles are visible", () => {
    $("#artist-profiles").removeClass("hidden");
    artistNavbar();
    expect($("#nav-action").text()).toBe("Close");
  });

  test("Nav go back to default when artist profiles are hidden", () => {
    $("#artist-profiles").addClass("hidden");
    artistNavbar();
    expect($("#nav-action").text()).toBe("Help?");
  });
});

// Games Button
describe("Games button tests", () => {
  // Test for home page to be hidden
  test("home page hides when games button is clicked", () => {
    $(".games-btn").trigger("click");
    expect($("#home").hasClass("hidden")).toBe(true);
  });
  // Test to show quiz container
  test("quiz container shows when games button is clicked", () => {
    $(".games-btn").trigger("click");
    expect($("#quiz-container").hasClass("hidden")).toBe(false);
  });
  test("calls resetQuiz when games button is clicked", () => {
    $(".games-btn").trigger("click");
    expect(getScore()).toBe(0);
    expect(getCurrentQuestion()).toBe(0);
  });
});

//Artist profiles
describe("Tests for genre buttons", () => {
  test("Rcok button displays artist profiles on click", () => {
    rockBtn();
    $("#rock-btn").trigger("click");
    expect($("#home").hasClass("hidden")).toBe(true);
    expect($("#artist-profiles").hasClass("hidden")).toBe(false);
  });
  test("Jazz button displays artist profiles on click", () => {
    jazzBtn();
    $("#jazz-btn").trigger("click");
    expect($("#home").hasClass("hidden")).toBe(true);
    expect($("#artist-profiles").hasClass("hidden")).toBe(false);
  });
  test("Hiphop button displays artist profiles on click", () => {
    hiphopBtn();
    $("#hiphop-btn").trigger("click");
    expect($("#home").hasClass("hidden")).toBe(true);
    expect($("#artist-profiles").hasClass("hidden")).toBe(false);
  });
  test("Classical button displays artist profiles on click", () => {
    classicalBtn();
    $("#classical-btn").trigger("click");
    expect($("#home").hasClass("hidden")).toBe(true);
    expect($("#artist-profiles").hasClass("hidden")).toBe(false);
  });
});

//Music Quiz
describe("Music quiz tests", () => {
  test("loads the first quiz question", () => {
    loadQuestion();
    const questionText = $("#quiz-question").text();
    expect(questionText).toBe(quizData[0].question);
  });
  test("displays question answer options", () => {
    loadQuestion(); //calls loadOptions
    const buttons = $("#quiz-options").children();
    expect(buttons.length).toBe(quizData[0].options.length);
    expect($(buttons[0]).text()).toBe(quizData[0].options[0]);
  });
  test("correct answer matches first option ", () => {
    quizData.forEach((q) => {
      expect(q.answer[0]).toBe(q.options[0]);
    });
  });
  test("displays final score correctly and hides quiz", () => {
    let localScore = 0;
    let localCurrentQuestion = 0;
    quizData.forEach((q) => {
      localScore++;
      localCurrentQuestion++;
    });
    score = localScore;
    currentQuestion = localCurrentQuestion;

    showScore(quizData.length, quizData.length);

    expect($("#quiz-container").hasClass("hidden")).toBe(true);
    expect($("#quiz-score").hasClass("hidden")).toBe(false);
    expect($("#score-message").text()).toBe(
      `You scored ${quizData.length} out of ${quizData.length}`
    );
  });
  test("returns to home page when Return Home is clicked", () => {
    $("#return-home-btn").trigger("click");
    expect($("#home").hasClass("hidden")).toBe(false);
  });
  test("add genre btn class for theme consistancy", () => {
    $(".option-btn").addClass("genre");
    $("#return-home-btn").addClass("genre");

    expect($(".option-btn").hasClass("genre")).toBe(true);
    expect($("#return-home-btn").hasClass("genre")).toBe(true);
  });
});

describe("Reset & exit button test when quiz is open", () => {
  test("resets quiz state when reset button is clicked", () => {
    resetQuiz();
    expect(getScore()).toBe(0);
    expect(getCurrentQuestion()).toBe(0);
  });
  test("returns to home page", () => {
    $("#exit-quiz-btn").trigger("click");
    expect($("#quiz-container").hasClass("hidden")).toBe(true);
    expect($("#home").hasClass("hidden")).toBe(false);
  });
});
