const computerPlay = () => {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*3)];
}

const report = (playerSelection, computerSelection) => {
    console.log(`Player played ${playerSelection.toLowerCase()}.\nComputer played ${computerSelection.toLowerCase()}. `);
}

const playRound = (plSelection , clSelection) => {
    let pSelection = plSelection;
    let cSelection = clSelection;
    if (pSelection.toLowerCase() == cSelection.toLowerCase()) {
            report(pSelection, cSelection);
            return "draw";
    } else if (pSelection.toLowerCase() == "rock") {
        if (cSelection == "Paper") {
            report(pSelection, cSelection);
            return "computer";
        } else {
            report(pSelection, cSelection);
            return "player"
        }
    } else if (pSelection.toLowerCase() == "scissors") {
        if (cSelection == "rock") {
            report(pSelection, cSelection);
            return "computer";
        } else {
            report(pSelection, cSelection);
            return "player"
        }
    } else if (pSelection.toLowerCase() == "paper") {
        if (cSelection == "scissors") {
            report(pSelection, cSelection);
            return "computer";
        } else {
            report(pSelection, cSelection);
            return "player"
        }
    } else {return "Error! Please eneter \"Rock\", \"Paper\", or \"Scissors\"."}
}

const getScore = (pWin, cWin, draw) => {
    return `Player Score: ${pWin}. CPU Score: ${cWin}. Ties: ${draw}`;
}
    

const playGame = () => {
    let upTo = prompt("Enter number of round wins required for victory");
    let pWins = 0;
    let cWins = 0;
    let draws = 0;
    let winner;

    while (pWins < upTo && cWins < upTo) {
        winner = playRound(prompt("Rock, Paper, or Scissors?"), computerPlay());
        if (winner == "draw") {
            draws++
        } else if (winner == "player") {
            pWins++
        } else {
            cWins++;
        }
        console.log(getScore(pWins, cWins, draws));
    }

    if (pWins > cWins) {
        console.log("You Win!")
    } else {
        console.log("You Lose!")
    }
}