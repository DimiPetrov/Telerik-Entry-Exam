function solve(arg1, arg2, arg3, arg4) {
    let d = arg1;
    let h = arg2;
    let m = arg3;
    let s = arg4;
    let time = s + (m * 60) + (h * 60 * 60) + (d * 60 * 60 * 24);
    console.log(time)
}

solve(4, 3, 11, 40)