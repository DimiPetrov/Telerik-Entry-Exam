let input = ['1', '-1', '-2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets());
let b = Number(gets());
let c = Number(gets());
let d = (Math.pow(b, 2) - (4 * a * c));
let x1 = (- b - Math.sqrt(d)) / (2 * a);
let x2 = (- b + Math.sqrt(d)) / (2 * a);
print(x1);
print(x2);
