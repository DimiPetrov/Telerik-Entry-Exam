let input = ['3', '2.5', '1.25', '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numbers = +gets();
    let sum = 0;

    for (let i = 1; i <= numbers; i++) {
        let num = +gets();
        sum += num;
    }

    let average = (sum / numbers).toFixed(2);
    print(average);

