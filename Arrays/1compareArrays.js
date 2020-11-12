let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = 3;
let arr1 = [2, 4, 6];
let arr2 = [6, 4, 2];
let isEqual = false;

for(let i = 0; i < n; i++) {
    if(arr1[i] === arr2[i]) {
        isEqual = true;       
    } else {
        isEqual = false;
    }
}
if(isEqual) {
    print(`Equal`);
} else {
    print(`Not equal`)
}

