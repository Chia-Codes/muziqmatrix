/**
 * @jest-environment jsdom
 */

//Import functions to test
const {  } = require("../muziqmatrix");

//Runs before each test is run
// Creates a mock html to test on
beforeEach(() => {
    document.body.innerHTML = ``;
});


//Setup test environment + load HTML
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
})

