let input = ['46'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let number = +gets();

for (let i = 2; i < number; i++) {
    while (number % i === 0) {
        print(i);
        number = number / i;
    }
}

if (number !== 1) {
    print(number);
}
