function solve(input) {
    var nums = JSON.parse("[" + input + "]");
    nums.sort(function (a, b) {
        if (a == 0 && b != 0)
            return 1;
        else if (b == 0 && a != 0)
            return -1;
        else
            return 0;
    });
    let result = nums.join(",");
    console.log(result);
}

solve("0,0,0,5,0,3,2,3");