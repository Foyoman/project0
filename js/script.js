console.log('is this thing on?');
let turnCount = 0;

const render = function () {
    if ($('#board').find('.x1.x').length === 3) {
        xWins();

    }
    if ($('#board').find('.x2.x').length === 3) {
        xWins();

    }
    if ($('#board').find('.x3.x').length === 3) {
        xWins();

    }
    if ($('#board').find('.y1.x').length === 3) {
        xWins();
    }
    if ($('#board').find('.y2.x').length === 3) {
        xWins();
    }
    if ($('#board').find('.y3.x').length === 3) {
        xWins();
    }
    if ($('.square.x1.y3').hasClass('x') && $('.square.x2.y2').hasClass('x') && $('.square.x3.y1').hasClass('x')) {
        xWins();
    }
    if ($('.square.x3.y3').hasClass('x') && $('.square.x2.y2').hasClass('x') && $('.square.x1.y1').hasClass('x')) {
        xWins();
    }

    if ($('#board').find('.x1.o').length === 3) {
        oWins();
    }
    if ($('#board').find('.x2.o').length === 3) {
        oWins();
    }
    if ($('#board').find('.x3.o').length === 3) {
        oWins();
    }
    if ($('#board').find('.y1.o').length === 3) {
        oWins();
    }
    if ($('#board').find('.y2.o').length === 3) {
        oWins();
    }
    if ($('#board').find('.y3.o').length === 3) {
        oWins();
    }
    if ($('.square.x1.y3').hasClass('o') && $('.square.x2.y2').hasClass('o') && $('.square.x3.y1').hasClass('o')) {
        oWins();
    }
    if ($('.square.x3.y3').hasClass('o') && $('.square.x2.y2').hasClass('o') && $('.square.x1.y1').hasClass('o')) {
        oWins();
    }
}

const xWins = function () {
    $newP = $('<p>');
    $newP.text('x wins!');
    $('.container').append($newP);
}

const oWins = function () {
    $newP = $('<p>');
    $newP.text('o wins!');
    $('.container').append($newP);
}

$(document).ready(function() {
    $('.square').click(function() {
        turnCount += 1;
        if (turnCount % 2 === 0 && $(this).hasClass('o') === false) {
            $(this).find('img').attr('src', './images/x.webp');
            $(this).addClass('x');
            render();
        } else if (turnCount % 2 !== 0 && $(this).hasClass('x') === false) {
            $(this).find('img').attr('src', './images/circle-png.webp');
            $(this).addClass('o');
            render();
        }
    });

    



});