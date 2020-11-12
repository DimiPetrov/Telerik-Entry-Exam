let input = [
    'good',
    'TA',
    32,
    42.5,
    -1

];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let result = ''
let num = 0;

while (true) {
    let command = gets();
    if (command === undefined) {
        break;
    }
    else if (isNaN(command)) {
        for (let r = command.length - 1; r >= 0; r--) {
            result += command[r]
        }
        print(result)
        result = ''
    } else {
        num = Number(command) + 1
        print(num)
    }
}

