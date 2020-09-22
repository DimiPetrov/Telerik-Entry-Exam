function solve(arg1, arg2, arg3, arg4, arg5) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);
    let num4 = Number(arg4);
    let num5 = Number(arg5);

    if(num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
        console.log(num1);
    } else if(num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
        console.log(num2);
    } else if(num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
        console.log(num3);
    } else if(num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
        console.log(num4);
    } else if(num5 >= num1 && num5 >= num2 && num5 >= num3 && num5 >= num4) {
        console.log(num5);
    }
}

solve(-0.5, -10, 0, -1, 3)