let canvas = document.getElementById("runner");
let ctx = canvas.getContext("2d");

let player = { x: 50, y: 150, vy: 0 };
let gravity = 0.5;
let obstacles = [];
let gameInterval;

function startRunner() {
  console.log("Juego iniciado"); // <-- para que veas que sí corre

  obstacles = [];
  player.y = 150;
  player.vy = 0;

  clearInterval(gameInterval);
  gameInterval = setInterval(updateGame, 20);
}

function jump() {
  player.vy = -8;
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

function updateGame() {
  ctx.clearRect(0, 0, 400, 200);

  // fondo
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 400, 200);

  // suelo
  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 170, 400, 30);

  // jugador (ROSA grande para que lo veas)
  player.vy += gravity;
  player.y += player.vy;

  if (player.y > 150) player.y = 150;

  ctx.fillStyle = "hotpink";
  ctx.fillRect(player.x, player.y, 30, 30);

  // obstáculos (NEGROS grandes)
  if (Math.random() < 0.03) {
    obstacles.push({ x: 400, y: 150 });
  }

  ctx.fillStyle = "black";
  obstacles.forEach(o => {
    o.x -= 5;
    ctx.fillRect(o.x, o.y, 30, 30);

    // colisión
    if (
      o.x < player.x + 30 &&
      o.x > player.x &&
      player.y > 130
    ) {
      clearInterval(gameInterval);
      console.log("Choque"); // <-- debug
      unlockMemory();
    }
  });
}
