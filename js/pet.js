let pet = {
  hunger: 50,
  happiness: 80,
};

function feed() {
  pet.hunger -= 10;
  updateStatus("Mia comió 🍩 y está feliz");
}

function play() {
  pet.happiness += 10;
  updateStatus("Mia está jugando contigo 💕");
}

function updateStatus(msg) {
  document.getElementById("status").innerText = msg;
  saveGame();
}
