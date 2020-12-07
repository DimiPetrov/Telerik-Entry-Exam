const input = ['welcometotelerikacademyawards'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const str = gets();
let char = str.split('');
let index = -1;

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (!char.includes(char[i])) {
            index === i;
            break;
        }
    }
}

print(index);


