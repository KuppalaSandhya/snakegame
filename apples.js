const r = require("raylib");
const m = require("./math");
const c = require("./config");

function create() {
    const width = c.grid.size;
    const height = c.grid.size;
    const color = c.apples.color;
    const position = m.getRandomCoOrdinates()

    return { width, height, color, position }

}

function isAppleInSnakeSegments(applePosition, snakePosition) {
    for (const segment of snakePosition) {
        if (applePosition.x === segment.x && applePosition.y === segment.y) {
            return true
        }
    }
    return false
}

function update(apples, snake, hasCollided, gameState) {
    if (hasCollided) {
        apples.pop();
        gameState.score += 1;

        let newApple = create();
        while (isAppleInSnakeSegments(newApple.position, snake.position)) {
            newApple = create();
        }

        apples.push(newApple);
    }
}

function draw(apples) {

    for (const apple of apples) {

        const x = m.gridToPixel(apple.position.x);
        const y = m.gridToPixel(apple.position.y);

        r.DrawRectangle(x, y, apple.width, apple.height, apple.color)
    }
}



module.exports = {
    create,
    draw,
    update
}