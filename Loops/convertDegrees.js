let input = ['0 15 30'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let temps = gets();
let splits = temps.split(' ');

for (let i = 0; i < splits.length; i++) {
    let far = splits[i] * 9/5 + 32;
    print(far);
}

