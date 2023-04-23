var btn = document.getElementById("btn");
var not = document.getElementById("not");
var respond = document.getElementById("respond");

function guess() {
  var guessValue = Number(document.getElementById("guess").value);
  var diff = guessValue - Number(not.value);

  if (Math.abs(diff) < Math.abs(guessValue - Number(not.value))) {
    respond.textContent = "Getting hotter";
  } else if (guessValue < Number(not.value)) {
    respond.textContent = "guess higher";
  } else if (guessValue > Number(not.value)) {
    respond.textContent = "guess lower";
  } else {
    respond.textContent = "You got it!";
  }
}

function ans() {
  var no = Math.floor(Math.random() * 100);
  not.textContent = no;
}

btn.addEventListener("click", function() {
  guess();
  ans();
});
