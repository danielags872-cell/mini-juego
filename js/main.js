function saveGame() {
  localStorage.setItem("miaGame", JSON.stringify(memories));
}

function loadGame() {
  let data = localStorage.getItem("miaGame");
  if (data) memories = JSON.parse(data);
}

loadGame();

setInterval(() => {
  document.getElementById("mia").src = "assets/mia_durmiendo.png";
  document.getElementById("status").innerText = "Mia tiene sueño 💤";
}, 30000);
