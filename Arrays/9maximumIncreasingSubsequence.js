let input = ['6 7 3 8 1 9 4 5 7 9 2 1 3'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let array = gets().split(' ').map(e => +e);


let result = [];

let i = 1;
let current = '';
let maxLength = [];
let longest = 0;
let newResult = [];


while (i < array.length) {
    current = current + String(array[i - 1]);
    if (array[i - 1] < array[i]) {

        current = current + String(array[i])
        length = current.length;
        maxLength.push(length);
        result.push(current);

    } else {
        current = '';
    }

    i++
}
longest = Math.max(...maxLength)

for (let s = 0; s < result.length; s++) {

    if (result[s].length === longest) {
        newResult.push(result[s]);
    }
}

let final = new Set(...newResult);
print([...final].join(' '))