function solve(input) {
    let myNumber = Number(input);
    let output = "";
 
    for(let i = 1; i <= myNumber; i++) {
        output = output.concat( i.toString() + " ");
    }
    console.log(output);
}

solve(5);