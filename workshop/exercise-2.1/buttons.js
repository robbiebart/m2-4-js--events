console.log("exercise 2.1");

const main = document.getElementById("main");

main.style.height = "50vh";
main.style.width = "50vh";

let turnGreen = function () {
  const buttonId = event.target.id;
  document.getElementById(buttonId).classList.add("green");
};

for (let i = 1; i <= 20; i++) {
  const btn = document.createElement("button");
  btn.innerHTML = "click me";
  btn.id = `btn-${i}`;
  main.appendChild(btn);
  btn.addEventListener("click", turnGreen);
}

/* how to remove a class htmldomremove class
when you click, it checks if its red, then turns green, 
and vice versa
and it does that by checking the classlist if it contains 
red or green and it does that by checking my 
if its green, add red remove green
else opposite
*/