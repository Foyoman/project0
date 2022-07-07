const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let arrayX = [];
let arrayO = [];
let turnCount = 0;
let xWinCount = 0;
let oWinCount = 0;
let xWin = undefined;
let oWin = undefined;
let availableMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let onGoingGame = true;

const reset = function () {
    xWin = undefined;
    oWin = undefined;
    arrayX = [];
    arrayO = [];
    turnCount = 0;
    availableMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

const winCheck = function() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const xWinCheck = winningCombinations[i].every(element => {
            return arrayX.includes(element)})
        if (xWinCheck) {
            xWin = true;
            xWinCount += 1;
        }
        const oWinCheck = winningCombinations[i].every(element => {
            return arrayO.includes(element)})
        if (oWinCheck) {
            oWin = true;
            oWinCount += 1;
        }
    }
};