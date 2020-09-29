function solve(input1, input2) {
    let n = +gets();
    let x = +gets();
    let sum = 1;

    for (let i = 1; i <= n; i++) {
        sum += fact(i) / Math.pow(x, i);
    }
    print(sum.toFixed(5));
}
function fact(n){
    if(n>1){
        let value = n*fact(n-1);
        //console.log(value);
        return value;
    } else {
        return 1;
    }
    
}
solve(3, 2)

