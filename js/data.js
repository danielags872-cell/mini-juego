let memories = [
  {
    text: "Nuestro concierto juntos 🎤",
    image: "assets/memories/concierto1.jpg",
    unlocked: false
  },
  {
    text: "Cuando Mia llegó 🐶",
    image: "assets/memories/mia1.jpg",
    unlocked: false
  },
  {
    text: "Nosotros 💕",
    image: "assets/memories/ustedes1.jpg",
    unlocked: false
  }
];

function unlockMemory() {
  let m = memories.find(x => !x.unlocked);
  if (!m) return;

  m.unlocked = true;

  let div = document.getElementById("memories");
  div.innerHTML += `
    <div class="memory">
      <p>${m.text}</p>
      <img src="${m.image}" width="200">
    </div>
  `;

  saveGame();
}
