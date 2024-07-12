const data = [
  {
    step: 1,
    title: "Draw the axis and name VP & HP",
    questions: [
      {
        question: "We are dealing with projection of ?",
        options: ["Solids", "Planes", "Points", "Lines"],
        answer: 0,
        buttonClass: "btnAxis",
      },
      {
        question:
          "Is the centre-to-centre distance between any two objects abbreviated as?",
        options: ["c/c", "C/C", "cc", "CC"],
        answer: 1,
        buttonClass: "btnVPHP",
      },
    ],
  },
  {
    step: 2,
    title: "Draw the front view of Pyramid",
    questions: [
      {
        question: "Number of edges in square pyramid________",
        options: ["6", "7", "8", "5"],
        answer: 2,
        buttonClass: "btnPyramid",
      },
      {
        question: "Number of vertices in a square pyramid_________",
        options: ["4", "6", "5", "7"],
        answer: 2,
        buttonClass: "btnA",
      },
    ],
  },
  {
    step: 3,
    title: "Draw the top view of Pyramid",
    questions: [
      {
        question: "Angle of inclination of the axis wrt VP?",
        options: ["30", "45", "60", "90"],
        answer: 1,
        buttonClass: "btnC",
      },
    ],
  },
  {
    step: 4,
    title: "Draw the apparent top view of Pyramid",
    questions: [
      {
        question: "What is another name for a square pyramid?",
        options: ["Pentahedron", "Decahedron", "octahedron", "hexahedron"],
        answer: 0,
        buttonClass: "btnB",
      },
    ],
  },
  {
    step: 5,
    title: "Draw the apparent front view of Pyramid",
    questions: [
      {
        question: "Number of faces in square pyramid?",
        options: ["3", "5", "6", "9"],
        answer: 1,
        buttonClass: "btnD",
      },
    ],
  },
  {
    step: 6,
    title: "Draw the front view when axis of pyramid is inclined to Vp by α",
    questions: [
      {
        question: "The top vertex or point of the pyramid is called",
        options: ["Base", "Lateral faces", "Apex", "Edge"],
        answer: 2,
        buttonClass: "btnE",
      },
    ],
  },
  {
    step: 7,
    title: "Draw the top view of pyramid whose axis makes α with VP",
    questions: [
      {
        question: "The Top view of an object is viewed on which plane?",
        options: [
          "Horizontal Plane",
          "Parallel Plane",
          "Vertical Plane",
          "Profile Plane",
        ],
        answer: 0,
        buttonClass: "btnF",
      },
    ],
  },
  {
    step: 8,
    title: "Draw the final top view as required",
    questions: [
      {
        question: "The front view of an object is viewed on which plane?",
        options: [
          "Horizontal Plane",
          "Parallel Plane",
          "Vertical Plane",
          "Profile Plane",
        ],
        answer: 2,
        buttonClass: "btnG",
      },
    ],
  },
];
const quizDiv = document.querySelector(".quiz-div");
const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const questionBtnDiv = document.querySelector(".question-btn");
const practiceDiv = document.querySelector(".practice");
const canvas = document.querySelector("#simscreen");
const ctx = canvas.getContext("2d");
let currentStepCount = 1;
let currentStep;
let currentQuestions;
let currentQuestionIndex = 0;

// stepNo & Step TITLE
const stepNumber = document.querySelector(".practice-step-no");
const stepTitle = document.querySelector(".practice-step-info");

// buttons
const btnAxis = document.querySelector(".btn-axis");
btnAxis.addEventListener("click", drawAxis);
const btnVPHP = document.querySelector(".btn-vp-hp");
btnVPHP.addEventListener("click", nameVPHP);
const btnPyramid = document.querySelector(".btn-pyramid");
btnPyramid.addEventListener("click", drawPyramid);
const btnA = document.querySelector(".btn-a");
btnA.addEventListener("click", () => a());
const btnC = document.querySelector(".btn-c");
btnC.addEventListener("click", () => b());
const btnB = document.querySelector(".btn-b");
btnB.addEventListener("click", () => c());
const btnD = document.querySelector(".btn-d");
btnD.addEventListener("click", () => d());
const btnE = document.querySelector(".btn-e");
btnE.addEventListener("click", () => e());
const btnF = document.querySelector(".btn-f");
btnF.addEventListener("click", () => f());
const btnG = document.querySelector(".btn-g");
btnG.addEventListener("click", () => g());
const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", nextStep);
const btnReset = document.querySelector(".btn-reset");
btnReset.addEventListener("click", resetAll);
const btnTop = document.querySelector(".btn-top");
btnTop.addEventListener("click", movetoTop);
const validateAnswer = document.createElement("span");
validateAnswer.classList.add("validate");

