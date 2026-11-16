const r = require("raylib");
const m = require("./math");
const c = require("./config");

function create() {

    const width = c.grid.size;
    const height = c.grid.size;
    const color = c.snake.color;
    const direction = { x: 1, y: 0 };
    const position = [];

    for (const segment of c.snake.position) {
        const x = segment.x;
        const y = segment.y;
        position.push({ x, y })
    }

    return { position, width, height, color, direction }
}


function createNewHead(head, direction) {
    const x = head.x + direction.x;
    const y = head.y + direction.y;
    return { x, y };
}

function update(snake, hasCollided) {

    const newHead = createNewHead(snake.position[0], snake.direction)
    snake.position.unshift(newHead);
    if (!hasCollided) snake.position.pop()
}

function draw(snake) {

    for (const segment of snake.position) {
        const x = m.gridToPixel(segment.x);
        const y = m.gridToPixel(segment.y);

        r.DrawRectangle(x, y, snake.width, snake.height, snake.color)
    }
}

module.exports = {
    create,
    update,
    draw
}