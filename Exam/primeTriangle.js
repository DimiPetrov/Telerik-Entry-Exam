const input = ['27'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();

let count = 0;

for (row = 1; row <= n; row++) {
    let isPrimeRow = true;
    for (i = 2; i < row; i++) {
        if (row % i === 0) {
            isPrimeRow = false;
            break;
        }
    }
    if (isPrimeRow) {

        let primeRow = '';
        for (let col = 1; col <= row; col++) {
            let isPrimeCol = true;
            for (i = 2; i < col; i++) {
                if (col % i === 0) {
                    isPrimeCol = false;
                    break;
                }
            }

            if (isPrimeCol) {
                primeRow += '1';
            } else {
                primeRow += '0';
            }
        }
        print(primeRow);
    }
}

