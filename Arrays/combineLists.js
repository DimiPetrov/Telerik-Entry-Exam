function solve(input1, input2) {
    let array1 = input1.toString();
    let array2 = input2.toString();
    let combinedList = [].concat(array1, array2);
    console.log(combinedList.join(','));
}

solve("2,3,1","5,2,3")