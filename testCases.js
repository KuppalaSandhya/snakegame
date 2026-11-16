const c = require("./config");
const noOfRows = c.grid.noOfRows;
const noOfColumns = c.grid.noOfColumns;

// function getRandomCoOrdinates() {

//     const x = 1 + Math.floor(Math.random() * noOfColumns);
//     const y = 1 + Math.floor(Math.random() * noOfRows);
//     return ({ x, y });

// }

// for (let i = 0; i < 400; i++) {
//     console.log(getRandomCoOrdinates());
// }


// function isFoodInSnakeSegments(foodPosition, snakePosition) {
//     for (const segment of snakePosition) {
//         if (foodPosition.x === segment.x && foodPosition.y === segment.y) {
//             return true
//         }
//     }
//     return false;
// }

//  const snakePosition = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
// // const foodPosition = { x: 9, y: 10 }


// console.log(isFoodInSnakeSegments(foodPosition, snakePosition));


// function getRandomCoOrdinates() {

//     const x = 1 + Math.floor(Math.random() * noOfColumns);
//     const y = 1 + Math.floor(Math.random() * noOfRows);
//     return ({ x, y });

// }

// const snakePosition = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
// function generateFood(snakePositions) {
//     let food;
//     let isOccupied;

//     do {
//         food = getRandomCoOrdinates();
//         isOccupied = false;

//         for (const position of snakePositions) {
//             if (food.x === position.x && food.y === position.y) {
//                 isOccupied = true;
//                 break;
//             }
//         }

//     } while (isOccupied);

//     return (food);
// }

// for (let i = 0; i < 400; i++) {
//     console.log(generateFood(snakePosition));
// }

// function checkCollision(snakeHead, applePosition) {

//     return (snakeHead.x === applePosition.x && snakeHead.y === applePosition.y)
// }

// const snakeHead = { x: 9, y: 8 }
// const applePosition = { x: 9, y: 8 }
// console.log(checkCollision(snakeHead, applePosition));


function hasTouchedItself(snakePosition) {
    for (let i = 1; i < snakePosition.length; i++) {
        if (snakePosition[0] === snakePosition[i]) return true;
    }
    return false
}
c.snakePosition