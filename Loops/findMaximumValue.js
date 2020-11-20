let input = ['3',
    '1',
    '2',
    '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let max = Number.MIN_SAFE_INTEGER;

for(let i = 0; i < n; i++) {
    const num = +gets();
    if(num > max) {
        max = num;
    }
}
print(max);

