function solve(input) {
    var nums = JSON.parse("[" + input + "]");
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    var avg = total / nums.length;
    console.log(`avg: ${avg.toFixed(2)}`);
    if (nums[i] < avg) {
        console.log(`below: ${nums.join(',')}`);
    } else if (nums[i] > avg) {
        console.log(`above: ${nums.join(',')}`);
    }
}

solve("3,-12,0,0,13,5,1,0,-2")