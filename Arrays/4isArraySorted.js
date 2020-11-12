let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = [7, 8, 9, 10, 11, 12, 11, 13, 9];
let isIncreasing = false;
for(let i = 0; i < array.length - 1; i++) {
    if(array[i] <= array[i + 1]) {
        isIncreasing = true;
    } else {
        isIncreasing = false;
        break;
    }
}
if(isIncreasing) {
    print('Yes');
} else {
    print('No')
}