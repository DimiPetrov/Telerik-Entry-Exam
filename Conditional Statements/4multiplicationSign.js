let input = ['-1', '-0.5', '-5.1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

if(a === 0 || b === 0 || c === 0 ) {
    print(`0`);
} else if(a < 0) {
    if(b < 0 || c < 0) {
        print(`+`);
    } else if(b < 0 && c < 0) {
        print(`-`);
    } else if(b > 0 && c > 0) {
        print(`-`);
    }
} else if(a > 0) {
    if(b < 0 || c < 0) {
        print(`-`);
    } else if(b < 0 && c < 0) {
        print(`+`);
    } else if(b > 0 && c > 0) {
        print(`+`);
    }
}