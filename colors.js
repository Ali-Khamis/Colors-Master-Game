const restart = document.querySelector(".restart");
const headerDiv = document.querySelector("#rgb");
const easy = document.querySelector(".difficultyEasy");
const hard = document.querySelector(".difficultyHard");
const headerChange = document.querySelector("#changing");
const result = document.querySelector(".result");
const boxes = document.querySelectorAll(".boxes-grid");
var WinningColorIndex;
var modeEasy = false;
function visible() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.visibility = "visible";
  }
}
function rng(s) {
  var o = Math.round,
    r = Math.random;
  return o(r() * s);
}
function restarting() {
  if (modeEasy == true) {
    easyMode();
  } else {
    hardMode();
  }
}
function hardMode() {
  hard.className += " difficultySelected";
  easy.classList.remove("difficultySelected");
  headerChange.style.background = " rgb(98, 156, 223)";
  modeEasy = false;
  visible();
  result.innerHTML = "";
  restart.innerHTML = "new color";
  const rgb = [];
  var winner;
  WinningColorIndex = rng(5);
  for (let i = 0; i < boxes.length; i++) {
    rgb[i] = "rgb(" + rng(255) + ", " + rng(255) + ", " + rng(255) + ")";
    boxes[i].style.background = rgb[i];
  }
  headerDiv.innerHTML = rgb[WinningColorIndex];

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
      if (winner == true) {
        return true;
      }
      if (i != WinningColorIndex) {
        boxes[i].style.visibility = "hidden";
        result.innerHTML = " wrong!";
        result.style.color = "red";
      } else {
        result.innerHTML = " correct!";
        result.style.color = "green";
        restart.innerHTML = "play again?!";
        result.id = "winner";
        winner = true;
        headerChange.style.background = rgb[WinningColorIndex];
        boxes.forEach((box) => {
          box.style.background = rgb[WinningColorIndex];
        });
      }
    });
  }
}
function easyMode() {
  modeEasy = true;
  headerChange.style.background = " rgb(98, 156, 223)";
  easy.className += " difficultySelected";
  hard.classList.remove("difficultySelected");
  restart.innerHTML = "new color";
  visible();
  for (let i = 3; i < 6; i++) {
    boxes[i].style.visibility = " hidden";
  }
  result.innerHTML = "";
  const rgb = [];
  var winner;
  WinningColorIndex = rng(2);
  for (let i = 0; i < boxes.length / 2; i++) {
    rgb[i] = "rgb(" + rng(255) + ", " + rng(255) + ", " + rng(255) + ")";
    boxes[i].style.background = rgb[i];
  }
  headerDiv.innerHTML = rgb[WinningColorIndex];
  for (let i = 0; i < boxes.length / 2; i++) {
    boxes[i].addEventListener("click", function () {
      if (winner == true) {
        return true;
      }
      if (i != WinningColorIndex) {
        boxes[i].style.visibility = "hidden";
        result.innerHTML = " wrong!";
        result.style.color = "red";
        3;
      } else {
        result.innerHTML = " correct!";
        result.style.color = "green";
        restart.innerHTML = "play again?!";
        result.id = "winner";
        winner = true;
        headerChange.style.background = rgb[WinningColorIndex];
        boxes.forEach((box) => {
          box.style.background = rgb[WinningColorIndex];
        });
      }
    });
  }
}
restarting();
restart.addEventListener("click", restarting);
hard.addEventListener("click", hardMode);
easy.addEventListener("click", easyMode);
