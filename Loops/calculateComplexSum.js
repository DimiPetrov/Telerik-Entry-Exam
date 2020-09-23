function solve(input1, input2) {
    let n = Number(input1);
    let x = Number(input2);
    let sum = 1;

    for (let i = 1; i <= n; i++) {
        sum += i! / Math.pow(x, i);
    }
    console.log(sum.toFixed(5));
}

solve(3, 2)