function solve(arg1, arg2) {
    let L = arg1;
    let R = Number(arg2);

    if(L === 'a' || L === 'c' || L === 'e' || L === 'g') {
        if(R === '1' || R === '3' || R === '5' || R === '7') {
            console.log(`dark`);
        } else if(R === '2' || R === '4' || R === '6' || R === '8') {
            console.log(`light`);
        }
    } else if(L === 'b' || L === 'd' || L === 'f' || L === 'h') {
        if(R === '1' || R === '3' || R === '5' || R === '7') {
            console.log(`light`);
        } else if(R === '2' || R === '4' || R === '6' || R === '8') {
            console.log(`dark`);
        }
    }
}

solve('f', '3')