function solve(...input) {
    let n = Number(input.shift());
    let oddProduct = 0;
    let evenProduct = 0;

    for(let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if(i % 2 === 1) {
            oddProduct += num;
        } else if(i % 2 === 0) {
            evenProduct += num;
        }
    }

    if(oddProduct = evenProduct) {
        console.log(`yes ${oddProduct}`);
    } else {
        console.log(`no ${oddProduct} ${evenProduct}`);
    }
}

solve(5, 4, 3, 2, 5, 2)