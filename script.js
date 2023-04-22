var btn = document.getElementById("btn");
var respond = document.getElementById("respond");

function ans() {
  var no = Math.floor(Math.random() * 100);
  alert("u have clciked ");
  respond.textContent = no;
}

btn.addEventListener("click", ans);
