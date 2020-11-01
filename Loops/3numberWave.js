let input = ['6'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let output1 = "";
let output2 = "";

for (let i = 1; i <= n; i++) {
    output1 = output1.concat(i.toString() + " ");
}
for (let j = n - 1; j >= 1; j--) {
    output2 = output2.concat(j.toString() + " ");
}

print(`${output1}${output2}`);