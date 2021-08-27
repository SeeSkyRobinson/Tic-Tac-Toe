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
        //sync up AI = player O score
        //turn choice are still bugged
        //general layout
            //animations
            //colours

        //buttons for custom styles
        //

        //add in player set names and photos customize board style

        //STYLE STYLE STYLE


var squaresArray = document.querySelectorAll('.squares')
var winMessage = document.querySelector('.win-message')
var playAgainBtn = document.querySelector('.play-again-btn')
var xCounter = document.querySelector('.x-score')
var oCounter = document.querySelector('.o-score')
var currentPlayer = document.querySelector('.player-turn')
var cursorChange = document.querySelector('.game-board')
var totalGames = document.querySelector('.total-games')
var aiBtn = document.querySelector('.ai-btn')
var aiModeSpan = document.querySelector('.ai-mode-span')
// var aiScoreWrapper = document.querySelector('.ai-score-wrapper')
// var aiCounter = document.querySelector('.ai-score')
var oAIToggle = document.querySelector('.o-ai-toggle')

var xActivePlayer = true
var xLogArray = []
var oLogArray = []
var xWinCondition = false
var oWinCondition = false
var gameWinState = false
var checkedCounter = [] 
var totalGamesCounter = 0
var aiMode = false
var nonValidTarget = false

xScore = 0
oScore = 0

aiModeSpan.textContent = 'OFF'
currentPlayer.textContent = "X"
playAgainBtn.style.display = 'none'
// aiScoreWrapper.style.display = 'none'
aiBtn.addEventListener('click', aiBtnClick)
playAgainBtn.addEventListener('click', gameReset)

for (let i = 0; i < squaresArray.length; i ++) {
    squaresArray[i].addEventListener('click', clickSquare)
}


function aiBtnClick() {
    if (aiMode === false) {
        aiMode = true
        oAIToggle.textContent = "AI"
        aiBtn.style.backgroundColor = 'crimson'
        startAI()
        aiModeSpan.textContent = "ON"
    } else {
        aiMode = false
        oAIToggle.textContent = "O"
        aiBtn.style.backgroundColor = 'mintcream'
        aiModeSpan.textContent = "OFF"
    }
}

function startAI() {
    if (xActivePlayer === true) {
        currentPlayer.textContent = 'X'
    } else {
        currentPlayer.textContent = 'O'
        aiEnterValue()
        switchPlayer()
    }
}

// function randomizeStartingPlayer() {
//     let oneOrZero = Math.round(Math.random())
//     boolean = false
//     if (oneOrZero === 1) {
//         boolean = true
//     } else {
//         boolean = false
//     }
//     if (boolean === true) {
//         xActivePlayer = true
//     } else {
//         xActivePlayer = false
//     }
// }


function clickSquare(event) {
    if (gameWinState === false) {
        enterValue(event)
        if (nonValidTarget === true) {
            nonValidTarget = false
            return
        }
        switchPlayer()
        if (xWinCondition === true || oWinCondition === true){
            win()
        }
    }   
    if (aiMode === true) {
        if (xActivePlayer === false) {
            aiEnterValue()
            switchPlayer()
        }
    }    
}


