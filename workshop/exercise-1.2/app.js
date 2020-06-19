// Exercise 1.2
// ------------
console.log("exercise 1.2");
const body = document.querySelector("body");
const result = document.getElementById("result");
const time = document.getElementById("time");
body.style.backgroundImage =
  "radial-gradient(circle, violet,blue,violet,blue,violet,blue,purple)";
body.style.color = "white";
body.style.fontSize = "40px";
body.style.height = "100vh";
body.style.width = "100vw";

let = randomTime = Math.ceil(Math.random() * 5);
time.innerText = randomTime;

let gameOver = false;
let gameWon = false;

setTimeout(function () {
  if (gameWon === false) {
    gameOver = true;
    result.innerText = "You Lose!";
    body.removeEventListener("click", checkClick);
  }
}, 1000 * randomTime);

let checkClick = function () {
  if (gameOver === false) {
    gameWon = true;
    result.innerText = "You win!";
    body.removeEventListener("click", checkClick);
  }
};

body.addEventListener("click", checkClick);
