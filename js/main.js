function saveGame() {
  localStorage.setItem("miaGame", JSON.stringify(memories));
}

function loadGame() {
  let data = localStorage.getItem("miaGame");
  if (data) memories = JSON.parse(data);
}

loadGame();
