const xAIMove = function() {
    if (xEdBot && turnCount % 2 === 0 && onGoingGame) {
        let xMove = 0;

        if (availableMoves.length === 9) {
            xMove = 0;
        }

        if (availableMoves.length === 7) {
            if (availableMoves.includes(4)) {
                xMove = 4;
            }
            if (arrayO.includes(2)) {
                xMove = 6;
            }
            if (arrayO.includes(4)) {
                xMove = 8;
            }
            if (arrayO.includes(6) || arrayO.includes(8)) {
                xMove = 2;
            }
        }

        if (availableMoves.length === 5) {
            if (arrayX.includes(4)) {
                if (availableMoves.includes(8)) {
                    xMove = 8;
                } 
                if (arrayO.includes(8)) {
                    if (arrayO.includes(1) || arrayO.includes(7)) {
                        xMove = 6;    
                    }
                    if (arrayO.includes(3) || arrayO.includes(5)) {
                        xMove = 2;
                    }
                }
            }

            if (arrayX.includes(6)) {
                if (availableMoves.includes(3)) {
                    xMove = 3;
                }
                if (arrayO.includes(3)) {
                    xMove = 8;
                }
            }

            if (arrayX.includes(8)) {
                if (arrayO.includes(1)) {
                    xMove = 7;
                }
                if (arrayO.includes(2)) {
                    xMove = 6;
                }
                if (arrayO.includes(3)) {
                    xMove = 5;
                }
                if (arrayO.includes(5)) {
                    xMove = 3;
                }
                if (arrayO.includes(6)) {
                    xMove = 2;
                }
                if (arrayO.includes(7)) {
                    xMove = 1;
                }
            }

            if (arrayX.includes(2)) {
                if (availableMoves.includes(1)) {
                    xMove = 1;
                }
                if (arrayO.includes(1)) {
                    if (arrayO.includes(6)) {
                        xMove = 8;
                    }
                    if (arrayO.includes(8)) {
                        xMove = 6;
                    }
                }
            }
        }

        if (availableMoves.length === 3) {
            if(arrayX.includes(6)) {
                if (arrayX.includes(4)) {
                    if (availableMoves.includes(2)) {
                        xMove = 2;
                    } else {
                        xMove = 3;
                    }
                }

                if (arrayX.includes(8)) {
                    if (availableMoves.includes(4)) {
                        xMove = 4;
                    } 
                    if (availableMoves.includes(7)) {
                        xMove = 7;
                    }
                    if (availableMoves.includes(3)) {
                        xMove = 3;
                    }             
                }

                if (arrayX.includes(2)) {
                    if (availableMoves.includes(4)) {
                        xMove = 4;
                    } else {
                        xMove = 3;
                    }
                }
            }

            if (arrayX.includes(2) && arrayX.includes(4)) {
                if (availableMoves.includes(6)) {
                    xMove = 6;
                } else {
                    xMove = 1;
                }
            }

            if (arrayX.includes(8)) {
                if (arrayX.includes(7)) {
                    if (availableMoves.includes(6)) {
                        xMove = 6;
                    }
                    if (arrayO.includes(6)) {
                        xMove = 2;     
                    }
                }

                if (arrayX.includes(5)) {
                    if (availableMoves.includes(2)) {
                        xMove = 2;
                    } else {
                        xMove = 6;
                    }
                }

                if (arrayX.includes(3)) {
                    if (availableMoves.includes(6)) {
                        xMove = 6;
                    } else {
                        xMove = 2;
                    }
                }

                if (arrayX.includes(2)) {
                    if (availableMoves.includes(4)) {
                        xMove = 4;
                    } 
                    if (availableMoves.includes(5)) {
                        xMove = 5;
                    }
                    if (availableMoves.includes(1)) {
                        xMove = 1;
                    }
                }

                if (arrayX.includes(1)) {
                    if (availableMoves.includes(2)) {
                        xMove = 2;
                    } else {
                        xMove = 6;
                    }
                }
            }            
        }
        
        if (availableMoves.length === 1) {
            for (let i = 0; i < 9; i++) {
                if (availableMoves.includes(i)) {
                    xMove = i;
                }
            };
        }   

        $(`#${xMove}`).html(`<img src ="${xAvatarImages[xAvatar]}">`);
        $(`#${xMove}`).removeClass('clickable');
        arrayX.push(xMove);
        availableMoves.splice(availableMoves.indexOf(xMove), 1);
        turnCount += 1;
        render();
    }
}

