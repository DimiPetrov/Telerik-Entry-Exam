function solve(arr){
    const o={};
    arr.forEach((n,i)=>o[i+1]=1    );
    arr.forEach((n)  =>delete o[n] );
    return Object.keys(o).map(v=>+v);
    console.log(arr);
}