const input = ['3,4,3,'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number);
let leftSum = 0;
let rightSum = 0;
let isEqual = false;
let index = -1;
for(let i = 1; i < arr.length - 1; i++) {
    for(let j = 0; j < i; j++) {
        leftSum += arr[j];
    }
    for(let j = i + 1; j < arr.length; j++) {
        rightSum += arr[j];
    }
    if(leftSum === rightSum) {
        isEqual = true;
        index === i;
        break;
    }
    leftSum = 0;
    rightSum = 0;
}
if(isEqual) {
    print(i);
} else {
    print(`-1`);
}