const oAIMove = function () {
    if (oEdBot && turnCount % 2 !== 0 && onGoingGame) {
        let oMove = undefined;

        // starting second - easter egg: this is very very bad code, and the dumbest A"I" you will ever see

        if (availableMoves.length === 8) {
            if (availableMoves.includes(4)) {
                oMove = 4;
            } else {
                oMove = 0;
            }
        }

        if (availableMoves.length === 6) {
            if (arrayX.includes(0)) {
                if (arrayX.includes(1)) {
                    oMove = 2;
                }
                if (arrayX.includes(2)) {
                    oMove = 1;
                }
                if (arrayX.includes(3)) {
                    oMove = 6;
                }
                if (arrayX.includes(5) || arrayX.includes(7)) {
                    oMove = 8;
                }
                if (arrayX.includes(6)) {
                    oMove = 3;
                }
                if (arrayX.includes(8)) {
                    oMove = 7;
                }
            }

            if (arrayX.includes(1)) {
                if (arrayX.includes(0) || arrayX.includes(5) || arrayX.includes(6)) {
                    oMove = 2;
                }
                if (arrayX.includes(2) || arrayX.includes(3) || arrayX.includes(8)) {
                    oMove = 0;
                }
                if (arrayX.includes(7)) {
                    oMove = 5;
                }
            }

            if (arrayX.includes(2)) {
                if (arrayX.includes(0)) {
                    oMove = 1;
                }
                if (arrayX.includes(1)) {
                    oMove = 0;
                }
                if (arrayX.includes(3) || arrayX.includes(7)) {
                    oMove = 6;
                }
                if (arrayX.includes(5)) {
                    oMove = 8;
                }
                if (arrayX.includes(6)) {
                    oMove = 3;
                }
                if (arrayX.includes(8)) {
                    oMove = 5;
                }
            }

            if (arrayX.includes(3)) {
                if (arrayX.includes(0) || arrayX.includes(2) || arrayX.includes(7)) {
                    oMove = 6;
                }
                if (arrayX.includes(1) || arrayX.includes(6) || arrayX.includes(8)) {
                    oMove = 0;
                }
                if (arrayX.includes(5)) {
                    oMove = 1;
                }
            }

            if (arrayX.includes(4)) {
                if (arrayX.includes(1)) {
                    oMove = 7;
                }
                if (arrayX.includes(2) || arrayX.includes(8)) {
                    oMove = 6;
                }
                if (arrayX.includes(3)) {
                    oMove = 5;
                }
                if (arrayX.includes(5)) {
                    oMove = 3;
                }
                if (arrayX.includes(6)) {
                    oMove = 2;
                }
                if (arrayX.includes(7)) {
                    oMove = 1;
                }
            }

            if (arrayX.includes(5)) {
                if (arrayX.includes(0) || arrayX.includes(2) || arrayX.includes(7)) {
                    oMove = 8;
                }
                if (arrayX.includes(1) || arrayX.includes(6) || arrayX.includes(8)) {
                    oMove = 2;
                }
                if (arrayX.includes(3)) {
                    oMove = 7;
                }
            }
            
            if (arrayX.includes(6)) {
                if (arrayX.includes(0)) {
                    oMove = 3;
                }
                if (arrayX.includes(1) || arrayX.includes(5)) {
                    oMove = 2;
                }
                if (arrayX.includes(2)) {
                    oMove = 5;
                }
                if (arrayX.includes(3)) {
                    oMove = 0;
                }
                if (arrayX.includes(7)) {
                    oMove = 8;
                }
                if (arrayX.includes(8)) {
                    oMove = 7;
                }
            }

            if (arrayX.includes(7)) {
                if (arrayX.includes(0) || arrayX.includes(5) || arrayX.includes(6)) {
                    oMove = 8;
                }
                if (arrayX.includes(1)) {
                    oMove = 3;
                }
                if (arrayX.includes(2) || arrayX.includes(3) || arrayX.includes(8)) {
                    oMove = 6;
                }
            }

            if (arrayX.includes(8)) {
                if (arrayX.includes(0)) {
                    oMove = 1;
                }
                if (arrayX.includes(1) || arrayX.includes(3)) {
                    oMove = 0;
                }
                if (arrayX.includes(2)) {
                    oMove = 5;
                }
                if (arrayX.includes(5)) {
                    oMove = 2;
                }
                if (arrayX.includes(6)) {
                    oMove = 7;
                }
                if (arrayX.includes(7)) {
                    oMove = 6;
                }
            }
        }

        if (availableMoves.length === 4) {

            if (arrayO.includes(4)) {
                if (arrayO.includes(2)) {
                    if (availableMoves.includes(6)) {
                        oMove = 6;
                    } 
                }
                if (arrayO.includes(0)) {
                    if (availableMoves.includes(8)) {
                        oMove = 8;
                    }
                    if (arrayX.includes(8)) {
                        oMove = 2;
                    }
                    if (arrayX.includes(2) && arrayX.includes(8)) {
                        oMove = 5;
                    }
                }

                if (arrayO.includes(2)) {
                    if (availableMoves.includes(6)) {
                        oMove = 6;
                    }               
                    if (arrayX.includes(6)) {
                        if (arrayX.includes(1)) {
                            if (arrayX.includes(0)) {
                                oMove = 3;
                            }

                            if (arrayX.includes(6)) {
                                if (arrayX.includes(0)) {
                                    oMove = 3;
                                }
                                if (arrayX.includes(3)) {
                                    oMove = 0;
                                }
                                if (arrayX.includes(5) || arrayX.includes(7)) {
                                    oMove = 8;
                                }
                                if (arrayX.includes(8)) {
                                    oMove = 7;
                                }
                            }                    
                        }

                        if (arrayX.includes(5) && arrayX.includes(6)) {
                            if (arrayX.includes(0)) {
                                oMove = 3;
                            }
                            if (arrayX.includes(1) || arrayX.includes(3)) {
                                oMove = 0;
                            }
                            if (arrayX.includes(7)) {
                                oMove = 8;
                            }
                            if (arrayX.includes(8)) {
                                oMove = 7;
                            }
                        }

                        if (arrayX.includes(6) && arrayX.includes(1)) {
                            if (arrayX.includes(0)) {
                                oMove = 3;
                            }
                            if (arrayX.includes(3)) {
                                oMove = 0;
                            }
                            if (arrayX.includes(5) || arrayX.includes(7)) {
                                oMove = 8;
                            }
                        }

                        if (arrayX.includes(5) && arrayX.includes(8)) {
                            oMove = 7;
                        }
                    }
                }

                if (arrayO.includes(1)) {
                    if (availableMoves.includes(7)) {
                        oMove = 7;
                    } 
                    if (arrayX.includes(7)) {
                        if (arrayX.includes(0) && arrayX.includes(2)) {
                            if (arrayX.includes(7)) {
                                oMove = 3;
                            } 
                            if (availableMoves.includes(5)) {
                                oMove = 5;
                            }
                        }
                        if (arrayX.includes(3) && arrayX.includes(5)) {
                            oMove = 2;
                        }
                            if (arrayX.includes(0) && arrayX.includes(8) && arrayX.includes(7)) {
                            oMove = 6;
                        }
                    }   
                }
                

                if (arrayO.includes(6)) {
                    if (availableMoves.includes(2)) {
                        oMove = 2;
                    } 
                    if (arrayX.includes(2)) {
                        if (arrayX.includes(3)) {
                            if (arrayX.includes(0)) {
                                oMove = 1;
                            }
                            if (arrayX.includes(1)) {
                                oMove = 0;
                            }
                            if (arrayX.includes(5) || arrayX.includes(7)) {
                                oMove = 8;
                            }
                            if (arrayX.includes(8)) {
                                oMove = 5;
                            }
                        }
                        
                        if (arrayX.includes(7)) {
                            if (arrayX.includes(0)) {
                                oMove = 1;
                            }
                            if (arrayX.includes(1) || arrayX.includes(3)) {
                                oMove = 0;
                            }
                            if (arrayX.includes(5)) {
                                oMove = 8;
                            }
                            if (arrayX.includes(8)) {
                                oMove = 5;
                            }
                        }
                    }
                }

                if (arrayO.includes(8)) {
                    if (availableMoves.includes(0)) {
                        oMove = 0;
                    } 
                    if (arrayX.includes(0)) {
                        if (arrayX.includes(5) || arrayX.includes(7)) {
                            if (arrayX.includes(1)) {
                                oMove = 2;
                            }
                            if (arrayX.includes(2)) {
                                oMove = 1;
                            }
                            if (arrayX.includes(3)) {
                                oMove = 6;
                            }
                            if (arrayX.includes(6)) {
                                oMove = 3;
                            }
                        }
    
                        if (arrayX.includes(5)) {
                            if (arrayX.includes(7)) {
                                oMove = 6;
                            }
                        }
                    }
                }
                
                if (arrayO.includes(3)) {
                    if (availableMoves.includes(5)) {
                        oMove = 5;
                    } 
                    if (arrayX.includes(5)) {
                        if (availableMoves.includes(6)) {
                            oMove = 6;
                        }
                        if (arrayX.includes(6)) {
                            if (arrayX.includes(0)) {
                                oMove = 7;
                            }
                            if (arrayX.includes(2)) {
                                oMove = 8;
                            }
                        }

                        if (arrayX.includes(1) && arrayX.includes(8)) {
                            oMove = 0;
                        }
                    }
                }
                
                if (arrayO.includes(7)) {
                    if (availableMoves.includes(1)) {
                        oMove = 1;
                    } 
                    if (arrayX.includes(1)) {
                        if (arrayX.includes(0) && arrayX.includes(8)) {
                            oMove = 2;
                        }

                        if (arrayX.includes(3) && arrayX.includes(5)) {
                            oMove = 6;
                        }

                        if (arrayX.includes(6) && arrayX.includes(8)) {
                            oMove = 3;
                        }
                    }
                }

                if (arrayO.includes(5)) {
                    if (availableMoves.includes(3)) {
                        oMove = 3;
                    }
                    if (arrayX.includes(3) && arrayX.includes(6)) {
                        oMove = 0;
                    }
                    if (availableMoves.includes(7)) {
                        oMove = 7;
                    }
                }
            }
            
            if (arrayO.includes(0)) {
                if (arrayO.includes(7)) {
                    if (arrayX.includes(2) || arrayX.includes(8)) {
                        oMove = 6;
                    }
                    if (arrayX.includes(3)) {
                        oMove = 5;
                    }
                    if (arrayX.includes(5)) {
                        oMove = 3;
                    }
                    if (arrayX.includes(6)) {
                        oMove = 2;
                    }
                    if (arrayX.includes(8)) {
                        oMove = 6;
                    }
                }

                if (arrayO.includes(6)) {
                    if (availableMoves.includes(3)) {
                        oMove = 3;
                    } 
                    if (arrayX.includes(3)) {
                        oMove = 5;
                    }
                }

                if (arrayO.includes(5)) {
                    if (arrayX.includes(1) || arrayX.includes(2)) {
                        oMove = 7;
                    }
                    if (arrayX.includes(6) || arrayX.includes(8)) {
                        oMove = 2;
                    }
                    if (arrayX.includes(7)) {
                        oMove = 1;
                    }
                }

                if (arrayO.includes(3)) {
                    if (availableMoves.includes(6)) {
                        oMove = 6;
                    } 
                    if (arrayX.includes(6)) {
                        oMove = 2;
                    }
                }

                if (arrayO.includes(2)) {
                    if (availableMoves.includes(1)) {
                        oMove = 1;
                    } 
                    if (arrayX.includes(1)) {
                        oMove = 7;
                    }
                }

                if (arrayO.includes(1)) {
                    if (availableMoves.includes(2)) {
                        oMove = 2;
                    } 
                    if (arrayX.includes(2)) {
                        oMove = 6;
                    }
                }

                if (arrayO.includes(6)) {
                    if (availableMoves.includes(3)) {
                        oMove = 3;
                    } 
                    if (arrayX.includes(3)) {
                        oMove = 5;
                    }
                }
            }
            
        }

        if (availableMoves.length === 2) {
            oMove = availableMoves[0];

            if (arrayO.includes(0) && arrayO.includes(5) && arrayO.includes(6)) {
                if (arrayX.includes(2) && arrayX.includes(3) && arrayX.includes(4) && arrayO.includes(8)) {
                    oMove = 1;
                }
            } 

            if (arrayX.includes(0) && arrayX.includes(1)) {
                if (availableMoves.includes(2)) {
                    oMove = 2;
                }
            }

            if (arrayX.includes(0) && arrayX.includes(2)) {
                if (availableMoves.includes(1)) {
                    oMove = 1;
                }
            }

            if (arrayX.includes(1) && arrayX.includes(2)) {
                if (availableMoves.includes(0)) {
                    oMove = 0;
                }
            }

            if (arrayX.includes(3) && arrayX.includes(4)) {
                if (availableMoves.includes(5)) {
                    oMove = 5;
                }
            }

            if (arrayX.includes(3) && arrayX.includes(5)) {
                if (availableMoves.includes(4)) {
                    oMove = 4;
                }
            }

            if (arrayX.includes(4) && arrayX.includes(5)) {
                if (availableMoves.includes(3)) {
                    oMove = 3;
                }
            }

            if (arrayX.includes(6) && arrayX.includes(7)) {
                if (availableMoves.includes(8)) {
                    oMove = 8;
                }
            }

            if (arrayX.includes(6) && arrayX.includes(8)) {
                if (availableMoves.includes(7)) {
                    oMove = 7;
                }
            }

            if (arrayX.includes(7) && arrayX.includes(8)) {
                if (availableMoves.includes(6)) {
                    oMove = 6;
                }
            }

            if (arrayX.includes(0) && arrayX.includes(3)) {
                if (availableMoves.includes(6)) {
                    oMove = 6;
                }
            }

            if (arrayX.includes(0) && arrayX.includes(6)) {
                if (availableMoves.includes(3)) {
                    oMove = 3;
                }
            }

            if (arrayX.includes(3) && arrayX.includes(6)) {
                if (availableMoves.includes(0)) {
                    oMove = 0;
                }
            }

            if (arrayX.includes(1) && arrayX.includes(4)) {
                if (availableMoves.includes(7)) {
                    oMove = 7;
                }
            }

            if (arrayX.includes(1) && arrayX.includes(7)) {
                if (availableMoves.includes(4)) {
                    oMove = 4;
                }
            }

            if (arrayX.includes(4) && arrayX.includes(7)) {
                if (availableMoves.includes(1)) {
                    oMove = 1;
                }
            }

            if (arrayX.includes(2) && arrayX.includes(5)) {
                if (availableMoves.includes(8)) {
                    oMove = 8;
                }
            }

            if (arrayX.includes(2) && arrayX.includes(8)) {
                if (availableMoves.includes(5)) {
                    oMove = 5;
                }
            }

            if (arrayX.includes(5) && arrayX.includes(8)) {
                if (availableMoves.includes(2)) {
                    oMove = 2;
                }
            }

            if (arrayO.includes(0) && arrayO.includes(1)) {
                if (availableMoves.includes(2)) {
                    oMove = 2;
                }
            }

            if (arrayO.includes(0) && arrayO.includes(2)) {
                if (availableMoves.includes(1)) {
                    oMove = 1;
                }
            }

            if (arrayO.includes(1) && arrayO.includes(2)) {
                if (availableMoves.includes(0)) {
                    oMove = 0;
                }
            }

            if (arrayO.includes(3) && arrayO.includes(4)) {
                if (availableMoves.includes(5)) {
                    oMove = 5;
                }
            }

            if (arrayO.includes(3) && arrayO.includes(5)) {
                if (availableMoves.includes(4)) {
                    oMove = 4;
                }
            }

            if (arrayO.includes(4) && arrayO.includes(5)) {
                if (availableMoves.includes(3)) {
                    oMove = 3;
                }
            }

            if (arrayO.includes(6) && arrayO.includes(7)) {
                if (availableMoves.includes(8)) {
                    oMove = 8;
                }
            }

            if (arrayO.includes(6) && arrayO.includes(8)) {
                if (availableMoves.includes(7)) {
                    oMove = 7;
                }
            }

            if (arrayO.includes(7) && arrayO.includes(8)) {
                if (availableMoves.includes(6)) {
                    oMove = 6;
                }
            }

            if (arrayO.includes(0) && arrayO.includes(3)) {
                if (availableMoves.includes(6)) {
                    oMove = 6;
                }
            }

            if (arrayO.includes(0) && arrayO.includes(6)) {
                if (availableMoves.includes(3)) {
                    oMove = 3;
                }
            }

            if (arrayO.includes(3) && arrayO.includes(6)) {
                if (availableMoves.includes(0)) {
                    oMove = 0;
                }
            }

            if (arrayO.includes(1) && arrayO.includes(4)) {
                if (availableMoves.includes(7)) {
                    oMove = 7;
                }
            }

            if (arrayO.includes(1) && arrayO.includes(7)) {
                if (availableMoves.includes(4)) {
                    oMove = 4;
                }
            }

            if (arrayO.includes(4) && arrayO.includes(7)) {
                if (availableMoves.includes(1)) {
                    oMove = 1;
                }
            }

            if (arrayO.includes(2) && arrayO.includes(5)) {
                if (availableMoves.includes(8)) {
                    oMove = 8;
                }
            }

            if (arrayO.includes(2) && arrayO.includes(8)) {
                if (availableMoves.includes(5)) {
                    oMove = 5;
                }
            }

            if (arrayO.includes(5) && arrayO.includes(8)) {
                if (availableMoves.includes(2)) {
                    oMove = 2;
                }
            }
            if (arrayO.includes(0) && arrayO.includes(5) && arrayO.includes(6)) {
                if (arrayX.includes(2) && arrayX.includes(3) && arrayX.includes(4) && arrayO.includes(8)) {
                    oMove = 1;
                }
            }
        }

        $(`#${oMove}`).html(`<img src ="${oAvatarImages[oAvatar]}">`);
        $(`#${oMove}`).removeClass('clickable');
        arrayO.push(oMove);
        availableMoves.splice(availableMoves.indexOf(oMove), 1);
        turnCount += 1;
        render();
    }
}

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
let xEdBot = false;
let oEdBot = false;

