function rockpaperscissors() {
    let option = prompt("What's your weapon of choice?");
    // let option = "paper";
    let opNum = 0;
    let comp = Math.floor(Math.random() * 3);
    let msg = comp == 0 ? 'rock' : comp == 1 ? 'paper' : 'scissors';
    console.log("CPU:",comp, msg);
    
    if (option == "rock") {
        opNum = 0;
    } else if (option == "paper") {
        opNum = 1;
    } else if (option == "scissors") {
        opNum = 2;
    }
    console.log("You:", opNum, option);

    // now 2 beats 1 beats 0 beats 2

    if (opNum == 0 && comp == 1) {
        console.log("computer wins!");
    } else if (opNum == 1 && comp == 0) {
        console.log("you win!");
    } else if (opNum == 2 && comp == 0){
        console.log("computer wins!");
    } else if (opNum == 1 && comp == 2){
        console.log("computer wins!");
    } else if (opNum == 0 && comp == 2){
        console.log("you win!");
    } else if (opNum == 2 && comp == 0){
        console.log("you win!");
    } else if (opNum == comp){
        console.log("It's a tie!");
    }

}

rockpaperscissors();