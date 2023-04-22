var btn = document.getElementById("btn");
var not = document.getElementById("not");
var respond = document.getElementById("respond");
var guess = document.getElementById("guess").value;
var diff = Number(guess) - Number(not.value);

if (Math.abs(Number(guess)) < Number(not)) {
  respond.textContent = "guess higher";
} else if (Math.abs(Number(guess)) > Number(not)) {
  respond.textContent = "guess lower";
} else {
  respond.textContent = "Getting hotter";
}

function ans() {
  var no = Math.floor(Math.random() * 100);

  not.textContent = no;
}

btn.addEventListener("click", ans);
