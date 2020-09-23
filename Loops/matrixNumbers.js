function solve(input) {
    let num = Number(input);
    let output = "";

    for (let i = 1; i <= num; i++) {
        for (let j = num; j <= num / 2 - 1; j++) {
            output = output.concat(i.toString() + " ");
        }
    }
    console.log(output);
}

solve(3);