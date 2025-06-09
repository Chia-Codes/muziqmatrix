// Load actions to run after DOM is loaded
window.addEventListener("DOMContentLoaded", () => {
  gamesBtn();
  loadQuestion();
  resetQuiz();
  rockBtn();
  jazzBtn();
  hiphopBtn();
  classicalBtn();
  artistNavbar();
  helpNavModal();
});

// Function to hide landing page when enter button is clicked
const enterBtn = () => {
  ["landing-page", "canvas"].forEach(
    (id) => (document.getElementById(id).style.display = "none")
  );
  $(".navbar").removeClass("hidden");
};

// Enter button function
const enterBtnClick = () =>
  document.getElementById("enter-btn").addEventListener("click", enterBtn);
// Call function for event listener
enterBtnClick();

// Bootstrap custom modal

function helpNavModal() {
  const $helpLink = $("#help-link");
  // Show modal on click
  $helpLink.on("click", function (e) {
    e.preventDefault();
    const modal = new bootstrap.Modal(document.getElementById("help-modal"));
    modal.show();
  });
}

//Genre button functions
//Rock button
function rockBtn() {
  $("#rock-btn").on("click", function () {
    $("#home").addClass("hidden");
    $("#artist-profiles").removeClass("hidden");
    artistNavbar();

    // Card1
    //img
    $("#card1 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/xACAty33yiYLhilWWSje/xACAty33yiYLhilWWSje--1--hi4kq.jpg"
      );
    //h3
    $("#card1 h3").text("Rocky Runs Legacy");
    //paragragh
    $("#card1 p").text(
      "Born of Earth, forged among stars — Rocky Runs Legacy is more than a name, it’s a force! A legacy not bound by time or planet, but pulsing through space with rhythm, rebellion, and raw power."
    );
    //Award tags
    $("#card1-tag1").text("Universal Legacy Awards 3079");
    $("#card1-tag2").addClass("hidden");
    $("#card1-tag3").addClass("hidden");

    // Card2
    $("#card2 img")
      .first()
      .attr(
        "src",
        "https://images.nightcafe.studio/jobs/61leN4iNbacrNdcpssKj/61leN4iNbacrNdcpssKj--1--1ef60.jpg"
      );
    //h3
    $("#card2 h3").text("Polly-Hendrix");
    //paragragh
    $("#card2 p").text(
      "Half alien, half sheep, fully electric — Polly-Hendrix is a solo artist who blends woolly innocence with cosmic energy. Expect bleats, beats, and interstellar soul in every track."
    );
    //Award tags
    $("#card2-tag1").text("Solo Fleet Awards");
    $("#card2-tag3").addClass("hidden");

    //Card3
    $("#card3 img")
      .first()
      .attr(
        "src",
        "https://cdn.shopify.com/s/files/1/0270/2671/8799/files/wgGnras2IqKuOEplO1jp_6x_1b363f14-2d94-4167-a454-f9e7640fea0b_1024x1024.jpg?v=1645849892"
      );
    //h3
    $("#card3 h3").text("Dead-Nan's Tent");
    //paragragh
    $("#card3 p").text(
      "A nomadic act wrapped in velvet curtains and static dreams, Dead-Nan’s Tent channels lo-fi lullabies, forgotten radio signals, and stories only the stars remember. "
    );
    //Award tags
    $("#card3-tag1").text("Universal Legacy Awards 8879");
    $("#card3-tag2").addClass("hidden");
  });
}

//Jazz button
function jazzBtn() {
  $("#jazz-btn").on("click", function () {
    $("#home").addClass("hidden");
    $("#artist-profiles").removeClass("hidden");
    artistNavbar();
    // Card1
    //img
    $("#card1 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/383E6W3deCj6uVMdxRbk/383E6W3deCj6uVMdxRbk--1--1h1xv.jpg"
      );
    //h3
    $("#card1 h3").text("Aretha Frenchin");
    //paragragh
    $("#card1 p").text(
      "Hailing from the neon-lit corners of old Paris and new galaxies, her voice croons like a sax at midnight — smooth, unexpected, unforgettable."
    );
    //Award tags
    $("#card1-tag1").text("Universal Legacy Awards 8076");
    $("#card1-tag3").addClass("hidden");

    // Card2
    $("#card2 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/jqkeyRgTwTtujK5urQgR/jqkeyRgTwTtujK5urQgR--1--sc6qc.jpg"
      );
    //h3
    $("#card2 h3").text("Skipadi-bop-ba");
    //paragragh
    $("#card2 p").text(
      "With a signature mix of gritty horns, tight rhythms, and a splash of rebellious soul, they turn every stage into a smoky back-alley jazz den where the unexpected is the norm."
    );
    //Award tags card2
    $("#card2-tag2").addClass("hidden");
    $("#card2-tag3").addClass("hidden");

    //Card3
    $("#card3 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/GcwgXGN5phEecDXay1nh/GcwgXGN5phEecDXay1nh--4--z8im0.jpg"
      );
    //h3
    $("#card3 h3").text("Leroy Jefferson");
    //paragragh
    $("#card3 p").text(
      "Whether playing solo or with a band, his music moves hearts and minds alike — a true virtuoso whose keys unlock the spirit of every note."
    );
    //Award tags card3
    $("#card3-tag3").addClass("hidden");
  });
}

