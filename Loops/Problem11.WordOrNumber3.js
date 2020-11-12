let input = [
    '3',
    '1',
    '1',
    '7',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num = Number(gets());
let strings = '';
let sum = 0;
let arr = [];
let booleanArr = [];

for (let i = 1; i <= num; i++) {
    let currentElement = gets();
    arr.push(currentElement);
}

for (let i = 0; i < arr.length; i++) {
    let elements = isNaN(arr[i]);
    booleanArr.push(elements);
}

let index = 0;
for (let j = 0; j < arr.length; j++) {
    j = index;
    while (booleanArr[index] === true) {
        if (strings === '') {
            strings += arr[index];
        } else {
            strings += '-' + arr[index];
        }
        index++;
        j++;
    }
    if (strings !== '') {
        print(strings);
    }
    strings = '';

    while (booleanArr[index] === false) {
        sum += Number(arr[index]);
        index++;
        j++;
    }
    if (sum !== 0) {
        print(sum);
    }
    sum = 0;
}

