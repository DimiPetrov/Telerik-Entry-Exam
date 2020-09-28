function solve(input) {
    var nums = JSON.parse("[" + input + "]");
    nums.sort(function (a, b) { return a - b });

    let result = nums.join(",");
    console.log(result);
}

solve("0, 1, -1");