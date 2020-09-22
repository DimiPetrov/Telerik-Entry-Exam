function solve(input) {
    let index = 0;
    let items = Number(input[index]);
    index++;

    for(let i = 1; i <= items; i++) {
        let price = Number(input[index]);
        index++;
        let discPrice = (price * 0.35).toFixed(2);
        console.log(discPrice);
    }
}

solve('2', '50', '40')