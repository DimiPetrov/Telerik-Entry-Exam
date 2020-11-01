let input = ['32'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let text = gets();
let splited = text.split(' ');
let digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

for(let i = 0; i < text.length; i++) {
    if(text.includes(digit)) {
        output = splited.reverse().concat(i);
    } else {
        let num = Number(splited.concat(i));
        output = num + 1;
    }
}
print(output);