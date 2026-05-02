let canvas = document.getElementById("runner");
let ctx = canvas.getContext("2d");

let player = { x: 50, y: 140, vy: 0 };
let gravity = 0.65;
let obstacles = [];
let gameInterval;

// imagen de Mia (CARGADA UNA SOLA VEZ)
let miaImg = new Image();
miaImg.src = "assets/mia_normal.png";

// iniciar juego
function startRunner() {
  obstacles = [];
  player.y = 140;
  player.vy = 0;

  clearInterval(gameInterval);
  gameInterval = setInterval(updateGame, 20);
}

// salto mejorado
function jump() {
  if (player.y >= 140) {
    player.vy = -13;
  }
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

function updateGame() {
  ctx.clearRect(0, 0, 400, 200);

  // fondo
  ctx.fillStyle = "#fff0f5";
  ctx.fillRect(0, 0, 400, 200);

  // suelo
  ctx.fillStyle = "#999";
  ctx.fillRect(0, 170, 400, 3);

  // física
  player.vy += gravity;
  player.y += player.vy;

  if (player.y > 140) {
    player.y = 140;
    player.vy = 0;
  }

  // dibujar Mia
  ctx.drawImage(miaImg, player.x, player.y, 40, 40);

  // generar obstáculos
  if (Math.random() < 0.025) {
    obstacles.push({ x: 400, y: 140 });
  }

  // obstáculos
  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];
    o.x -= 6;

    ctx.fillStyle = "#333";
    ctx.fillRect(o.x, o.y, 30, 30);

    // colisión
    if (
      o.x < player.x + 40 &&
      o.x + 30 > player.x &&
      player.y + 40 > o.y
    ) {
      clearInterval(gameInterval);

      // efecto visual
      document.body.style.background = "#ffd6e0";
      setTimeout(() => {
        document.body.style.background = "#f8eaea";
      }, 300);

      unlockMemory();
      return;
    }
  }

  // limpiar obstáculos
  obstacles = obstacles.filter(o => o.x > -30);
}