//Classical button
function classicalBtn() {
  $("#classical-btn").on("click", function () {
    $("#home").addClass("hidden");
    $("#artist-profiles").removeClass("hidden");
    artistNavbar();
    // Card1
    //img
    $("#card1 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/LsUfJrcKRat1P4uwDIGF/LsUfJrcKRat1P4uwDIGF--1--h88tb.jpg"
      );
    //h3
    $("#card1 h3").text("Baitheaven");
    //paragragh
    $("#card1 p").text(
      "This raccoon band’s energetic performances blend playful mischief with tight musicianship, creating a sound that’s both untamed and unforgettable."
    );
    // Card2
    $("#card2 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/01LI47XsNC3T4GNM4rFe/01LI47XsNC3T4GNM4rFe--1--bpl4q.jpg"
      );
    //h3
    $("#card2 h3").text("DreamOn");
    //paragragh
    $("#card2 p").text(
      "With a signature mix of gritty horns, tight rhythms, and a splash of rebellious soul, they turn every stage into a smoky back-alley jazz den where the unexpected is the norm."
    );
    //Card3
    $("#card3 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/ZrcjCilNCVHjHbUyYTjO/ZrcjCilNCVHjHbUyYTjO--1--gt8fv.jpg"
      );
    //h3
    $("#card3 h3").text("Nobody Ochestra");
    //paragragh
    $("#card3 p").text(
      "Their music drifts between shadow and light, crafting immersive experiences that invite listeners to explore the unseen corners of sound."
    );
  });
}

//Hip Hop button
function hiphopBtn() {
  $("#hiphop-btn").on("click", function () {
    $("#home").addClass("hidden");
    $("#artist-profiles").removeClass("hidden");
    artistNavbar();
    // Card1
    //img
    $("#card1 img")
      .first()
      .attr(
        "src",
        "https://creator.nightcafe.studio/jobs/8sxL4sB1dxe92hLUGiA7/8sxL4sB1dxe92hLUGiA7--1--pd2ot.jpg"
      );
    //h3
    $("#card1 h3").text("LDY Trible");
    //paragragh
    $("#card1 p").text(
      "With a commanding presence and heartfelt lyrics, she brings raw emotion and depth to every performance, inviting audiences into a world where jazz meets personal truth."
    );
    // Card2
    $("#card2 img")
      .first()
      .attr(
        "src",
        "https://images.nightcafe.studio/jobs/Kid8A6ZziJxdHxP7rjnq/Kid8A6ZziJxdHxP7rjnq--1--su3cj_5.9524x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max"
      );
    //h3
    $("#card2 h3").text("DJ Fleet");
    //paragragh
    $("#card2 p").text(
      "Known for his lightning-fast mixes and seamless transitions, he’s a master at reading the crowd and delivering high-energy sets that bridge genres and generations."
    );
    //Card3
    $("#card3 img")
      .first()
      .attr(
        "src",
        "https://images.nightcafe.studio/jobs/9GxF8VcMIXQzTk7HZ1YP/9GxF8VcMIXQzTk7HZ1YP--1--c8a3w_2x-real-esrgan-x4-plus.jpg?tr=w-1600,c-at_max"
      );
    //h3
    $("#card3 h3").text("A.W.A");
    //paragragh
    $("#card3 p").text(
      "This extraterrestrial crew isn’t here to phone home—they’re here to make noise. Aliens With Attitude: out of this world, unapologetically loud."
    );
  });
}

//Artist profiles
// Create close button when profiles displayed
function artistNavbar() {
  if (!$("#artist-profiles").hasClass("hidden")) {
    $(".games-btn")
      .text("Close")
      .off("click")
      .on("click", () => {
        $("#artist-profiles").addClass("hidden");
        $("#home").removeClass("hidden");
        $(".games-btn").text("Games");
        // To ensure the quiz game is available after clicking on artist profiles
        gamesBtn();
      });
  }
}

// Create infinite scroll with carousel indicators
const $track = $(".carousel-track");
const $cards = $(".carousel-card");
const $indicators = $(".indicator");
let currentIndex = 0;