function aiEnterValue(){
    //AGGRESSIVE MOVES
    for (let i = 1; i <= 7; i = i + 3) { //filling 3,6,9 H
        if (oLogArray.includes(String(i)) && oLogArray.includes(String(i + 1)) && xLogArray.includes(String(i + 2)) === false){
            squaresArray[(i + 1)].textContent = 'o'
            squaresArray[(i + 1)].classList.add('checked')
            oLogArray.push(String(i + 2))
            checkAIwin()
            if (gameWinState === true) {
                return
            }
            checkDraw()
            return
        }
    }
    for (let i = 1; i <= 7; i = i + 3) { //filling 2,5,8 H
        if (oLogArray.includes(String(i)) && oLogArray.includes(String(i + 2)) && xLogArray.includes(String(i + 1)) === false){
            squaresArray[i].textContent = 'o'
            squaresArray[i].classList.add('checked')
            oLogArray.push(String(i + 1))
            checkAIwin()
            if (gameWinState === true) {
                return
            }
            checkDraw()
            return
        }
    }
    for (let i = 1; i <= 7; i = i + 3) { //filling 1,4,7 H
        if (oLogArray.includes(String(i + 1)) && oLogArray.includes(String(i + 2)) && xLogArray.includes(String(i)) === false){
            squaresArray[(i - 1)].textContent = 'o'
            squaresArray[(i - 1)].classList.add('checked')
            oLogArray.push(String(i))
            checkAIwin()
            if (gameWinState === true) {
                return
            }
            checkDraw()
            return
        }
    }
    for (let i = 1; i <= 3; i ++) { //filling 7,8,9 V
        if (oLogArray.includes(String(i)) && oLogArray.includes(String(i + 3)) && xLogArray.includes(String(i + 6)) === false){
            squaresArray[(i + 5)].textContent = 'o'
            squaresArray[(i + 5)].classList.add('checked')
            oLogArray.push(String(i + 6))
            checkAIwin()
            if (gameWinState === true) {
                return
            }
            checkDraw()
            return
        }
    }
    for (let i = 1; i <= 3; i ++) { //filling 4,5,6 V
        if (oLogArray.includes(String(i)) && oLogArray.includes(String(i + 6)) && xLogArray.includes(String(i + 3)) === false){
            squaresArray[(i + 2)].textContent = 'o'
            squaresArray[(i + 2)].classList.add('checked')
            oLogArray.push(String(i + 3))
            checkAIwin()
            if (gameWinState === true) {
                return
            }
            checkDraw()
            return
        }
    }
    for (let i = 1; i <= 3; i ++) { //filling 1,2,3 V
        if (oLogArray.includes(String(i + 3)) && oLogArray.includes(String(i + 6)) && xLogArray.includes(String(i)) === false){
            squaresArray[(i - 1)].textContent = 'o'
            squaresArray[(i - 1)].classList.add('checked')
            oLogArray.push(String(i))
            checkAIwin()
            if (gameWinState === true) {
                return
            }
            checkDraw()
            return
        }
    }
    if (oLogArray.includes('9') && oLogArray.includes('5') && xLogArray.includes('1') === false){
            squaresArray[0].textContent = 'o'
            squaresArray[0].classList.add('checked')
            oLogArray.push('1')
            checkAIwin()
            if (gameWinState === true) {
                return
            }
            checkDraw()
            return
    }
    if (oLogArray.includes('9') && oLogArray.includes('1') && xLogArray.includes('5') === false){
        squaresArray[4].textContent = 'o'
        squaresArray[4].classList.add('checked')
        oLogArray.push('5')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
    }
    if (oLogArray.includes('1') && oLogArray.includes('5') && xLogArray.includes('9') === false){
        squaresArray[8].textContent = 'o'
        squaresArray[8].classList.add('checked')
        oLogArray.push('9')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
    }
    if (oLogArray.includes('3') && oLogArray.includes('5') && xLogArray.includes('7') === false){
        squaresArray[6].textContent = 'o'
        squaresArray[6].classList.add('checked')
        oLogArray.push('7')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
    }
    if (oLogArray.includes('3') && oLogArray.includes('7') && xLogArray.includes('5') === false){
        squaresArray[4].textContent = 'o'
        squaresArray[4].classList.add('checked')
        oLogArray.push('5')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
    }
    if (oLogArray.includes('7') && oLogArray.includes('5') && xLogArray.includes('3') === false){
        squaresArray[2].textContent = 'o'
        squaresArray[2].classList.add('checked')
        oLogArray.push('3')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
    }  
    
    //DEFENSIVE MOVES
    if (xLogArray.includes('1') && xLogArray.includes('2') && squaresArray[2].textContent !== 'o') {
        squaresArray[2].textContent = 'o' 
        squaresArray[2].classList.add('checked')
        oLogArray.push('3')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 3
    } else if (xLogArray.includes('1') && xLogArray.includes('3') && squaresArray[1].textContent !== 'o') {
        squaresArray[1].textContent = 'o' 
        squaresArray[1].classList.add('checked')
        oLogArray.push('2')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 2
    } else if (xLogArray.includes('2') && xLogArray.includes('3') && squaresArray[0].textContent !== 'o') {
        squaresArray[0].textContent = 'o' 
        squaresArray[0].classList.add('checked')
        oLogArray.push('1')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 1
    } else if (xLogArray.includes('4') && xLogArray.includes('5') && squaresArray[5].textContent !== 'o') {
        squaresArray[5].textContent = 'o' 
        squaresArray[5].classList.add('checked')
        oLogArray.push('6')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 6
    } else if (xLogArray.includes('4') && xLogArray.includes('6') && squaresArray[4].textContent !== 'o') {
        squaresArray[4].textContent = 'o' 
        squaresArray[4].classList.add('checked')
        oLogArray.push('5')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 5
    } else if (xLogArray.includes('5') && xLogArray.includes('6') && squaresArray[3].textContent !== 'o') {
        squaresArray[3].textContent = 'o' 
        squaresArray[3].classList.add('checked')
        oLogArray.push('4')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 4
    } else if (xLogArray.includes('7') && xLogArray.includes('8') && squaresArray[8].textContent !== 'o') {
        squaresArray[8].textContent = 'o' 
        squaresArray[8].classList.add('checked')
        oLogArray.push('9')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 9
    } else if (xLogArray.includes('7') && xLogArray.includes('9') && squaresArray[7].textContent !== 'o') {
        squaresArray[7].textContent = 'o' 
        squaresArray[7].classList.add('checked')
        oLogArray.push('8')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 8
    } else if (xLogArray.includes('8') && xLogArray.includes('9') && squaresArray[6].textContent !== 'o') {
        squaresArray[6].textContent = 'o' 
        squaresArray[6].classList.add('checked')
        oLogArray.push('7')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 7
    } else if (xLogArray.includes('1') && xLogArray.includes('4') && squaresArray[6].textContent !== 'o') {
        squaresArray[6].textContent = 'o' 
        squaresArray[6].classList.add('checked')
        oLogArray.push('7')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 7
    } else if (xLogArray.includes('1') && xLogArray.includes('7') && squaresArray[3].textContent !== 'o') {
        squaresArray[3].textContent = 'o' 
        squaresArray[3].classList.add('checked')
        oLogArray.push('4')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 4
    } else if (xLogArray.includes('4') && xLogArray.includes('7') && squaresArray[0].textContent !== 'o') {
        squaresArray[0].textContent = 'o' 
        squaresArray[0].classList.add('checked')
        oLogArray.push('1')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 1
    } else if (xLogArray.includes('2') && xLogArray.includes('5') && squaresArray[7].textContent !== 'o') {
        squaresArray[7].textContent = 'o' 
        squaresArray[7].classList.add('checked')
        oLogArray.push('8')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 8
    } else if (xLogArray.includes('2') && xLogArray.includes('8') && squaresArray[4].textContent !== 'o') {
        squaresArray[4].textContent = 'o' 
        squaresArray[4].classList.add('checked')
        oLogArray.push('5')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 5
    } else if (xLogArray.includes('5') && xLogArray.includes('8') && squaresArray[1].textContent !== 'o') {
        squaresArray[1].textContent = 'o' 
        squaresArray[1].classList.add('checked')
        oLogArray.push('2')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 2
    } else if (xLogArray.includes('3') && xLogArray.includes('6') && squaresArray[8].textContent !== 'o') {
        squaresArray[8].textContent = 'o' 
        squaresArray[8].classList.add('checked')
        oLogArray.push('9')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 9
    } else if (xLogArray.includes('3') && xLogArray.includes('9') && squaresArray[5].textContent !== 'o') {
        squaresArray[5].textContent = 'o' 
        squaresArray[5].classList.add('checked')
        oLogArray.push('6')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 6
    } else if (xLogArray.includes('6') && xLogArray.includes('9') && squaresArray[2].textContent !== 'o') {
        squaresArray[2].textContent = 'o' 
        squaresArray[2].classList.add('checked')
        oLogArray.push('3')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 3
    } else if (xLogArray.includes('1') && xLogArray.includes('5') && squaresArray[8].textContent !== 'o') {
        squaresArray[8].textContent = 'o' 
        squaresArray[8].classList.add('checked')
        oLogArray.push('9')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 9
    } else if (xLogArray.includes('1') && xLogArray.includes('9') && squaresArray[4].textContent !== 'o') {
        squaresArray[4].textContent = 'o' 
        squaresArray[4].classList.add('checked')
        oLogArray.push('5')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 5
    } else if (xLogArray.includes('5') && xLogArray.includes('9') && squaresArray[0].textContent !== 'o') {
        squaresArray[0].textContent = 'o' 
        squaresArray[0].classList.add('checked')
        oLogArray.push('1')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 1
    } else if (xLogArray.includes('3') && xLogArray.includes('5') && squaresArray[6].textContent !== 'o') {
        squaresArray[6].textContent = 'o' 
        squaresArray[6].classList.add('checked')
        oLogArray.push('7')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 7
    } else if (xLogArray.includes('3') && xLogArray.includes('7') && squaresArray[4].textContent !== 'o') {
        squaresArray[4].textContent = 'o' 
        squaresArray[4].classList.add('checked')
        oLogArray.push('5')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 5
    } else if (xLogArray.includes('5') && xLogArray.includes('7') && squaresArray[2].textContent !== 'o') {
        squaresArray[2].textContent = 'o' 
        squaresArray[2].classList.add('checked')
        oLogArray.push('3')
        checkAIwin()
        if (gameWinState === true) {
            return
        }
        checkDraw()
        return
        //go 3
    }

    let bothLogArray = xLogArray.concat(oLogArray)
    let allPossibleArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    for (let i = 1; i < 10; i++) {
        if (bothLogArray.includes(String(i)) && allPossibleArray.includes(String(i))) {
            let findValue = (x) => x === String(i)
            let indexOfValue = allPossibleArray.findIndex(findValue)
            allPossibleArray.splice(indexOfValue, 1)
        }
    }
    let randomAIChoice = allPossibleArray[Math.floor(Math.random() * allPossibleArray.length)]
    let indexOfRandomAIChoice = Number(randomAIChoice) - 1 //this can spit out -1 if all tiles are full. which will create an error message
    squaresArray[indexOfRandomAIChoice].textContent = "o"
    squaresArray[indexOfRandomAIChoice].classList.add('checked')
    oLogArray.push(randomAIChoice)

    checkAIwin()
    if (gameWinState === true) {
        return
    }
    checkDraw()
}
    