function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });
  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
  }
  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
  }
  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    if (currentStep === undefined) initialSetup();
  }
}

function nextStep() {
  currentStep = data.find((step) => currentStepCount === step.step);
  stepNumber.textContent = currentStepCount;
  stepTitle.textContent = currentStep.title;
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("blink");
  initialSetup();
}

function nextQuestion() {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    displayQuestionDiv(currentQuestions[currentQuestionIndex]);
  } else {
    quizDiv.classList.add("hide");
    if (currentStepCount === data.length) {
      stepNumber.classList.add("hide");
      stepTitle.classList.add("hide");
      document.querySelector(".final-statement").classList.remove("hide");
      btnNext.classList.add("hide");
      btnNext.classList.remove("blink");
    } else {
      currentStepCount += 1;
      btnNext.removeAttribute("disabled");
      btnNext.classList.add("blink");
    }
  }
}
function drawAxis() {
  canvas.classList.remove("hide");
  canvas.scrollIntoView();
  btnTop.classList.remove("hide");
  ctx.strokeStyle = "#B9B6B1";
  animate(30, 250, 680, 250, 0, nameAxis);
}

function nameAxis() {
  ctx.font = "bold 20px Nunito sans MS";
  ctx.fillText("X", 10, 255);
  ctx.fillText("Y", 690, 255);
  btnAxis.classList.add("hide");
  nextQuestion();
}

function nameVPHP() {
  ctx.fillText("HP", 40, 240);
  ctx.fillText("VP", 40, 270);
  btnVPHP.classList.add("hide");
  nextQuestion();
}

function drawLine(x1, y1, x2, y2, ratio) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.moveTo(x1, y1);
  x2 = x1 + ratio * (x2 - x1);
  y2 = y1 + ratio * (y2 - y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function animate(x1, y1, x2, y2, ratio, cb) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio, cb);
  if (ratio > 1) {
    cb();
  } else if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animate(x1, y1, x2, y2, ratio + 0.02, cb);
    });
  }
}
// function animate(x1, y1, x2, y2, ratio) {
//   ratio = ratio || 0;
//   drawLine(x1, y1, x2, y2, ratio);
//   if (ratio < 1) {
//     requestAnimationFrame(function () {
//       animate(x1, y1, x2, y2, ratio + 0.02);
//     });
//   }
// }

function animateRecursively(x1, y1, x2, y2, ratio) {
  ratio = ratio || 0;
  drawLine(x1, y1, x2, y2, ratio);
  if (ratio < 1) {
    animationStatus = true;
    requestAnimationFrame(function () {
      animateRecursively(x1, y1, x2, y2, ratio + 0.02);
    });
  }
}

function initialSetup() {
  currentStep = data.find((d) => d.step == currentStepCount);
  stepNumber.textContent = currentStepCount;
  stepTitle.textContent = currentStep.title;
  currentQuestions = currentStep.questions;
  currentQuestionIndex = 0;
  quizDiv.classList.remove("hide");
  displayQuestionDiv(currentQuestions[currentQuestionIndex]);
}

function displayQuestionDiv(questions) {
  const { question, options, answer, buttonClass } = questions;
  questionDiv.innerHTML = `${currentQuestionIndex + 1}. ${question}`;
  answersDiv.innerHTML = "";
  options.map((option, index) => {
    answersDiv.innerHTML += `
    <div class="input-group">
    <input type="radio" name="${question}" id="ans${index}" class="option" onchange='checkAnswer(this, ${index}, ${answer}, ${buttonClass})'>
    <label for="rad1">${option}</label>
  </div>
    `;
  });
}

