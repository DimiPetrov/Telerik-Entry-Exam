function solve(input) {
    var l = numbers.length;
    var numbers = [input];
    var max = -Infinity;
    for (i = 0; i < l; i++) {

    if (numbers[i] > max) {
        max = numbers[i];
    }
    console.log(max);
}

solve(3,
    1,
    2,
    3)