let input = ['3', '2', '5', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let output = "";

for (let i = 1; i < n; i++) {
    let nums(i) = +gets();
    if(nums[i] > nums[i + 1]) {
        output = output.concat(i.toString() + '>'); 
    } else if(nums[i] < nums[i + 1]) {
        output = output.concat(i.toString() + '<');
    } else if(nums[i] === nums[i + 1]) {
        output = output.concat(i.toString() + '=');
    }
    
}
print(`${output}${nums[n]}`);