let input = ['own', 'owned'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let first = gets().toLowerCase().split(',');
let second = gets().toLowerCase().split(',');

let firstSort = first.sort();
let secondSort = second.sort();

if (firstSort < secondSort) {
    print('First');
} else if (firstSort > secondSort) {
    print('Second');

} else {
    print('Equal');
}

