function solve(arg) {
    let deposit = arg;
    let amount1 = (deposit * 1.05).toFixed(2);
    let amount2 = (amount1 * 1.05).toFixed(2);
    let amount3 = (amount2 * 1.05).toFixed(2);
    console.log(amount1);
    console.log(amount2);
    console.log(amount3);
}

solve(1000)