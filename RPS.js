/*
function rps(p1, p2) {
 if (p1 === p2) return "It's a draw!"
 else if (p1 === "Rock" && p2 === "Scissors") return "Player 1 wins!"
 else if (p1 === "Paper" && p2 === "Rock") return "Player 1 wins!"
 else if (p1 === "Scissors" && p2 === "Paper") return "Player 1 wins!"
 else return "Player 2 wins!"
}

console.log(rps("Rock", "Paper"))
*/
/*
function rps2(p1, p2){
    let obj = {
        Rock: "Scissors",
        Scissors: "Paper",
        Paper: "Rock"
    }
    return p1 === p2 ? "It's a draw!" : obj[p1] === p2 ? "Player 1 Wins!" : "Player 2 Wins!"
}

console.log(rps2("Rock", "Paper"))
*/

function rps3(p1, p2){
    const wins = ["RockScissors","PaperRock","ScissorsPaper"]
    return p1 === p2 ? "It's a draw!" : `The winner is ${wins.includes(p1 + p2) ? 'Player 1' : 'Player 2'}`
}

console.log(rps3("Scissors", "Paper"))