const xAvatarImages = {
    'default': 'images/x.webp',
    'x-wing': 'images/xwing.png',
    'shuriken': 'images/Shuriken.png'
}

const oAvatarImages = {
    'default': 'images/circle-png.webp',
    'tie-fighter': 'images/tiefighter.png',
    'donut': 'images/donut_PNG31.png' 
};

let xAvatar = 'default';
let oAvatar = 'default';

const setAvatar = function() {
    if (turnCount % 2 === 0) {
        if (xAvatar === 'default') {
            $('.square').addClass('X');
        }
        if (xAvatar === 'shuriken') {
            $('.square').addClass('shuriken');
        }
        if (xAvatar === 'x-wing') {
            $('.square').addClass('x-wing');
        }
        
    }

    if (turnCount % 2 !== 0) {
        if (oAvatar === 'default') {
            $('.square').addClass('O');
        }
        if (oAvatar === 'donut') {
            $('.square').addClass('donut');
        }
        if (oAvatar === 'tie-fighter') {
            $('.square').addClass('tie-fighter');
        }
    }
}

const resetAvatar = function() {
    $('.square').removeClass('X');
    $('.square').removeClass('O');
    $('.square').removeClass('shuriken');
    $('.square').removeClass('donut');
    $('.square').removeClass('x-wing');
    $('.square').removeClass('tie-fighter');
}

const render = function () {   
    winCheck();
    resetAvatar();
    setAvatar();

    if (xWin) {
        $('#result').text('X wins!').css('visibility', 'visible');
        $('#x-wins').text(`Wins: ${xWinCount}`);
        $('#new-game').css('visibility', 'visible');
        $('.square').removeClass('clickable');
        reset();
        turnCount += 1;
    }

    if (oWin) {
        $('#result').text('O wins!').css('visibility', 'visible');
        $('#o-wins').text(`Wins: ${xWinCount}`);
        $('#new-game').css('visibility', 'visible');
        $('.square').removeClass('clickable');
        reset();
    }

    if (arrayX.length + arrayO.length === 9 && xWin !== 1 && oWin !== 1) {
        $('#result').text('Draw').css('visibility', 'visible');
        $('#new-game').css('visibility', 'visible');
        reset();
    }
  
    if (turnCount % 2 === 0) {
        $('#players-turn').text(`X`);
    } else {
        $('#players-turn').text('O');
    }

    $('#new-game').addClass('hidden');

    $('#x-wins').text(`Wins: ${xWinCount}`);
    $('#o-wins').text(`Wins: ${oWinCount}`);
};

$(document).ready(function() {
    render();
    
    $('.clickable').click(function() {
        if (turnCount % 2 === 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            const gridValue = $(this).data('value');
            arrayX.push(gridValue);
            $(this).find('img').attr('src', xAvatarImages[xAvatar]);
            $(this).removeClass('clickable')
            render();
        } else if (turnCount % 2 !== 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            const gridValue = $(this).data('value');
            arrayO.push(gridValue);
            $(this).find('img').attr('src', oAvatarImages[oAvatar]);
            $(this).removeClass('clickable');
            render();
        }
    });

    $('#new-game').on('click', function() {
        $('.square').removeClass('x o').addClass('clickable');
        $('.square').html('<img>');
        $(this).css('visibility', 'hidden');
        $('#result').css('visibility', 'hidden');
        render();
    });

    $('#x-form').on('submit', function(event) {
        event.preventDefault();
        xAvatar = $(this).find("[name=x-avatar]").val();
        $('#xAvatarPic').attr('src', xAvatarImages[xAvatar]);
        resetAvatar();
        setAvatar();
    });
    
    $('#o-form').on('submit', function(event) {
        event.preventDefault();
        oAvatar = $(this).find("[name=o-avatar]").val();
        $('#oAvatarPic').attr('src', oAvatarImages[oAvatar]);
        resetAvatar();
        setAvatar();
    });
});