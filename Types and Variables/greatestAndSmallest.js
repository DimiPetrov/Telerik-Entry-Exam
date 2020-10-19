let input = ['10', '10', '10'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n1 = Number(gets());
let n2 = Number(gets());
let n3 = Number(gets());

let greatest = Math.max(n1, n2, n3);
let smallest = Math.min(n1, n2, n3);
print(greatest + smallest);