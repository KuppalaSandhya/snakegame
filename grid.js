const r = require("raylib");
const c = require("./config");

function create(window) {
    const noOfRows = c.grid.noOfRows;
    const noOfColumns = c.grid.noOfColumns;
    const color = c.grid.color;
    const size = c.grid.size;
    const width = window.width;
    const height = window.height;

    return { noOfRows, noOfColumns, color, size, width, height }
}

function draw(grid) {
    const size = grid.size

    for (let row = 1; row <= grid.noOfRows; row++) {
        r.DrawLine(0, row * size, grid.width, row * size, grid.color)
    }

    for (let column = 1; column <= grid.noOfColumns; column++) {
        r.DrawLine(column * size, 0, column * size, grid.height, grid.color)
    }

}

module.exports = {
    create,
    draw
}