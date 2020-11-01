let input = ['3', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let x = +gets();
let sum = 1;

for (let i = 1; i <= n; i++) {
    sum += fact(i) / Math.pow(x, i);
}
print(sum.toFixed(5));

function fact(n) {
    if (n > 1) {
        let value = n * fact(n - 1);
        return value;
    } else {
        return 1;
    }
}

