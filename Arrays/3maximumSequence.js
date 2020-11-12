let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr =[2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
let currentSequence = 1;
let longestSequence = 1;
let indexOfLongest;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i + 1]) {
        currentSequence++;
    } else {
        if(longestSequence < currentSequence) {
            longestSequence = currentSequence;
            indexOfLongest = i - currentSequence + 1;
        }
        currentSequence = 1;
    }
}

let result = arr.slice(indexOfLongest, indexOfLongest + longestSequence);
print(result.length);
