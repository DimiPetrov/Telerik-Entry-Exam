function solve(input) {
    let number;
let sum = 0;
while (number = input) {
    let arr = number.toString();
    arr = arr.split('').map(Number);
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    if (a + c !==b) {
        break;
    }
    sum += number;
}
    console.log(sum);
}

solve(132, 132)