//Making a tic tac to game

//draw out the grid
    //grid of 9 divs
    //with borders on some of the sides to make the cross hatch shape

//click on a space will fill x
    //adds content to the div
//click on switch player button
//click will fill o
    //adds content to the div
//loop.each time checking if three in a line occurs
//if win condition occurs, print x or o wins, updates score counter
//empties fill from the board


//make it fancy later
    //remove the toggle player button. Have an event listener for a click which toggles the active player. DONE!
    //disable clicking on the div thats already been clicked


var squaresArray = document.querySelectorAll('.squares')
var winMessage = document.querySelector('.win-message')


var xActivePlayer = true
var xLogArray = []
var oLogArray = []
var xWinCondition = false
var oWinCondition = false
var gameWinState = false 



function switchPlayer() {
    if (xActivePlayer === true) {
        xActivePlayer = false
    } else {
        xActivePlayer = true
    }
}

for (let i = 0; i < squaresArray.length; i ++) {
    squaresArray[i].addEventListener('click', clickSquare)
}

function clickSquare(event) {
    if (gameWinState !== true) {
        enterValue(event)
    }
    win()
}

function enterValue(event) {
    if (event.target.classList.contains("checked") !== true) {
        if (xActivePlayer === true) {
            event.target.textContent = 'x'
            xLogArray.push(event.target.id)
            if (xLogArray.includes('1') && xLogArray.includes('2') && xLogArray.includes('3')) {
                xWinCondition = true
                return
            } else if (xLogArray.includes('1') && xLogArray.includes('5') && xLogArray.includes('9')) {
                xWinCondition = true
                return
            } else if (xLogArray.includes('3') && xLogArray.includes('5') && xLogArray.includes('7')) {
                xWinCondition = true
                return
            } else if (xLogArray.includes('4') && xLogArray.includes('5') && xLogArray.includes('6')) {
                xWinCondition = true
                return
            } else if (xLogArray.includes('7') && xLogArray.includes('8') && xLogArray.includes('9')) {
                xWinCondition = true
                return
            } else if (xLogArray.includes('1') && xLogArray.includes('4') && xLogArray.includes('7')) {
                xWinCondition = true
                return
            } else if (xLogArray.includes('2') && xLogArray.includes('5') && xLogArray.includes('8')) {
                xWinCondition = true
                return
            } else if (xLogArray.includes('3') && xLogArray.includes('6') && xLogArray.includes('9')) {
                xWinCondition = true
                return
            }
        } else {
            event.target.textContent = 'o'
            oLogArray.push(event.target.id)
            if (oLogArray.includes('1') && oLogArray.includes('2') && oLogArray.includes('3')) {
                oWinCondition = true
                return
            } else if (oLogArray.includes('1') && oLogArray.includes('5') && oLogArray.includes('9')) {
                oWinCondition = true
                return
            } else if (oLogArray.includes('3') && oLogArray.includes('5') && oLogArray.includes('7')) {
                oWinCondition = true
                return
            } else if (oLogArray.includes('4') && oLogArray.includes('5') && oLogArray.includes('6')) {
                oWinCondition = true
                return
            } else if (oLogArray.includes('7') && oLogArray.includes('8') && oLogArray.includes('9')) {
                oWinCondition = true
                return
            } else if (oLogArray.includes('1') && oLogArray.includes('4') && oLogArray.includes('7')) {
                oWinCondition = true
                return
            } else if (oLogArray.includes('2') && oLogArray.includes('5') && oLogArray.includes('8')) {
                oWinCondition = true
                return
            } else if (oLogArray.includes('3') && oLogArray.includes('6') && oLogArray.includes('9')) {
                oWinCondition = true
                return
            }
        }
        switchPlayer()
        event.target.classList.add("checked")
    }    
}

function win() {
    if (oWinCondition === true) {
        winMessage.textContent = "O wins!"
        gameWinState = true
    } else if (xWinCondition === true) {
        winMessage.textContent = "X wins!"
        gameWinState = true
    }
}



