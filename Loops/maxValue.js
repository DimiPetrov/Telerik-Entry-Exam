function solve(...input) {
    var l = input.shift();
    var numbers = input.shift();
    var max = numbers;
    for (i = 0; i < l; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    console.log(max);
}
}

solve(3,
    1,
    2,
    3)