const input = ['3', '1', '9'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const small = +gets();
const big = +gets();
const capacity = +gets();
let load = 0;
let bigCount = 0;
let smallCount = 0;
let isSpace = false;
while (big > bigCount && capacity - load >= 5) {
        bigCount++;
        load += 5;        
}

while(small > smallCount && load < capacity) {
    smallCount++;
    load++;
}
if (load < capacity) {
    isSpace = true;
}
if (!isSpace) {
    print(smallCount);
} else {
    print(-1);
}