let input = ['1, 2, 2, 2, 2, 18, 3, 12'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = gets().split(',');
let output= [];
for (let i = 0; i < arr.length; i++) {
    let current = Number(arr[i]);
    if (!output.includes(current)) {
        output.push(current);
    }
}
       

print(output);


