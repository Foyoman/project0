const playerX = 'x';
const playerO = 'o';
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

const winCheck = function (){
    for (let i = 0; i < winningCombinations.length; i++) {
        if (arrayX.includes(winningCombinations[i])) {
            xWins();
        } else {
            oWins();
        }
    }
};

for (let i = 0; i < winningCombinations.length; i++) {
    winningCombinations[i].every(element => {
        if (arrayX.includes(element)) {
            xWins();
        } else if (arrayO.includes(element)) {
            oWins();
        }
    });
}

$('.clickable').click(function() {
    if (turnCount % 2 === 0 && $(this).hasClass('clickable') === true) {
        turnCount += 1;
        const gridValue = $(this).data('value');
        arrayX.push(gridValue);
        $(this).addClass('x');
        $(this).find('img').attr('src', xAvatarImages[xAvatar]);
        $(this).removeClass('clickable')
        render();
    } else if (turnCount % 2 !== 0 && $(this).hasClass('clickable') === true) {
        turnCount += 1;
        $(this).addClass('o');
        const gridValue = $(this).data('value');
        arrayX.push(gridValue);
        $(this).find('img').attr('src', oAvatarImages[oAvatar]);
        $(this).removeClass('clickable');
        render();
    }
});

$('#new-game').on('click', function() {
    $('.square').removeClass('x o X O').addClass('clickable');
    $('.square').html('<img>');
    $(this).addClass('hidden');
    $('#result').addClass('hidden');
    render();
});
