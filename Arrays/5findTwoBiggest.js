let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = [8, 7, 8, 11, 7, 11, 5, 8, 10];
let biggest = Math.max(...arr);
let index1 = arr.indexOf(biggest);
arr.splice(index1, 1);
let secondBiggest = Math.max(...arr);
let index2 = arr.indexOf(secondBiggest);
arr.splice(index2, 1);
print(`${biggest} ${secondBiggest}`);



