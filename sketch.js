const r = require("raylib");
const m = require("./math")
const c = require("./config");
const g = require("./grid");
const s = require("./snake");
const a = require("./apples");
const Game = require("./gameState");

function running() {
  return !r.WindowShouldClose();
}

function setup() {

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(c.window.width, c.window.height, "snakeGame");
  r.SetTargetFPS(5);

  const grid = g.create(c.window);
  const snake = s.create();
  const apples = [a.create()];
  const gameState = Game.create();

  return { grid, snake, apples, gameState };
}

function momentKeysArePressed(direction) {
  if (r.IsKeyPressed(r.KEY_RIGHT)) { direction.x = 1; direction.y = 0 }
  if (r.IsKeyPressed(r.KEY_LEFT)) { direction.x = -1; direction.y = 0 }
  if (r.IsKeyPressed(r.KEY_UP)) { direction.x = 0; direction.y = -1 }
  if (r.IsKeyPressed(r.KEY_DOWN)) { direction.x = 0; direction.y = 1 }
}

function reset(w) {

  w.grid = g.create(c.window);
  w.snake = s.create();
  w.apples = [a.create()];
  w.gameState = Game.create();

}

function update(w) {

  if (w.gameState.isGameOver) {
    if (r.IsKeyPressed(r.KEY_ENTER)) {
      reset(w)
    }
    return;
  }

  const hasCollided = m.checkCollision(w.snake.position[0], w.apples[0].position);

  momentKeysArePressed(w.snake.direction);
  s.update(w.snake, hasCollided);
  a.update(w.apples, w.snake, hasCollided, w.gameState);

  w.gameState.isGameOver = Game.update(w.snake.position);

}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  g.draw(w.grid)
  s.draw(w.snake)
  a.draw(w.apples)
  Game.draw(w.gameState)

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};