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

describe("Music quiz tests", () => {
  test("loads the first quiz question", () => {
    loadQuestion();
    const questionText = $("#quiz-question").text();
    expect(questionText).toBe(quizData[0].question);
  });
});

