let input = ['3,-12,0,0,13,5,1,0,-2'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number);
let below = [];
let above = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let average = (sum / arr.length).toFixed(2);

for(let j = 0; j < arr.length; j++) {
    if(arr[j] < average) {
        below.push(arr[j])
    } else if(arr[j] > average)  {
        above.push(arr[j]);
    }
}

print(`avg: ${average}`);
print(`below: ${below.join(',')}`);
print(`above: ${above.join(',')}`);

