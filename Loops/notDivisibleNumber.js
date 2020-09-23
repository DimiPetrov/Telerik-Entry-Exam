function solve(input) {
    let num = Number(input);
    let output = "";

    for (let i = 1; i <= num; i++) {
        if(i % 3 !== 0 && i % 7 !== 0){
        output = output.concat(i.toString() + " ");
        }
    }
    console.log(output);
}

solve(10);