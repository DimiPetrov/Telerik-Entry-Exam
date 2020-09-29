function solve(input) {
    let items = Number(input.shift());

    for (let i = 1; i <= items; i++) {
        let price = Number(input.shift());
        let discPrice = (price * 0.35).toFixed(2);
        console.log(discPrice);
    }
}

let items = +gets();

    for (let i = 0; i < items; i++) {
        let price = +gets();
        let discPrice = Math.round(price * 35) / 100;
        print(discPrice.toFixed(2));
    }

solve('2', '50', '40')