/**
 * @jest-environment jsdom
 */

const $ = require("jquery");
global.$ = $;

//Import functions to test
const { enterBtnClick, gamesBtn, loadQuestion, quizData } = require("../muziqmatrix");

//Runs before each test is run
// Creates a mock html to test on
beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
    enterBtnClick();
    gamesBtn();
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
    quizData.forEach(q => {
    expect(q.answer[0]).toBe(q.options[0]);
        });
    });
});