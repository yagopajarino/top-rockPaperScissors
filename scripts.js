function computerPlay() {
    let l = ["Rock", "Paper", "Scissors"]
    let n = Math.floor(Math.random() * (3 - 0)) + 0
    return l[n]
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase()
    let c = computerSelection.toLowerCase()
    wins = {"rock" : "scissors", "paper" : "rock", "scissors" : "paper"}
    if (p == c) {
        return 0
    }
    else if (wins[p] == c) {
        return 1
    }
    else {
        return 2
    }
}

let buttons = document.querySelectorAll(".option_btn")
buttons.forEach(function(btn) {
    btn.addEventListener("click", buttonPlay.bind(null,btn))
})

function buttonPlay(btn) {
    let userSel = btn.id
    let cPlay = computerPlay()
    let round_winner = playRound(userSel,cPlay)
    change_results(round_winner, userSel, cPlay)
    check_winner()
}

function change_results(r, p, c) {
    let message = document.createElement("li")
    let res_div = document.querySelector(".resBullets")
    let userPoints = document.querySelector("#user_points")
    let compPoints = document.querySelector("#computer_points")
    if(r === 0) {
        message.textContent=`Draw! You chose ${p} and computer ${c}`
    }
    else if (r === 1){
        message.textContent=`You win! You chose ${p} and computer ${c}`
        n = parseInt(userPoints.textContent)
        n += 1
        userPoints.textContent = n
        
    }
    else {
        message.textContent=`You lose! You chose ${p} and computer ${c}`
        n = parseInt(compPoints.textContent)
        n += 1
        compPoints.textContent = n
    }
    res_div.appendChild(message)
}

function check_winner() {
    let userPoints = document.querySelector("#user_points")
    let compPoints = document.querySelector("#computer_points")
    let winDiv = document.querySelector(".winnerMessage")
    if (userPoints.textContent === "5") {
        winDiv.textContent = "You Won!!"
        removeListeners()
    }
    else if (compPoints.textContent === "5") {
        winDiv.textContent = "You Lost!!"
        removeListeners()
    }
    return 0
}

function removeListeners() {
    buttons.forEach(function(btn) {
        btn.replaceWith(btn.cloneNode(true))
    })
}

/* Deprecated
function game() {
    let pScore = 0
    for (let x = 0; x < 5; x++) {
        pSel = prompt("Choose rock, paper or scissor: ")
        pSel = pSel.toLowerCase()
        while (["rock", "paper", "scissors"].includes(pSel) == false) {
            alert("Invalid selection")
            pSel = prompt("Choose rock, paper or scissor: ")
        }
        let result = playRound(pSel, computerPlay())
        pScore += result[0]
        console.log(result[1])
    }
    if (pScore == 0) {
        console.log("Game tied") 
    }
    else if (pScore > 0) {
        console.log(`You won the game!`)
    }
    else {
        console.log(`You lost the game!`)
    }
} */


