function solve(input) {
    var number = Number(input);
    primeArray = [];
    isPrime = '';

    for (i = 2; i <= number; i++) {
        if (number % i == 0) {
            for (var j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    isPrime = false;
                } else {
                    isPrime = true;
                }
            }

            if (isPrime == true) {
                number /= i;
                primeArray.push(i);
            }
        }
    }

    for (var k = 0; k < primeArray.length; k++) {
        console.log(primeArray[k]);
    }
}

solve(12)