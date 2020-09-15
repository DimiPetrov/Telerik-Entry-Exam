function solve(arg1, arg2) {
    let text = Number(arg1);
    let min = Number(arg2);
    
    let addText = text - 20;
    let addMin = min - 60;
    let addTextPrice = addText * 0.06;
    let addMinPrice = addMin * 0.1;
    let addTax = (addTextPrice + addMinPrice) * 0.2;
    let totalBill = addTextPrice + addMinPrice + addTax + 12.00;
    
    console.log(`${addText} additional messages for ${addTextPrice.toFixed(2)} levas`);
    console.log(`${addMin} additional minutes for ${addMinPrice.toFixed(2)} levas`);
    console.log(`${addTax.toFixed(2)} additional taxes`);
    console.log(`${totalBill.toFixed(2)} total bill`);
}

solve(31, 115)