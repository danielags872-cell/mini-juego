let memories = [
  {
    text: "Nuestro concierto juntos 🎤",
    images: [
      "assets/memories/concierto1.jpeg",
      "assets/memories/concierto2.jpeg",
      "assets/memories/concierto3.jpeg"
    ],
    unlocked: false
  },
  {
    text: "Nosotros 💕",
    images: [
      "assets/memories/ustedes1.jpeg",
      "assets/memories/ustedes2.jpeg"
    ],
    unlocked: false
  },
  {
    text: "Mia 🐶",
    images: [
      "assets/memories/mia1.jpeg",
      "assets/memories/mia2.jpeg"
    ],
    unlocked: false
  }
];

function unlockMemory() {
  let m = memories.find(x => !x.unlocked);
  if (!m) return;

  m.unlocked = true;

  let div = document.getElementById("memories");

  let imagesHTML = m.images.map(img => {
    return `<img src="${img}" width="120" style="margin:5px; border-radius:10px;">`;
  }).join("");

  div.innerHTML += `
    <div class="memory">
      <p>${m.text}</p>
      ${imagesHTML}
    </div>
  `;

  // feedback
  alert("💖 Recuerdo desbloqueado");

  saveGame();
}
