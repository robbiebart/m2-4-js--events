// Exercise 1.1
// ------------
console.log("exercise 1.1");

const body = document.querySelector("body");
const result = document.getElementById("result");
// body.innerText = "Be a quicker clicker!";
const myTextBox = document.createElement("div");
myTextBox.id = "myTextBox";
myTextBox.innerText = "Be a quicker clicker!";
body.insertBefore(myTextBox, body.childNodes[0]);
// append child but you get to decide where
// child nodes is every element inside body
body.style.backgroundImage =
  "radial-gradient(circle, red,orange,yellow,green,blue,indigo,violet)";
body.style.color = "white";
body.style.fontSize = "40px";
body.style.height = "100vh";
body.style.width = "100vw";

let gameOver = false;
let gameWon = false;

setTimeout(function () {
  if (gameWon === false) {
    gameOver = true;
    result.innerText = "You Lose!";
    body.removeEventListener("click", checkClick);
  }
}, 5000);

let checkClick = function () {
  if (gameOver === false) {
    gameWon = true;
    result.innerText = "You win!";
    body.removeEventListener("click", checkClick);
  }
};

body.addEventListener("click", checkClick);

/* haven't removed event listener
its always best practice to remove it
at the end of the function run removeEventListener
*/