const setAvatar = function() {
    if (turnCount % 2 === 0) {
        $('.square').addClass(`${xAvatar}`);
    }

    if (turnCount % 2 !== 0) {
        $('.square').addClass(`${oAvatar}`);
    }
}

const newGame = function () {
    $('.square').removeClass('x o').addClass('clickable');
    $('.square').html('<img>');
    $('#new-game').css('visibility', 'hidden');
    $('#result').css('visibility', 'hidden');
    onGoingGame = true;
    reset();
    render();
}

const resetAvatar = function() {
    $('.square').removeClass(`${xAvatar} ${oAvatar}`);
}

const saveToLocalStorage = () => {
    localStorage.setItem('xWins', xWinCount);
    localStorage.setItem('oWins', oWinCount);
}

$('.local-storage').on('click', saveToLocalStorage);

const resetScore = function () {
    localStorage.setItem('xWins', 0);
    localStorage.setItem('oWins', 0);
    xWinCount = 0;
    oWinCount = 0;
    render();
}

$('.reset-storage').on('click', resetScore);

let storedXWins = localStorage.getItem('xWins');
let storedOWins = localStorage.getItem('oWins');

if (storedXWins) {
    xWinCount = + storedXWins;
}

if (storedOWins) {
    oWinCount = + storedOWins;
}

