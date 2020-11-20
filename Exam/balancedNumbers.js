const input = ['275',
    '693',
    '110',
    '742'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num = gets();
let digit1 = Number(num[0]);
let digit2 = Number(num[1]);
let digit3 = Number(num[2]);
let isBalanced = digit1 + digit3 === digit2;
let sum = 0;
while (isBalanced) {
    sum += +num;
    num = gets();
    digit1 = Number(num[0]);
    digit2 = Number(num[1]);
    digit3 = Number(num[2]);
    isBalanced = digit1 + digit3 === digit2;
}

print(sum);