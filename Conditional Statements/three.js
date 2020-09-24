function solve(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);

    let max = Math.max(num1, num2, num3);

    if (max === num1) {
        if (num2 > num3) {
            console.log(num1 + " " + num2 + " " + num3);
        } else {
            console.log(num1 + " " + num3 + " " + num2);
        }
    } else if (max === num2) {
        if (num1 > num3) {
            console.log(num2 + " " + num1 + " " + num3);
        } else {
            console.log(num3 + " " + num2 + " " + num1);
        }

    } else if (max === num3) {
        if (num1 > num2) {
            console.log(num3 + " " + num1 + " " + num2);
        } else {
            console.log(num3 + " " + num2 + " " + num1);
        }

    }

}

solve(3, 2, 1)