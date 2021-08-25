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
var playAgainBtn = document.querySelector('.play-again-btn')
var xCounter = document.querySelector('.x-score')
var oCounter = document.querySelector('.o-score')
var currentPlayer = document.querySelector('.player-turn')
var cursorChange = document.querySelector('.game-board')
var totalGames = document.querySelector('.total-games')


var xActivePlayer = true
var xLogArray = []
var oLogArray = []
var xWinCondition = false
var oWinCondition = false
var gameWinState = false
var checkedCounter = [] 
var totalGamesCounter = 0

xScore = 0
oScore = 0

currentPlayer.textContent = "X"
playAgainBtn.style.display = 'none'



for (let i = 0; i < squaresArray.length; i ++) {
    squaresArray[i].addEventListener('click', clickSquare)
}

playAgainBtn.addEventListener('click', gameReset)

function clickSquare(event) {
    if (gameWinState === false) {
        enterValue(event)
        if (xWinCondition === true || oWinCondition === true){
            win()
        }
    }
}

function enterValue(event) {
    if (event.target.classList.contains("checked") === false) {
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
        for (let i = 0; i < squaresArray.length; i++) {
            if (squaresArray[i].textContent === 'x' || squaresArray[i].textContent === 'o'){
                checkedCounter.push('1')
            }
        }
        if (checkedCounter.length === 45) { 
            //45 is the number at which the above lines have run every time each square has been clicked. this could be moved out of the click function. THIS COULD SHOULD BE IN ITS OWN DRAW FUNCTION
           winMessage.textContent = "You've drawn!"
           playAgainBtn.style.display = 'block'
           totalGamesCounter += 1
           totalGames.textContent = totalGamesCounter
        }
    }    
}

function switchPlayer() {
    if (xActivePlayer === true) {
        xActivePlayer = false
        cursorChange.style.cursor = 'not-allowed'
        currentPlayer.textContent = 'O'
    } else {
        xActivePlayer = true
        cursorChange.style.cursor = 'crosshair'
        currentPlayer.textContent = 'X'
    }
}

function win() {
    if (oWinCondition === true) {
        winMessage.textContent = "O wins!"
        gameWinState = true
        oScore += 1
        oCounter.textContent = oScore
    } else if (xWinCondition === true) {
        winMessage.textContent = "X wins!"
        gameWinState = true
        xScore += 1
        xCounter.textContent = xScore
    }
    if (gameWinState === true) {
        playAgainBtn.style.display = 'block'
        totalGamesCounter += 1
        totalGames.textContent = totalGamesCounter
    }
}

function gameReset() {
    switchPlayer()
    if (xActivePlayer === true) {
        currentPlayer.textContent = 'X'
    } else {
        currentPlayer.textContent = 'O'
    }
    for (let i = 0; i < squaresArray.length; i ++) {
        squaresArray[i].textContent = ''
    }
    for (let i = 0; i < squaresArray.length; i ++) {
        squaresArray[i].classList.remove('checked')
    }
    playAgainBtn.style.display = 'none'
    gameWinState = false
    winMessage.textContent = ''
    xWinCondition = false
    oWinCondition = false
    xLogArray = []
    oLogArray = []
    checkedCounter = []
}









