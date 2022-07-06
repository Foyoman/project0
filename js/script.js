const xAvatarImages = {
    'defaultX': 'images/x.webp',
    'shuriken': 'images/Shuriken.png',
    'x-wing': 'images/xwing.png',
    'link': 'images/Link_BotW.webp',
    'pikachu': 'images/pikachu.png',
    'cat': 'images/cat.png'
}

const oAvatarImages = {
    'defaultO': 'images/circle-png.webp',
    'donut': 'images/donut_PNG31.png',
    'tie-fighter': 'images/tiefighter.webp',
    'kirby': 'images/kirby.png',
    'snorlax': 'images/snorlax.png',
    'dog': 'images/doggo.png'
};

let xAvatar = 'defaultX';
let oAvatar = 'defaultO';

const setAvatar = function() {
    if (turnCount % 2 === 0) {
        $('.square').addClass(`${xAvatar}`);
        
    }

    if (turnCount % 2 !== 0) {
        $('.square').addClass(`${oAvatar}`);
    }
}

const resetAvatar = function() {
    $('.square').removeClass(`${xAvatar} ${oAvatar}`);
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
        resetAvatar();
        xAvatar = $(this).find("[name=x-avatar]").val();
        $('#xAvatarPic').attr('src', xAvatarImages[xAvatar]);
        setAvatar();
    });
    
    $('#o-form').on('submit', function(event) {
        event.preventDefault();
        resetAvatar();
        oAvatar = $(this).find("[name=o-avatar]").val();
        $('#oAvatarPic').attr('src', oAvatarImages[oAvatar]);
        setAvatar();
    });
});