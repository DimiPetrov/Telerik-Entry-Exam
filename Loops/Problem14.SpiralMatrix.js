let input = [
    '4'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

let squareN = n * n;
let result = [];

for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
        row.push(0);
    }
    result.push(row);
}

let x = 0;
let y = 0;
let step = 0;
for (let i = 0; i < squareN;) {
    while (y + step < n) {
        i++;
        result[x][y] = i;
        y++;

    }
    y--;
    x++;

    while (x + step < n) {
        i++;
        result[x][y] = i;
        x++;
    }
    x--;
    y--;

    while (y >= step) {
        i++;
        result[x][y] = i;
        y--;
    }
    y++;
    x--;
    step++;

    while (x >= step) {
        i++;
        result[x][y] = i;
        x--;
    }
    x++;
    y++;
 }
result.forEach(row => print(row.join(' ')));