function updateCarousel() {
  const $cards = $(".carousel-card");
  const slideWidth = $cards.eq(0).outerWidth(true);
  $track.css("transform", `translateX(-${slideWidth * currentIndex}px)`);
  $indicators.removeClass("active").eq(currentIndex).addClass("active");
  console.log("transform value:", $track.css("transform"));
}

$(".carousel-button.next").on("click", function () {
  //Go to the next card
  currentIndex = (currentIndex + 1) % $cards.length;
  updateCarousel();
});

$(".carousel-button.prev").on("click", function () {
  //Go to the previous card
  currentIndex = (currentIndex - 1 + $cards.length) % $cards.length;
  updateCarousel();
});

//Webkit API requesting full screen on carousel cards
$(".carousel-card").on("click", function () {
  if (this.requestFullscreen) {
    this.requestFullscreen();
  } else if (this.webkitRequestFullscreen) {
    this.webkitRequestFullscreen();
  } else if (this.msRequestFullscreen) {
    this.msRequestFullscreen();
  }
});

//Music Quiz
//Show quiz container when games button is clicked
const gamesBtn = () => {
  $(".games-btn").on("click", () => $("#quiz-container").removeClass("hidden"));
  //Hide home page & content when games button is clicked
  $(".games-btn").on("click", () => $("#home").addClass("hidden"));
  //Call reset quiz until more games are added
  $(".games-btn").on("click", () => resetQuiz());
};

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
    $("#quiz-options").append(
      `<button class="option-btn" data-index="${i}">${options}</button>`
    );
  });
  //Add genre css to add theme consistancy
  $(".option-btn").addClass("genre");
};

// Selecting correct answer for music quiz
$("#quiz-options").on("click", ".option-btn", (e) => {
  const selected = $(e.target).text();
  const correct = quizData[currentQuestion].answer[0];
  //score++ will only run if correct answer is selected
  selected === correct && score++;
  // loadQuestion is called unless its the last one
  if (currentQuestion < quizData.length - 1) {
  currentQuestion++;
  loadQuestion();
} else {
  showScore(score, quizData.length);
}
});

// Show score function
const showScore = (score, total) => {
  $("#quiz-container").addClass("hidden");
  $("#quiz-score").removeClass("hidden");
  $("#score-message").text(`You scored ${score} out of ${total}`);
  $("#return-home-btn").removeClass("hidden");
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

//Ensure button calls restarQuiz function
$("#restart-btn").on("click", () => {
  resetQuiz();
});

//Show return home button at quiz end
$("#return-home-btn").on("click", () => {
  $("#quiz-score").addClass("hidden");
  $("#home").removeClass("hidden");
});
//Add consistent theme to return-home button
$("#return-home-btn").addClass("genre");

$("#exit-quiz-btn").on("click", () => {
  $("#quiz-container").addClass("hidden");
  $("#home").removeClass("hidden");
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
    options: ["Drum & Bass", "Jazz", "Rock", "Classical"],
    answer: ["Drum & Bass"],
  },
  {
    question:
      "Who was the first woman to have four country albums reach No. 1 on the Billboard 200?",
    options: [
      "Carrie Underwood",
      "Dolly Parton",
      "Taylor Swift",
      "Shania Twain",
    ],
    answer: ["Carrie Underwood"],
  },
  {
    question: "Who sang the Spongebob Squarepants theme song for the movie?",
    options: ["Avril Lavigne", "Frank & The Walters", "Sugarbabes", "Busted"],
    answer: ["Avril Lavigne"],
  },
  {
    question: "Who is the frontman of 30 Seconds to Mars?",
    options: ["Jared Leto", "James Lerore", "Leo Jared", "Jared Leo"],
    answer: ["Jared Leto"],
  },
  {
    question: "Which member of Kiss wore makeup to look like a cat?",
    options: ["Peter Criss", "Paul Stanley", "Vinnie Vincent", "Gene Simmons"],
    answer: ["Peter Criss"],
  },
  {
    question: "John Mayer wrote a song about which law of physics?",
    options: ["Gravity", "Nuclear ", "Conservation", "Electromagnetism"],
    answer: ["Gravity"],
  },
];

/** Export functions to work simultaneously with
 * node and browser enviroments
 */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    enterBtn,
    enterBtnClick,
    gamesBtn,
    loadQuestion,
    quizData,
    currentQuestion,
    showScore,
    getScore: () => score,
    getCurrentQuestion: () => currentQuestion,
    resetQuiz,
    startQuiz,
    rockBtn,
    jazzBtn,
    hiphopBtn,
    classicalBtn,
    artistNavbar,
    updateCarousel,
    helpNavModal,
  };
}
