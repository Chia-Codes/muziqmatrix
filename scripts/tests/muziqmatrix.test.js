/**
 * @jest-environment jsdom
 */

//Import functions to test
const { enterBtnClick  } = require("../muziqmatrix");

//Runs before each test is run
// Creates a mock html to test on
beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
    enterBtnClick();
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