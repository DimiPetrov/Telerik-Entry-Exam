function solve(input) {
    let n = Number(input.shift());
    let firstNum = '';
    let secondNum = '';
    let thirdNum = '';
    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input.shift());
        if (currentNum > firstNum) {
            thirdNum = secondNum;
            secondNum = firstNum;
            firstNum = currentNum;
        } else if (currentNum > secondNum) {
            thirdNum = secondNum;
            secondNum = currentNum;
        } else if (currentNum > thirdNum) {
            thirdNum = currentNum;
        }
    }
    console.log(`${firstNum}, ${secondNum} and ${thirdNum}`);
}

solve('6', '9', '11', '3', '2', '1', '8')