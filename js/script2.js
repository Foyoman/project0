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

    if (arrayX.length + arrayO.length === 9)
    
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
        $('.square').addClass('X', 500);
    }

    if (turnCount % 2 !== 0) {
        $('.square').removeClass('X');
        $('.square').addClass('O', 500);
    }
};

const xAvatarImages = {
    'default': 'images/x.webp',
    'x-wing': 'images/xwing.png'
}

const oAvatarImages = {
    'default': 'images/circle-png.webp',
    'tie-fighter': 'images/tiefighter.png',
    'donut': 'images/donut_PNG31.png' 
};

let xAvatar = 'default';

let oAvatar = 'default';

$('#o-form').on('submit', function(event) {
    event.preventDefault();
    oAvatar = $(this).find("[name=o-avatar]").val();
    $('#oAvatarPic').attr('src', oAvatarImages[oAvatar]);
});

$('#x-form').on('submit', function(event) {
    event.preventDefault();
    xAvatar = $(this).find("[name=x-avatar]").val();
    $('#xAvatarPic').attr('src', xAvatarImages[xAvatar]);
});

$(document).ready(function() {
    render();

    $('.clickable').click(function() {
        if (turnCount % 2 === 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            $(this).addClass('x');
            $(this).find('img').attr('src', xAvatarImages[xAvatar]);
            $(this).removeClass('clickable')
            render();
        } else if (turnCount % 2 !== 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            $(this).addClass('o');
            // $(this).css('background-image', oAvatarImages[oAvatar]);
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

    // $(".clickable.X").hover(function(){
    //     $(this).find('img').attr('src', xAvatarImages[xAvatar]);
    //     }, function(){
    //     $(this).html('<img>');
    // });
    
    // $(".clickable.O").hover(function(){
    //     $(this).find('img').attr('src', oAvatarImages[oAvatar]);
    //     }, function(){
    //     $(this).html('<img>');
    // });
    


    //     $('.o').css('background-image' `url:(${oAvatarImages[oAvatar]})`);
    // });

    // $('.X').hover(function() {
    //     $(this).addClass('fuck').fadeIn('slow');
    // })

    // const $imgX = $(`<img>`);
    // $imgX.attr('src', 'images/x.webp');
    // $('.X').on('hover', function() {
    //     $(this).find('img').attr('src', 'images/x.webp').fadeIn(1000);
    // });


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