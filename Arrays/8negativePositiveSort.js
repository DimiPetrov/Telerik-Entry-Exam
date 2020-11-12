let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let arr = [7, 2, -2, 1, -5, 4, 5, -3, 1];
let newArr = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
        let spliced = arr[i];
        arr.splice(i, 1);
        newArr.push(spliced);
    }
}
print(newArr.concat(arr).join(' '));