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
        return [0,"Round tied"]
    }
    else if (wins[p] == c) {
        return [1,`You Won! ${playerSelection} beats ${computerSelection}`]
    }
    else {
        return [-1,`You Lose! ${computerSelection} beats ${playerSelection}`]
    }
}

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
}
