const input = ['anagram',
    '6',
    'gramana',
    'aaagrnm',
    'anagra',
    'margana',
    'abc',
    'xy'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const w = gets().split('').sort().join('');
const n = +gets();

for (let i = 0; i < n; i++) {
    const word = gets().split('').sort().join('');
    print(w === word ? 'Yes' : 'No');
}

 