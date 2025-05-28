/**
 * @jest-environment jsdom
 */

//Import functions to test
const {  } = require("../muziqmatrix");

//Setup test environment + load HTML
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
})

test("Jest should pass 1 test", () => {
  expect(1 + 1).toBe(2);
});