let input = ['3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
for(let i = 0; i < n; i++) {
    const list = gets();
    const numbers = list.split(',').map(Number).sort((a, b) => a - b).join(',');
    if(list === numbers) {
        print(true);
    } else {
        print(false);
    }
}