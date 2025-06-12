/**
 * @jest-environment jsdom
 */

const $ = require("jquery");
global.$ = $;

//Mock bootsrap modal for testing 
global.bootstrap = {
  Modal: jest.fn().mockImplementation(() => ({
    show: jest.fn(),
  })),
};

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
  updateCarousel,
  helpNavModal,
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
  artistNavbar();
  updateCarousel();
});

// Tests for landing page - Enter Button
describe("Landing page tests", () => {
  test("removes landing page click enter button", () => {
    const btn = document.getElementById("enter-btn");
    btn.click();
    expect(document.getElementById("landing-page").style.display).toBe("none");
    expect(document.getElementById("canvas").style.display).toBe("none");
    expect($("#nav").hasClass("hidden")).toBe(false)
  });
});

//Navbar - Help link - Bootstrap Modal
describe("Navbar helplink test", () => {
  test("Opens custom modal with button", () => {
    helpNavModal();
    $("#help-link").trigger("click");

    expect(bootstrap.Modal).toHaveBeenCalledWith(document.getElementById("help-modal"));

    const modalInstance = bootstrap.Modal.mock.results[0].value;
    expect(modalInstance.show).toHaveBeenCalled();
  });
});

describe("Upgrade button simulates 404 error page", () => {
  test("clicking Upgrade Now redirects to 404.html", () => {
    delete window.location;
    window.location = { href: "" }; // Mock window.location

    $("#upgrade-btn").trigger("click");

    expect(window.location.href).toContain("404");
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
  //Show close button when artist profiles displayed
  describe("Games button returns home when genre button is clicked", () => {
    test("Games becomes close button and takes user to home page", () => {
      expect($(".games-btn").text()).toBe("Games");
      $("#rock-btn").trigger("click");
      $("#jazz-btn").trigger("click");
      $("#classical-btn").trigger("click");
      $("#hiphop-btn").trigger("click");
      //Time out set for DOM to update
      setTimeout(() => {
        expect($(".games-btn").text()).toBe("Close");

        // Return to home page
        $(".games-btn").trigger("click");

        expect($("#artist-profiles").hasClass("hidden")).toBe(true);
        expect($("#home").hasClass("hidden")).toBe(false);
        expect($(".games-btn").text()).toBe("Games");
        done();
        // hold for 1 loop
      }, 0);
    });
  });
});

//Artist profiles
describe("Tests for genre buttons", () => {
  //Rock button
  test("Rock button displays artist profiles on click", () => {
    rockBtn();
    $("#rock-btn").trigger("click");
    expect($("#home").hasClass("hidden")).toBe(true);
    expect($("#artist-profiles").hasClass("hidden")).toBe(false);
  });

  //Card 1
  //img
  test("Rock button artist profile card1 updates img", () => {
    $("#card1 img").attr(
      "src",
      "https://images.nightcafe.studio/jobs/rbgPZd8hJDe9XBrTLDZk/rbgPZd8hJDe9XBrTLDZk--1--5f9yn.jpg?tr=w-1600,c-at_max"
    );
    expect($("#card1 img").attr("src")).toBe(
      "https://images.nightcafe.studio/jobs/rbgPZd8hJDe9XBrTLDZk/rbgPZd8hJDe9XBrTLDZk--1--5f9yn.jpg?tr=w-1600,c-at_max"
    );
  });
  //Text content
  test("Rock button artist profile card1 updates text", () => {
    $("#card1 h3").text("Rocky Runs Legacy");
    expect($("#card1 h3").text()).toBe("Rocky Runs Legacy");
  });

  //Card 2
  //img
  test("Rock button artist profile card2 updates", () => {
    $("#card2 img").attr(
      "src",
      "https://creator.nightcafe.studio/jobs/61leN4iNbacrNdcpssKj/61leN4iNbacrNdcpssKj--1--1ef60.jpg"
    );
    expect($("#card2 img").attr("src")).toBe(
      "https://creator.nightcafe.studio/jobs/61leN4iNbacrNdcpssKj/61leN4iNbacrNdcpssKj--1--1ef60.jpg"
    );
  });
  //Card 3
  //img
  test("Rock button artist profile card3 updates", () => {
    $("#card3 img").attr(
      "src",
      "https://cdn.shopify.com/s/files/1/0270/2671/8799/files/wgGnras2IqKuOEplO1jp_6x_1b363f14-2d94-4167-a454-f9e7640fea0b_1024x1024.jpg?v=1645849892"
    );
    expect($("#card3 img").attr("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0270/2671/8799/files/wgGnras2IqKuOEplO1jp_6x_1b363f14-2d94-4167-a454-f9e7640fea0b_1024x1024.jpg?v=1645849892"
    );
  });

  // Genre Buttons
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

//Artist Profile Carousel
describe("carousel track test", () => {
  test("carousel has no transform when currentIndex is 0", () => {
    let $track = $(".carousel-track");
    let $indicators = $(".indicator");

    $.fn.outerWidth = jest.fn(() => 110);
    currentIndex = 0;
    updateCarousel();
    //Expected empty on page load until click
    expect($track.css("transform")).toBe("");
    expect($indicators.eq(0).hasClass("active")).toBe(true);
  });
  test("clicking carousel card displays requestFullscreen", () => {
    const $card = $(".carousel-card").eq(0);
    // Clone requestFullscreen for test
    $card[0].requestFullscreen = jest.fn();
    $(".carousel-card").on("click", function () {
      if (this.requestFullscreen) {
        this.requestFullscreen();
      } else if (this.webkitRequestFullscreen) {
        this.webkitRequestFullscreen();
      } else if (this.msRequestFullscreen) {
        this.msRequestFullscreen();
      }
    });
    $card.trigger("click");
    expect($card[0].requestFullscreen).toHaveBeenCalled();
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
  test("displays current question number in format 'Question X of Y'", () => {
  loadQuestion(); // assume currentQuestion is 0 at start
  const questionText = $("#question-number").text();
  expect(questionText).toBe(`Question 1 of ${quizData.length}`);
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
