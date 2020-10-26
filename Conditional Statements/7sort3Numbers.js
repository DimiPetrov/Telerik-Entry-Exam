let input = ['1', '1', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

if(a >= b && a >= c) {
    if(b >= c) {
        print(`${a} ${b} ${c}`);
    } else {
        print(`${a} ${c} ${b}`);
    }
} else if(b >= a && b >= c) {
    if(a >= c) {
        print(`${b} ${a} ${c}`);
    } else {
        print(`${b} ${c} ${a}`);
    }
} else if(c >= a && c >= b) {
    if(a >= b) {
        print(`${c} ${a} ${b}`);
    } else {
        print(`${c} ${b} ${a}`);
    }
}