const input = ['1 2 3 4', '1 2 4 4 5 6'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr1 = gets().split(' ').map(Number);
const arr2 = gets().split(' ').map(Number);

if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            print(`+ ${arr1[i]} ${arr2[i]}`);
        } else if (arr2[i] == undefined) {
            print(`- ${arr1[i]} x`);
        } else if (arr1[i] !== arr2[i]) {
            print(`- ${arr1[i]} ${arr2[i]}`);
        }
    }
} else {
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] === arr2[i]) {
            print(`+ ${arr1[i]} ${arr2[i]}`);
        } else if (arr1[i] == undefined) {
            print(`- x ${arr2[i]}`);
        } else if (arr1[i] !== arr2[i]) {
            print(`- ${arr1[i]} ${arr2[i]}`);
        }
    }
}

