let input = ['1 2 3 4 5 6 5 8 9'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(' ').map(e => +e);
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            print(arr[i]);
        }
    }
}