const render = function () {   
    winCheck();
    resetAvatar();
    setAvatar();

    if (xEdBot) {
        $('#xEdBotActive').css('visibility', 'visible');
        $('#oEdBotDiv').css('visibility', 'hidden')
    } 

    if (!xEdBot) {
        $('#xEdBotActive').css('visibility', 'hidden');
        $('#oEdBotDiv').css('visibility', 'visible');
    }

    if (oEdBot) {
        $('#oEdBotActive').css('visibility', 'visible');
        $('#xEdBotDiv').css('visibility', 'hidden');
    } 

    if (!oEdBot) {
        $('#oEdBotActive').css('visibility', 'hidden');
        $('#xEdBotDiv').css('visibility', 'visible');
    }

    if (xWin) {
        $('#result').text('X wins!').css('visibility', 'visible');
        $('#x-wins').text(`Wins: ${xWinCount}`);
        $('#new-game').css('visibility', 'visible');
        $('.square').removeClass('clickable');
        onGoingGame = false;
        reset();
        turnCount += 1;
    }

    if (oWin) {
        $('#result').text('O wins!').css('visibility', 'visible');
        $('#o-wins').text(`Wins: ${xWinCount}`);
        $('#new-game').css('visibility', 'visible');
        $('.square').removeClass('clickable');
        onGoingGame = false;
        reset();
    }

    if (arrayX.length + arrayO.length >= 9 && !xWin && !oWin) {
        $('#result').text('Draw').css('visibility', 'visible');
        $('#new-game').css('visibility', 'visible');
        onGoingGame = false;
        reset();
        turnCount += Math.floor(Math.random() * 2);
    }
  
    if (turnCount % 2 === 0) {
        $('#players-turn').text(`X`);
    } else {
        $('#players-turn').text('O');
    }

    $('#new-game').addClass('hidden');

    $('#x-wins').text(`Wins: ${xWinCount}`);
    $('#o-wins').text(`Wins: ${oWinCount}`);
    
    xAIMove();
    oAIMove();
};


