let input = ['-0.1', '-0.5', '-5.1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

let biggest = Math.max(a, b, c);
print(biggest);