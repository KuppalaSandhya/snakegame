const r = require("raylib");
const Math = require("./math");
const Config = require("./config");
const Grid = require("./grid");
const Snake = require("./snake");
const Apple = require("./apples");
const Game = require("./gameState");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(Config.window.width, Config.window.height, "snakeGame");
  r.SetTargetFPS(5);

  return initGame();
}

function initGame(world = {}) {
  world.grid = Grid.create(Config.window);
  world.snake = Snake.create();
  world.apples = [Apple.create()];
  world.gameState = Game.create();

  return world;
}

function momentKeysArePressed(direction) {
  if (r.IsKeyPressed(r.KEY_RIGHT)) {
    // moveSnakeRight()
    direction.x = 1;
    direction.y = 0;
  }
  if (r.IsKeyPressed(r.KEY_LEFT)) {
    // moveSnakeLeft()
    direction.x = -1;
    direction.y = 0;
  }
  if (r.IsKeyPressed(r.KEY_UP)) {
    direction.x = 0;
    direction.y = -1;
  }
  if (r.IsKeyPressed(r.KEY_DOWN)) {
    direction.x = 0;
    direction.y = 1;
  }
}

function update(w) {
  if (w.gameState.isGameOver) {
    if (r.IsKeyPressed(r.KEY_ENTER)) {
      initGame(w);
    }
    return;
  }

  const hasCollided = Math.checkCollision(
    w.snake.position[0],
    w.apples[0].position,
  );

  momentKeysArePressed(w.snake.direction); // moveSnake
  Snake.update(w.snake, hasCollided);
  Apple.update(w.apples, w.snake, hasCollided);
  Game.update(w.gameState, w.snake.position, hasCollided);
}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  Grid.draw(w.grid);
  Snake.draw(w.snake);
  Apple.draw(w.apples);
  Game.draw(w.gameState);

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
