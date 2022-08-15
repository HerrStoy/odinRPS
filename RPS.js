function rockpaperscissors() {
    let option = prompt("What's your weapon of choice?");
    let opNum = 0;
    let randInt = Math.floor(Math.random() * 3);
    console.log(randInt);
    
    if (option == "rock") {
        opNum = 0;
    } else if (option == "paper") {
        opNum = 1;
    } else if (option == "scissors") {
        opNum = 2;
    }
    console.log(opNum);

    // now 2 beats 1 beats 0 beats 2

    switch (opnum) {
        
    }

}

rockpaperscissors();