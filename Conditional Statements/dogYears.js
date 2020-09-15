function solve(arg) {
    let humanYears = arg;
    if(humanYears <= 2) {
        dogYears = humanYears * 10;
    } else {
        dogYears = 20 + (humanYears - 2) * 4;
    }
    console.log(dogYears);
}

solve(4)