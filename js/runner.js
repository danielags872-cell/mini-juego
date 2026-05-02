let canvas = document.getElementById("runner");
let ctx = canvas.getContext("2d");

let player = { x: 50, y: 150, vy: 0 };
let gravity = 0.6;
let obstacles = [];
let gameInterval;

// iniciar juego
function startRunner() {
  console.log("Juego iniciado");

  obstacles = [];
  player.y = 150;
  player.vy = 0;

  clearInterval(gameInterval);
  gameInterval = setInterval(updateGame, 20);
}

// salto (solo si está en el suelo)
function jump() {
  if (player.y >= 150) {
    player.vy = -10;
  }
}

// control teclado
document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

// lógica principal
function updateGame() {
  ctx.clearRect(0, 0, 400, 200);

  // fondo
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 400, 200);

  // suelo
  ctx.fillStyle = "#ddd";
  ctx.fillRect(0, 170, 400, 30);

  // física jugador
  player.vy += gravity;
  player.y += player.vy;

  if (player.y > 150) {
    player.y = 150;
    player.vy = 0;
  }

  // jugador (visible)
  ctx.fillStyle = "hotpink";
  ctx.fillRect(player.x, player.y, 30, 30);

  // generar obstáculos
  if (Math.random() < 0.025) {
    obstacles.push({ x: 400, y: 150 });
  }

  // dibujar obstáculos
  ctx.fillStyle = "black";
  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];
    o.x -= 6;

    ctx.fillRect(o.x, o.y, 30, 30);

    // colisión
    if (
      o.x < player.x + 30 &&
      o.x + 30 > player.x &&
      player.y + 30 > o.y
    ) {
      clearInterval(gameInterval);
      console.log("Choque detectado");
      unlockMemory();
      return;
    }
  }

  // limpiar obstáculos fuera de pantalla
  obstacles = obstacles.filter(o => o.x > -30);
}
