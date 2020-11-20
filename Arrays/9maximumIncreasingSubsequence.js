let input = ['6 7 3 8 1 9 4 5 7 9 2 1 3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const numbers = gets().split(' ').map(Number);
let maxSequence = [];

for(let i = 0; i < numbers.length; i++) {
    const currentSequence = [numbers[i]];

    for(let j = i + 1; j < numbers.length; j++) {
        const lastNum = currentSequence[currentSequence.length - 1];
        const currentNum = numbers[j];
        if(lastNum >= currentNum) {
            break;
        }
        currentSequence.push(currentNum);
    }

    if(maxSequence.length <= currentSequence.length) {
        maxSequence = currentSequence.slice();
    }
}

print(maxSequence.join(' '));