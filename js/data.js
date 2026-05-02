let memories = [
  {
    text: "Nuestro concierto juntos 🎤",
    images: [
      "assets/memories/concierto1.jpg",
      "assets/memories/concierto2.jpg",
      "assets/memories/concierto3.jpg"
    ],
    unlocked: false
  },
  {
    text: "Nosotros 💕",
    images: [
      "assets/memories/ustedes1.jpg",
      "assets/memories/ustedes2.jpg"
    ],
    unlocked: false
  },
  {
    text: "Mia 🐶",
    images: [
      "assets/memories/mia1.jpg",
      "assets/memories/mia2.jpg"
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
    return `<img src="${img}" width="150" style="margin:5px; border-radius:10px;">`;
  }).join("");

  div.innerHTML += `
    <div class="memory">
      <p>${m.text}</p>
      ${imagesHTML}
    </div>
  `;

  saveGame();
}
