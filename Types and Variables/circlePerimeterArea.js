let input = ['3.5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let r = Number(gets());
let perimeter = (Math.PI * r * 2).toFixed(2);
let area = (Math.PI * r * r).toFixed(2);
print(perimeter);
print(area);

