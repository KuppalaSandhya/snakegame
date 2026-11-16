const c = require("./config");

const size = c.grid.size;
const noOfRows = c.grid.noOfRows;
const noOfColumns = c.grid.noOfColumns;

function gridToPixel(grid) {
    return size * grid - size
};

function getRandomCoOrdinates() {

    const x = 1 + Math.floor(Math.random() * noOfColumns);
    const y = 1 + Math.floor(Math.random() * noOfRows);

    return { x, y }
}

function checkCollision(snakeHead, applePosition) {

    return (snakeHead.x === applePosition.x && snakeHead.y === applePosition.y)
}

module.exports = {
    gridToPixel,
    getRandomCoOrdinates,
    checkCollision

}