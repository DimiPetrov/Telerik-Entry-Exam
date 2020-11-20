const input = ['185'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets().split('');
let a = +n[0];
let b = +n[1];
let c = +n[2];

let biggest = (a + b + c);
biggest = Math.max(biggest, a * b * c);
biggest = Math.max(biggest, a + b * c);
biggest = Math.max(biggest, a * b + c);

print(biggest);