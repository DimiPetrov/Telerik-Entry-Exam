let input = ['3', '2', '5', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let sum = 0;
let n = +gets();
let theMax = Number.MIN_SAFE_INTEGER;
let theMin = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    let newValue = +gets();
    sum += newValue;
    theMax = Math.max(theMax, newValue);
    theMin = Math.min(theMin, newValue);
}

let average = sum / n;

print(`min=${theMin.toFixed(2)}`);
print(`max=${theMax.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${average.toFixed(2)}`);
