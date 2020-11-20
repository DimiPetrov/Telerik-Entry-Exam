const input = ['-7231'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();

while(n.length > 1) {
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        const currentDigit = +n[i];
        if(!Number.isNaN(currentDigit)) {
            sum += currentDigit;
        }
    }   
    n = String(sum);
}
print(n)
