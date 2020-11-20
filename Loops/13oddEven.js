let input = ['5',
    '2',
    '1',
    '1',
    '6',
    '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let oddProduct = 1;
let evenProduct = 1;

for (let i = 1; i <= n; i++) {
    let num = +gets();
    if (i % 2 === 1) {
        oddProduct *= num;
    } else if (i % 2 === 0) {
        evenProduct *= num;
    }
}

if (oddProduct = evenProduct) {
    print(`yes ${oddProduct}`);
} else {
    print(`no ${oddProduct} ${evenProduct}`);
}
