let canvas = document.getElementById("runner");
let ctx = canvas.getContext("2d");

let player = { x: 50, y: 150, vy: 0 };
let gravity = 0.5;
let obstacles = [];

function startRunner() {
  obstacles = [];
  setInterval(updateGame, 20);
}

function jump() {
  player.vy = -8;
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

function updateGame() {
  ctx.clearRect(0, 0, 400, 200);

  player.vy += gravity;
  player.y += player.vy;

  ctx.fillRect(player.x, player.y, 20, 20);

  if (Math.random() < 0.02) {
    obstacles.push({ x: 400, y: 150 });
  }

  obstacles.forEach(o => {
    o.x -= 3;
    ctx.fillRect(o.x, o.y, 20, 20);

    if (o.x < player.x + 20 && o.x > player.x &&
        player.y > 130) {
      unlockMemory();
    }
  });
}
