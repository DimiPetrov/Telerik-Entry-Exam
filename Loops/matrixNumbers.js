function solve(input) {
    let number = input;
let result = "";
for (i = 1; i <= number; i++) {
    for (j = i; j < number + i; j++) {
        result += j + ' ';
    }
    console.log(result)
    result = "";
}

solve(3);