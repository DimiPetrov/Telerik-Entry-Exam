//function solve(input1, input2) {
// let array1 = input1.map(Number);
// let array2 = input2.map(Number);
// let arr = [];
//for(let i = 0; i < array1.length; i++) {
// arr.push(array1[i]);
// arr.push(array2[i]);
//}
//console.log(arr.join(','));
//}

//solve([2,3,1],[5,2,3])

let input = ['2, 3, 1', '5, 2, 3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let array1 = gets().split(',').map(Number);
let array2 = gets().split(',').map(Number);
let arr = [];
for (let i = 0; i < array1.length; i++) {
    arr.push(array1[i]);
    arr.push(array2[i]);
}
print(arr.join(','));