function solve(arr) {
    let listOfIntegers = arr;
    let integer = listOfIntegers.slice();

    var leftSum = 0;
    var rightSum = 0;
    for (let i = 1; i < listOfIntegers.length - 1; i++) {
        integer = listOfIntegers[i];
        leftSum += listOfIntegers[i - 1];
        rightSum -= listOfIntegers[i];
        if (rightSum === leftSum) {
            console.log(integer);
        } else {
            console.log(-1);
        }
    } 
    
}

    solve(1, 2, 3, 4, 3, 2, 1)