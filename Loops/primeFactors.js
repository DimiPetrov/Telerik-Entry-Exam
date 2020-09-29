function solve(input) {
    let number = Number(input);

    for (var i = 2; i <= number; i++) {
        if (number % i == 0) {
            number /= i;
            console.log(i);
            i--;
        }
    }

}

solve(100);