function solve(input) {
    let items = Number(input.shift());

    for (let i = 1; i <= items; i++) {
        let price = Number(input.shift());
        let discPrice = (price * 0.35).toFixed(2);
        console.log(discPrice);
    }
}

solve('2', '50', '40')