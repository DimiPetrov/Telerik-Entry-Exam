let input = ['3', '2', '5', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let howManyDigits = Number(gets());
let previousNum = Number(gets());
let result = ''
result += previousNum;
for (let i = 0; i < howManyDigits; i++) {
    currentValue = Number(gets())

    if (currentValue < previousNum) {
        result += `>${currentValue}`

    } else if (currentValue === previousNum) {
        result += `=${currentValue}`
    } else {
        result += `<${currentValue}`
    }
    previousNum = currentValue
}
print(result)
