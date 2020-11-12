let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = [3, 4, 5, 3, 4, 5];
let isSymmetric = false;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[arr.length - 1 - i]) {
        isSymmetric = true; 
    } else {
        isSymmetric = false;
        break;
    }
}
if(isSymmetric) {
    print(`Yes`);
} else{
    print('No');
}