function solve(input) {
    let numbers = input.shift();
    let sum = 0;

    for (let i = 1; i <= numbers; i++) {
        let num = input.shift();
        sum += num;
    }

    let average = (sum / numbers).toFixed(2);
    console.log(average);
}

solve('3', '2.5', '1.25', '3')