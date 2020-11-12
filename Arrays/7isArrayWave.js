let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = [2, 1, 3, 4, 2, 3];
let isWave = false;
for(let i = 0; i < array.length - 2; i++) {
    if(array[i] < array[i + 1] && array[i + 1] > array[i + 2] ||
        array[i] > array[i + 1] && array[i + 1] < array[i + 2]) {
        isWave = true;
    } else {
        isWave = false;
        break;
    }
}
if(isWave) {
    print('Yes');
} else {
    print('No')
}