function checkAnswer(ele, index, answer, buttonClass) {
  const optionSelected = ele.parentNode;
  optionSelected.classList.remove("wrong");
  optionSelected.classList.remove("correct");
  if (index === answer) {
    optionSelected.classList.add("correct");
    buttonClass.classList.add("anim");
    buttonClass.classList.remove("hide");
    validateAnswer.innerHTML = "Right answer👍";
    answersDiv.appendChild(validateAnswer);
  } else {
    optionSelected.classList.add("wrong");
    buttonClass.classList.remove("anim");
    buttonClass.classList.add("hide");
    validateAnswer.innerHTML = "Wrong answer, please check the options again👎";
    answersDiv.appendChild(validateAnswer);
  }
}
function resetAll() {
  ctx.clearRect(0, 0, 750, 500);
  currentStepCount = 1;
  currentStep;
  currentQuestions;
  currentQuestionIndex = 0;
  initialSetup();
  document.querySelectorAll(".btn").forEach((b) => b.classList.add("hide"));
  btnNext.setAttribute("disabled", true);
  btnNext.classList.remove("hide");
  btnReset.classList.remove("hide");
  stepNumber.classList.remove("hide");
  stepTitle.classList.remove("hide");
  document.querySelector(".final-statement").classList.add("hide");
  canvas.classList.add("hide");
}

function movetoTop() {
  practiceDiv.scrollIntoView();
}

