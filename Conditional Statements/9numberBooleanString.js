let input = ['1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let type = gets();
let number = 5;
let boolean = true;
let string = 'hello';

switch(type) {
    case '1': print(number + 1); break;
    case '2': print(!boolean); break;
    case '3': print(`${string + '*'}`);
}