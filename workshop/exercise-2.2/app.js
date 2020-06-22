const main = document.getElementById("main");

let colorShift = function (event) {
  console.log(event.target.classList);
  if (event.target.classList.contains("red")) {
    event.target.classList.remove("red");
    event.target.classList.add("green");
  } else {
    event.target.classList.remove("green");
    event.target.classList.add("red");
  }
};

/*
when you add the event Listener, the event object gets created (by the listener)
this object has event.target property, which says this particular
event is realted to this html element
this code uses event object 
connects the function to the right html element
this function is attached to every button on the screen, all 20
the event.target tells which button this particular event is for

understanding events and raising events is important
raising and handling events is how we do stuff on the browser
so it's very important
*/

for (let i = 0; i <= 20; i++) {
  const btn = document.createElement("button");
  btn.classList.add("red");
  btn.innerHTML = i;
  btn.id = `btn-id${i}`;
  main.appendChild(btn);
  btn.addEventListener("click", colorShift);
}

/* how to remove a class htmldomremove class
when you click, it checks if its red, then turns green, 
and vice versa
and it does that by checking the classlist if it contains 
red or green and it does that by checking my 
if its green, add red remove green
else opposite

add
document.getElementById("myDIV").classList.add("mystyle");

*/