$(document).ready(function() {
    render();
    $('.clickable').click(function() {
        if (turnCount % 2 === 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            const gridValue = + $(this).attr('id');
            arrayX.push(gridValue);
            availableMoves.splice(availableMoves.indexOf(gridValue), 1);
            $(this).find('img').attr('src', xAvatarImages[xAvatar]);
            $(this).removeClass('clickable')
            render();
        } else if (turnCount % 2 !== 0 && $(this).hasClass('clickable') === true) {
            turnCount += 1;
            const gridValue = + $(this).attr('id');
            arrayO.push(gridValue);
            availableMoves.splice(availableMoves.indexOf(gridValue), 1);
            $(this).find('img').attr('src', oAvatarImages[oAvatar]);
            $(this).removeClass('clickable');
            render();
        }
    });

    $('#new-game').on('click', function() {
        newGame();
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

    $('#xEdBot').click(function () {
        turnCount = 0;
        if (xEdBot === true) {
            xEdBot = false;
        } else {
        xEdBot = true;
        }
        newGame();
        reset();
        render();
    });

    $('#oEdBot').click(function () {
        turnCount = 0;
        if (oEdBot === true) {
            oEdBot = false;
        } else {
        oEdBot = true;
        }
        newGame();
        reset();
        render();
    });
});