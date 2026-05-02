let pet = {
  hunger: 50,
  happiness: 80
};

function feed() {
  pet.hunger -= 10;

  document.getElementById("mia").src = "assets/mia_comiendo.png";
  updateStatus("Mia está comiendo 🍩");

  setTimeout(() => {
    document.getElementById("mia").src = "assets/mia_normal.png";
  }, 2000);
}

function play() {
  pet.happiness += 10;

  document.getElementById("mia").src = "assets/mia_jugando.png";
  updateStatus("Mia está jugando 💕");

  setTimeout(() => {
    document.getElementById("mia").src = "assets/mia_feliz.png";
  }, 2000);
}

function updateStatus(msg) {
  document.getElementById("status").innerText = msg;
  saveGame();
}
