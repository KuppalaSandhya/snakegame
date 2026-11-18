const r = require("raylib");
const c = require("./config");

function create() {
  const isGameOver = false;
  const score = 0;
  return {isGameOver, score};
}

function outOfBounds(snakeHead) {
  return (
    snakeHead.x < 1 ||
    snakeHead.x > c.grid.noOfColumns ||
    snakeHead.y < 1 ||
    snakeHead.y > c.grid.noOfRows
  );
}

function hasTouchedItself(snakePosition) {
  for (let i = 1; i < snakePosition.length; i++) {
    if (
      snakePosition[0].x === snakePosition[i].x &&
      snakePosition[0].y === snakePosition[i].y
    )
      return true;
  }
  return false;
}

function update(gameState, snakePosition, hasCollided) {
  gameState.isGameOver =
    outOfBounds(snakePosition[0]) || hasTouchedItself(snakePosition);
  if (hasCollided) gameState.score += 1;
}

function draw(gameState) {
  r.DrawText(`score: ${gameState.score}`, 550, 0, 50, r.WHITE);
  if (gameState.isGameOver) {
    r.DrawText("Game Over", 150, 200, 100, r.RED);
    r.DrawText(" Press Enter to Restart", 0, 300, 60, r.WHITE);
  }
}

module.exports = {
  create,
  draw,
  update,
};
