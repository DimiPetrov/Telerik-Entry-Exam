let input = ['5,3,2,1','2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number);
let rotation = +gets();

while(rotation > 0) {
    const firstEl = arr.shift();
    arr.push(firstEl);
    rotation--;
}

print(arr.join(','));