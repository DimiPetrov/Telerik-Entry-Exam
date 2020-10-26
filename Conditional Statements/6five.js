let input = ['-3', '-0.5', '-1.1', '-2', '-0.1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();
let d = +gets();
let e = +gets();

let biggest = Math.max(a, b, c, d, e);
print(biggest);