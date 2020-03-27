var players = []
var markers = ["X", "O"]
var scores = [0, 0]

var gameOver = false
var whoseTurn = 0;
var sum = [7, 56, 73, 85, 146, 273, 292, 448, 337, 103, 184, 460, 458, 154, 339, 117, 369, 450]
var len = sum.length

var flag = false

//Function to get the name of the players
function getName(value) {

    players[0] = document.getElementById("firstName").value
    players[1] = document.getElementById("secondName").value

    if ((players[0] === undefined) || (players[0] === null) || (players[0] === "")) {
        alert("Enter Player Names")
        flag = false
    }
    else if ((players[1] === undefined) || (players[1] === null) || (players[1] === "")) {
        alert("Enter Player Names")
        flag = false
    }
    else {
        document.getElementById("head").textContent = players[0] + "'s Turn"
        flag = true
    }
}
//Name Function ended

//Function to start Playing
function play(divs, value) {
    if (flag == true) {
        // document.getElementById("head").textContent = "Tic Tac Toe"

        if (divs.innerHTML == "&nbsp;") {
            divs.style.textAlign = "center"
            divs.style.fontSize = "50px"
            if (!gameOver) {
                divs.innerHTML = "<span>" + markers[whoseTurn] + "</span>"
                scores[whoseTurn] += value
                console.log(players[whoseTurn] + " " + scores[whoseTurn])
                winnerCheck()
                if (!gameOver) {
                    togglePlayer()
                }
            }
        }

    }
    else
        alert("Please Enter Players Name")

}
//Play Function ended


// Function to track Whose Turn it is
function togglePlayer() {
    if (whoseTurn == 0)
        whoseTurn = 1
    else
        whoseTurn = 0
    document.getElementById('head').innerHTML = players[whoseTurn] + "'s Turn"

}
//Function ended 

//Funcion to check the winner
function winnerCheck() {
    for (var i = 0; i < len; i++) {
        if (scores[whoseTurn] == sum[i]) {
            document.getElementById('head').innerHTML = players[whoseTurn] + "  Won!"
            gameOver = true
        }
    }
    if (((scores[0] + scores[1]) == 511) && !gameOver) {
        document.getElementById('head').innerHTML = "Game Over!!"
        gameOver = true
    }
}
//Winner Function ended

//Function to draw board
function drawBoard() {
    var display = ""
    var count = 1
    for (var i = 1; i <= 3; i++) {
        display += '<div id="row-' + [i] + '">'

        for (var j = 0; j < 3; j++) {
            display += '<div onclick="play(this,' + count + ')" id="hoverColor">&nbsp;</div>'
            count *= 2
        }


        display += '</div>'
    }

    document.getElementById('board').innerHTML = display
}
//Draw function ended

//Function to Reset Board
function reset() {
    gameOver = false
    scores = [0, 0]
    drawBoard()

    document.getElementById("firstName").value = ""
    document.getElementById("secondName").value = ""
    document.getElementById('head').innerHTML = "Tic Tac Toe"
    players[0] =""
    players[1] =""
    flag = false
}
//Function ended
