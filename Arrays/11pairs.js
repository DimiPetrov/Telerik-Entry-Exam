let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = 6;
let arr = [1, 2, 3, 4, 3, 6, 5, 8, 3, 9];
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] == n) {
            print(`${arr[i]}, ${arr[j]}`);
        }
    }
}