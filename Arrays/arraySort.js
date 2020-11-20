let input = ['0,0,0,5,0,3,2,3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',').map(Number);
let nonzeroes = [];
let zeroes = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 0){
        zeroes.push(arr[i]);
    } else {
        nonzeroes.push(arr[i]);
    }
}

let output = `${nonzeroes.join(',')},${zeroes.join(',')}`;
print(output);
