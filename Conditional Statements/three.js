function solve(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);

    if(num1 >= num2 && num1 >= num3) {
        console.log(num1);
    } else if(num2 >= num1 && num2 >= num3) {
        console.log(num2);
    } else if(num3 >= num1 && num3 >= num2) {
        console.log(num3)
    }
}

solve(-0.5, -10, 0)