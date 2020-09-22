function solve(input) {
    let N = Number(input[0]);
    let sum = 0;

    for(let i = 1; i <= N; i++) {
        let num = input.shift();
        sum += num;
    }

    let average = (sum / N).toFixed(2);
    console.log(average);
}

solve('3', '2.5', '1.25', '3')