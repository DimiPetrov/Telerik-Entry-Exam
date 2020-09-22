function solve(input) {
    let index = 0;
    let N = Number(input[index]);
    index++;
    let sum = 0;

    for(let i = 1; i <= N; i++) {
        let num = Number(input[index]);
        index++;
        sum += num;
    }
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let average = sum / N;
    console.log(`min= ${minNum.toFixed(2)}`);
    console.log(`max= ${maxNum.toFixed(2)}`);
    console.log(`sum= ${sum.toFixed(2)}`);
    console.log(`avg= ${average.toFixed(2)}`);
}

solve('3', '2', '5', '1')