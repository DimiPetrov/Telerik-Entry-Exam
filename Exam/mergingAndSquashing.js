const input = ['4', '12', '23', '34', '45'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let prevNum = gets().split('');

let mergedLine = [];
let squashLine = [];

for(let i = 0; i < n - 1; i++) {
    
    let currentNum = gets().split('');
    const a = prevNum[0];
    const b = prevNum[1];
    const c = currentNum[0];
    const d = currentNum[1];

    const mergedNum = `${b + c} `;
    mergedLine.push(mergedNum);
    const squashNum = `${a + (+b + +c)%10 + d} `;
    squashLine.push(squashNum);

    prevNum = currentNum;

}
print(mergedLine.join(' '));
print(squashLine.join(' '));