let input = ['500'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let char = gets();
if(char === '2' || char === '3' || char === '4' || char === '5' || char === '6' || 
    char === '7' || char === '8' || char === '9' || char === '10' || char === 'J' || 
    char === 'Q' || char === 'K' || char === 'A') {
        print(`yes`);
} else {
    print(`no`);
}
