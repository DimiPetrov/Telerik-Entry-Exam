let input = ['10', '10', '10', '10', '10'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num1 = Number(gets());
let num2 = Number(gets());
let num3 = Number(gets());
let num4 = Number(gets());
let num5 = Number(gets());

let sum = num1 + num2 + num3 + num4 + num5;
print(sum);

