const main = document.getElementById("main");
main.style.width = "100vh";
main.style.height = "100vh";

let colorShift = function (event) {
  console.log("inside color shift", event.target);
  if (event.target.classList.contains("red")) {
    event.target.classList.remove("red");
    event.target.classList.add("green");
  } else {
    event.target.classList.remove("green");
    event.target.classList.add("red");
  }
};

for (let i = 0; i <= 20; i++) {
  const btn = document.createElement("button");
  const ranTop = Math.floor(Math.random() * 100);
  const ranLeft = Math.floor(Math.random() * 100);
  console.log(ranTop, " ", ranLeft);
  btn.innerHTML = i;
  btn.id = `btn-id${i}`;
  btn.classList.add("red");
  btn.style.position = "absolute";
  btn.style.top = ranTop + "%";
  btn.style.left = ranLeft + "%";
  btn.style.borderRadius = "50%";
  main.appendChild(btn);
  btn.addEventListener("click", colorShift);
}
