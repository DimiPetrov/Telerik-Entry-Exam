function solve(input) {
    let n = Number(input);
    let sum = 0;
    do {
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);
    console.log(sum);
}

solve(2346)