function solve(input1, input2) {
    let n = Number(input1);
    let x = Number(input2);
    let sum = 1;

    for (let i = 1; i <= n; i++) {
        sum += fact(i) / Math.pow(x, i);
        console.log(sum);
    }
    console.log(sum.toFixed(5));
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

solve(4, 2)