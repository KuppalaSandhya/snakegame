const r = require("raylib");

const window = {
    width: 800,
    height: 600,
}

const grid = {
    size: 20,
    color: r.WHITE,
    noOfRows: window.height / 20,
    noOfColumns: window.width / 20,
}

const snake = {
    position: [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }],
    color: r.GREEN
}

const apples = {
    color: r.RED
}

module.exports = {
    window,
    grid,
    snake,
    apples
}