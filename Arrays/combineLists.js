function solve(input1, input2) {
    var list1 = [input1];
    var list2 = [input2];
    let combinedList = [].concat(list1, list2);
    console.log(combinedList.join(','));
}

solve("2,3,1","5,2,3")