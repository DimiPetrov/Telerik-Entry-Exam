let input = ['6', '9', '11', '3', '2', '1', '8'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
    let firstNum = -Infinity;
    let secondNum = -Infinity;
    let thirdNum = -Infinity;
    for (let i = 0; i < n; i++) {
        let currentNum = +gets();
        if (currentNum >= firstNum) {
            thirdNum = secondNum;
            secondNum = firstNum;
            firstNum = currentNum;
        } else if (currentNum >= secondNum) {
            thirdNum = secondNum;
            secondNum = currentNum;
        } else if (currentNum >= thirdNum) {
            thirdNum = currentNum;
        }
    }
    print(`${firstNum}, ${secondNum} and ${thirdNum}`);