function checkAIwin() {
    if (oLogArray.includes('1') && oLogArray.includes('2') && oLogArray.includes('3')) {
        oWinCondition = true
        win()
    } else if (oLogArray.includes('1') && oLogArray.includes('5') && oLogArray.includes('9')) {
        oWinCondition = true
        win()
    } else if (oLogArray.includes('3') && oLogArray.includes('5') && oLogArray.includes('7')) {
        oWinCondition = true
        win()
    } else if (oLogArray.includes('4') && oLogArray.includes('5') && oLogArray.includes('6')) {
        oWinCondition = true
        win()
    } else if (oLogArray.includes('7') && oLogArray.includes('8') && oLogArray.includes('9')) {
        oWinCondition = true
        win()
    } else if (oLogArray.includes('1') && oLogArray.includes('4') && oLogArray.includes('7')) {
        oWinCondition = true
        win()
    } else if (oLogArray.includes('2') && oLogArray.includes('5') && oLogArray.includes('8')) {
        oWinCondition = true
        win()
    } else if (oLogArray.includes('3') && oLogArray.includes('6') && oLogArray.includes('9')) {
        oWinCondition = true
        win()
    }

}

function checkDraw() {
    for (let i = 0; i < squaresArray.length; i++) {
        if (squaresArray[i].textContent === 'x' || squaresArray[i].textContent === 'o'){
            checkedCounter.push('1')
        }
    }
    if (checkedCounter.length === 45 && oWinCondition !== true && xWinCondition !== true) { 
       winMessage.textContent = "You've drawn!"
       playAgainBtn.style.display = 'block'
       totalGamesCounter += 1
       totalGames.textContent = totalGamesCounter
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
        event.target.classList.add("checked")
        checkDraw()
        
    } else {
        alert("Select a valid square")
        nonValidTarget = true
    }    
}

function switchPlayer() {
    if (xActivePlayer === true) {
        xActivePlayer = false
        // cursorChange.style.cursor = 'not-allowed'
        currentPlayer.textContent = 'O'
        //temp removed these to get ai functioning
    } else {
        xActivePlayer = true
        // cursorChange.style.cursor = 'crosshair'
        currentPlayer.textContent = 'X'
    }
}

function win() {
    if (oWinCondition === true) {
        if (aiMode === true) {
            winMessage.textContent = "AI wins!"
        } else {
            winMessage.textContent = "O wins!"
        }        
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
    if (aiMode === true) {
        //50% of the time start the ai first
        let oneOrZero = Math.round(Math.random())
        boolean = false
        if (oneOrZero === 1) {
            boolean = true
        } else {
            boolean = false
        }
        if (boolean === true) {
            xActivePlayer = true
        } else {
            xActivePlayer = false
        }
        if (xActivePlayer === false) {
            aiEnterValue()
            switchPlayer()
        } else {
            currentPlayer.textContent = 'X'
        }
    }
}









