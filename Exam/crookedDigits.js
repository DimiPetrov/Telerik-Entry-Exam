function solve(input) {
    const items = Number(input);
    sNumber = Math.abs(items).toString();
}
function addDigits(sNumber) {
    let output = 0;
    for (let i = 0; i < sNumber.length; i++) {
        if (Number.isInteger(+sNumber[i]) === true)
            output += (+sNumber[i])
    }
    if(output < 10) {
        console.log(output);
    } else {
        addDigits(output.toString());
    }
} 

var result = addDigits(input);


