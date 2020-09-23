function solve(arg1, arg2) {
    let l = arg1;
    let r = Number(arg2);
    let dark = 'dark';
    let light = 'light';

    if (l === 'a' || l === 'c' || l === 'e' || l === 'g') {
        if (r === '1' || r === '3' || r === '5' || r === '7') {
            console.log(dark);
        } else if (r === '2' || r === '4' || r === '6' || r === '8') {
            console.log(light);
        }
    } else if (l === 'b' || l === 'd' || l === 'f' || l === 'h') {
        if (r === '1' || r === '3' || r === '5' || r === '7') {
            console.log(light);
        } else if (r === '2' || r === '4' || r === '6' || r === '8') {
            console.log(dark);
        }
    }
    
}

solve('f', '3')