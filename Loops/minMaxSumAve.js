function solve() {
    let sum = 0;
    let n = +gets();
    let values =[];
    let theMax = Number.MIN_SAFE_INTEGER;
    let theMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let newValue = +gets();
        sum += newValue;
        values.push(newValue);
        theMax = Math.max(theMax,  newValue);
        theMin =  Math.min(theMin,  newValue);
    }

   
    //let maxNum = Math.max(...values);
    //let minNum = Math.min(...values);
    
    let average = sum / n;

    console.log(`min= ${theMin.toFixed(2)}`);
    console.log(`max= ${theMax.toFixed(2)}`);
    console.log(`sum= ${sum.toFixed(2)}`);
    console.log(`avg= ${average.toFixed(2)}`);
}

solve('3', '2', '5', '1');