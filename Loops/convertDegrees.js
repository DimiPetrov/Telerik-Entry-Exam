function solve(input) {
    let cel =  input.split(' ');
    let far = 0;
    for(i = 0; i < cel.length; i++) {
        far = (cel[i] * 1.8 + 32)
        console.log(far);
    }
}

solve(0, 15, 30)