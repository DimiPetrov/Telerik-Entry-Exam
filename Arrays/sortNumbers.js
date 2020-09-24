function solve(input) {

    //This is parsing the input string as an array of integers
    var nums = JSON.parse("[" + input + "]");

    //This is actually doing the sorting
    nums.sort(function (a, b) { return b - a });

    let result = nums.join(", ");
    console.log(result);

}

solve("2, 3, 1, 5, 6");