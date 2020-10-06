function solve(input) {
    let n = Number(input);
    let line = 0;
    let isPrime;
    for(i = 1; i <= n; i++) {
        if(i % 2 !== 0) {
            isPrime = true;
            line++;
        } else {
            isPrime = false;
        }
        for(j = 1; j <= line; j++) {
            if(isPrime = true) {
                console.log(1);
            } else {
                console.log(0);
            }
        }
    }
}

solve(10)