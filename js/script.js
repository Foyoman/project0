console.log('is this thing on?');
let turnCount = 0;
let xWinCount = 0;
let oWinCount = 0;

const render = function () {   
    if (turnCount % 2 === 0) {
        $('#players-turn').text(`X`);
    } else {
        $('#players-turn').text('O');
    }

    $('#new-game').addClass('hidden');

    if (turnCount >= 9 && $('body').find('.hidden').length !== 0) {
        $('#result').text('Draw').removeClass('hidden');
        $('#new-game').removeClass('hidden');
        turnCount = 0;
    }
    
    const xWins = function () {
        $('#result').text('X wins!').removeClass('hidden');
        xWinCount += 1;
        $('#x-wins').text(`Wins: ${xWinCount}`);
        $('#new-game').removeClass('hidden');
        $('*').removeClass('clickable');
        turnCount = 0;
    }
    
    const oWins = function () {
        $('#result').text('O wins!').removeClass('hidden');
        oWinCount += 1;
        $('#o-wins').text(`Wins: ${oWinCount}`);
        $('#new-game').removeClass('hidden');
        $('*').removeClass('clickable');
        turnCount = 0;
    }

    $('#x-wins').text(`Wins: ${xWinCount}`);
    $('#o-wins').text(`Wins: ${oWinCount}`);
    
    if (turnCount % 2 === 0) {
        $('.square').removeClass('O');
        $('.square').addClass('X');
    }

    if (turnCount % 2 !== 0) {
        $('.square').removeClass('X');
        $('.square').addClass('O');
    }

    const winCheck = function () {
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
        if ($('.x1.y3').hasClass('x') && $('.x2.y2').hasClass('x') && $('.x3.y1').hasClass('x')) {
            xWins();
        }
        if ($('.x3.y3').hasClass('x') && $('.x2.y2').hasClass('x') && $('.x1.y1').hasClass('x')) {
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
        if ($('.x1.y3').hasClass('o') && $('.x2.y2').hasClass('o') && $('.x3.y1').hasClass('o')) {
            oWins();
        }
        if ($('.x3.y3').hasClass('o') && $('.x2.y2').hasClass('o') && $('.x1.y1').hasClass('o')) {
            oWins();
        }
    }
    winCheck();
};

$(document).ready(function() {
    render();

    $('.clickable').click(function() {
        if (turnCount % 2 === 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            $(this).addClass('x');
            $(this).removeClass('clickable')
            render();
        } else if (turnCount % 2 !== 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            $(this).addClass('o');
            $(this).removeClass('clickable');
            render();
        }
    });

    $('#new-game').on('click', function() {
        $('.square').removeClass('x o X O').addClass('clickable');
        $(this).addClass('hidden');
        $('#result').addClass('hidden');
        render();
    });
    

    // $('.square').hover (function(){
    //     $(this).addClass('xhover');
    //     },
    //     function() {
    //     $(this).removeClass('xhover');
    // })

    // $('.square').hover (function(){
    //     $(this).addClass('ohover');
    //     },
    //     function() {
    //     $(this).removeClass('ohover');
    // })

});