let input = ['3,-12,0,0,13,5,1,0,-2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number);
let negative = [];
let zeroes = [];
let positive = [];

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < 0) {
        negative.push(num);
    } else if (num == 0) {
        zeroes.push(num);
    } else {
        positive.push(num);
    }
}
print(negative.concat(zeroes, positive).join(','));