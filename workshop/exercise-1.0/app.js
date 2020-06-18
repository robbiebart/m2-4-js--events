// Exercise 1.0
// ------------
// console.log('exercise-1');

const body = document.querySelector("body");

const game = function () {
  console.log("exercise-1");
  body.innerText = "You win!";
  body.appendChild(main);
};

body.addEventListener("click", game);

/* notes for self: the event listener runs function game 
when a click happens, you do not need an if; line 5
selects the whole body, line 13 sets the condition, 
and the code in const runs only if that condition 
happens

*/
