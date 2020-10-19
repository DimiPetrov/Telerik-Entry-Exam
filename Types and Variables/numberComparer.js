let input = ['-5', '-2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = Number(gets());
let b = Number(gets());
let greater = Math.max(a, b);
print(greater);