function drawPyramid() {
  ctx.lineWidth = "2";
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.moveTo(100, 300);
  ctx.lineTo(100, 375);
  ctx.stroke();
  ctx.lineTo(175, 375);
  ctx.stroke();
  ctx.lineTo(100, 300);
  ctx.stroke();
  ctx.lineTo(175, 300);
  ctx.stroke();
  ctx.lineTo(100, 375);
  ctx.stroke();
  ctx.moveTo(175, 300);
  ctx.lineTo(175, 375);
  ctx.stroke();
  ctx.closePath();
  ctx.font = "bold 15px Arial";
  ctx.fillText("a", 95, 300);
  ctx.fillText("d", 177, 375);
  ctx.fillText(
    "b",
    100 + 50 * Math.cos(Math.PI / 10) + 50 * Math.sin(Math.PI / 5),
    295
  );
  ctx.fillText("Solid lines", 30, 440);
  ctx.fillText("Projection lines", 30, 465);
  ctx.fillText("c", 100 + 50 * Math.cos(Math.PI / 10), 342);
  ctx.fillText("e", 90, 375);
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(10, 435);
  ctx.arc(10, 435, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#3590ae";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(10, 460);
  ctx.arc(10, 460, 7, 0, 2 * Math.PI);
  ctx.fillStyle = "#d9b28a";
  ctx.fill();
  ctx.closePath();
  btnPyramid.classList.add("hide");
  nextQuestion();
}

function a() {
  ctx.fillStyle = "black";
  ctx.fillText("a'(e')", 70, 240);
  ctx.fillText("d'(b')", 185, 240);
  ctx.beginPath();
  ctx.strokeStyle = "#3590ae";
  ctx.moveTo(100, 250);
  ctx.lineTo(175, 250);
  ctx.lineTo(137, 100);
  ctx.lineTo(100, 250);
  ctx.stroke();
  ctx.setLineDash([5, 10]);
  ctx.moveTo(137, 250);
  ctx.lineTo(137, 100);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  ctx.setLineDash([]);
  animateRecursively(100, 250, 100, 300, 0);
  animateRecursively(137, 250, 137, 337, 0);
  animateRecursively(175, 250, 175, 300, 0);
  ctx.closePath();
  btnA.classList.add("hide");
  nextQuestion();
}

function b() {
  ctx.strokeStyle = "#3590ae";
  ctx.fillText("a'(e')", 240, 160);
  ctx.fillText("d('b')", 235, 240);
  ctx.fillText("c'", 420, 230);
  ctx.beginPath();
  ctx.setLineDash([5, 10]);
  ctx.moveTo(230 + 75 / Math.sqrt(17) / 2, 250 - 300 / Math.sqrt(17) / 2);
  ctx.lineTo(417, 250);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.setLineDash([]);
  animateRecursively(230, 250, 417, 250, 0);
  animateRecursively(
    230,
    250,
    230 + 75 / Math.sqrt(17),
    250 - 300 / Math.sqrt(17),
    0
  );
  animateRecursively(
    230 + 75 / Math.sqrt(17),
    250 - 300 / Math.sqrt(17),
    417,
    250,
    0
  );

  ctx.closePath();
  btnC.classList.add("hide");
  nextQuestion();
}

function c() {
  ctx.beginPath();
  ctx.fillText("b", 215, 295);
  ctx.fillText("a", 250, 295);
  ctx.fillText("d", 215, 375);
  ctx.fillText("e", 250, 375);
  ctx.strokeStyle = "#d9b28a";
  animateRecursively(230, 250, 230, 400);
  animateRecursively(417, 250, 417, 400);
  animateRecursively(
    230 + 75 / Math.sqrt(17),
    250 - 300 / Math.sqrt(17),
    230 + 75 / Math.sqrt(17),
    400
  );
  animateRecursively(175, 300, 417, 300);
  animateRecursively(137, 337, 417, 337);
  animateRecursively(175, 375, 417, 375);
  animateRecursively(
    230 + 75 / (2 * Math.sqrt(17)),
    250 - 300 / (2 * Math.sqrt(17)),
    230 + 75 / (2 * Math.sqrt(17)),
    337
  );

  ctx.closePath();
  btnB.classList.add("hide");
  nextQuestion();
}

function d() {
  ctx.beginPath();
  ctx.strokeStyle = "#00688B";
  ctx.lineWidth = "2";
  ctx.moveTo(230 + 75 / Math.sqrt(17), 300);
  ctx.lineTo(230, 300);
  ctx.lineTo(230, 375);
  ctx.lineTo(230 + 75 / Math.sqrt(17), 375);
  ctx.lineTo(230 + 75 / Math.sqrt(17), 300);
  animateRecursively(230 + 75 / Math.sqrt(17), 300, 230, 300, 0);
  animateRecursively(230, 300, 230, 375, 0);
  animateRecursively(230, 375, 230 + 75 / Math.sqrt(17), 375, 0);
  animateRecursively(
    230 + 75 / Math.sqrt(17),
    375,
    230 + 75 / Math.sqrt(17),
    300,
    0
  );
  animateRecursively(230 + 75 / Math.sqrt(17), 300, 417, 337, 0);
  animateRecursively(230 + 75 / Math.sqrt(17), 375, 417, 337, 0);
  ctx.stroke();
  ctx.closePath();
  btnD.classList.add("hide");
  nextQuestion();
}

function e() {
  ctx.beginPath();
  ctx.arc(600, 250, 30, (3 * Math.PI) / 4, Math.PI);
  ctx.fillText("α", 550, 270);
  ctx.stroke();
  ctx.strokeStyle = "black";
  ctx.moveTo(600, 250);
  ctx.lineTo(
    600 - 250 * Math.cos(Math.PI / 4),
    250 + 250 * Math.sin(Math.PI / 4)
  );
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.strokeStyle = "#0c81a8";
  ctx.lineWidth = "2";
  ctx.moveTo(570 + 26.5 + 5, 280 + 26.5 - 5);
  ctx.lineTo(570 - 119.5 + 5, 280 + 119.5 - 5);
  ctx.lineTo(570 - 119.5 + 53 + 5, 280 + 119.5 + 53 - 5);
  ctx.lineTo(570 + 26.5 + 5, 280 + 26.5 - 5);
  ctx.moveTo(570 - 119.5 + 5, 280 + 119.5 - 5);
  ctx.lineTo(570 - 119.5 - 18 + 5, 280 + 119.5 + 18 - 5);
  ctx.lineTo(570 - 119.5 - 18 + 53 + 5, 280 + 119.5 + 53 + 18 - 5);
  ctx.lineTo(570 - 119.5 + 53 + 5, 280 + 119.5 + 53 - 5);
  ctx.stroke();
  ctx.fillText("a", 570 - 130, 280 + 119.5 - 5);
  ctx.fillText("b", 570 - 130 - 18, 280 + 119.5 - 5 + 18);
  ctx.fillText("e", 570 - 130 + 75, 280 + 119.5 + 50);
  ctx.fillText("d", 570 - 130 - 18 + 80, 280 + 119.5 + 18 + 50);
  ctx.closePath();
  btnE.classList.add("hide");
  nextQuestion();
}

function f() {
  ctx.beginPath();
  ctx.strokeStyle = "#d9b28a";
  animateRecursively(570 + 26.5 + 5, 280 + 26.5 - 5, 570 + 26.5 + 5, 150, 0);
  animateRecursively(570 - 119.5 + 5, 280 + 119.5 - 5, 570 - 119.5 + 5, 150, 0);
  animateRecursively(
    570 - 119.5 + 53 + 5,
    280 + 119.5 + 53 - 5,
    570 - 119.5 + 53 + 5,
    150,
    0
  );
  animateRecursively(
    570 - 119.5 - 18 + 5,
    280 + 119.5 + 18 - 5,
    570 - 119.5 - 18 + 5,
    150,
    0
  );
  animateRecursively(
    570 - 119.5 - 18 + 53 + 5,
    280 + 119.5 + 53 + 18 - 5,
    570 - 119.5 - 18 + 53 + 5,
    150,
    0
  );
  animateRecursively(
    570 - 119.5 + 53 + 5,
    280 + 119.5 + 53 - 5,
    570 - 119.5 + 53 + 5,
    150
  );
  animateRecursively(
    230 + 75 / Math.sqrt(17),
    250 - 300 / Math.sqrt(17),
    600,
    250 - 300 / Math.sqrt(17),
    0
  );
  animateRecursively(
    230 + 75 / Math.sqrt(17) / 2,
    250 - 300 / Math.sqrt(17) / 2,
    600,
    250 - 300 / Math.sqrt(17) / 2,
    0
  );
  ctx.fillText("a'", 570 - 130, 240 - 300 / Math.sqrt(17));
  ctx.fillText("b'", 570 - 120, 243);
  ctx.fillText("e'", 570 - 130 + 75, 240 - 300 / Math.sqrt(17));
  ctx.fillText("d'", 570 - 130 - 16 + 80, 245);
  ctx.closePath();
  btnF.classList.add("hide");
  nextQuestion();
}

function g() {
  ctx.beginPath();
  ctx.strokeStyle = "#0c81a8";
  ctx.beginPath();
  ctx.setLineDash([5, 10]);
  ctx.moveTo(570 - 119.5 + 5, 250 - 300 / Math.sqrt(17));
  ctx.lineTo(570 + 26.5 + 5, 250);
  ctx.stroke();
  ctx.beginPath();
  ctx.setLineDash([]);
  animateRecursively(
    570 - 119.5 + 53 + 5 - 18,
    250,
    570 - 119.5 + 53 + 5,
    250 - 300 / Math.sqrt(17),
    0
  );
  animateRecursively(
    570 - 119.5 + 53 + 5 - 18,
    250,
    570 - 119.5 - 18 + 5,
    250,
    0
  );
  animateRecursively(
    570 - 119.5 - 18 + 5,
    250,
    570 - 119.5 + 5,
    250 - 300 / Math.sqrt(17),
    0
  );
  animateRecursively(
    570 - 119.5 + 5,
    250 - 300 / Math.sqrt(17),
    570 - 119.5 + 53 + 5,
    250 - 300 / Math.sqrt(17),
    0
  );
  animateRecursively(
    570 - 119.5 + 5 + 53,
    250 - 300 / Math.sqrt(17),
    570 + 26.5 + 5,
    250,
    0
  );
  animateRecursively(570 - 119.5 - 18 + 5 + 53, 250, 570 + 26.5 + 5, 250, 0);
  btnG.classList.add("hide");
  nextQuestion();
}
