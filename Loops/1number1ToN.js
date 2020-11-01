let input = ['5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let myNumber = +gets();
let output = "";

for (let i = 1; i <= myNumber; i++) {
    output = output.concat(i.toString() + " ");
}
print(output);