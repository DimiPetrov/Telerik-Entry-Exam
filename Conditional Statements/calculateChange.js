function solve(input1, input2) {
    let priceInStotinki = Number(input1) * 100;
    let moneyInStotinki = Number(input2) * 100;
    let returnValue = (moneyInStotinki - priceInStotinki);

    const coinTypes = ['1 lev', '50 stotinki', '20 stotinki', '10 stotinki', '5 stotinki', '2 stotinki', '1 stotinka'];
    const coinValuesInStotinki = [100, 50, 20, 10, 5, 2, 1];


    for(var i = 0; i < coinValuesInStotinki.length; i++) {
        let numberOfCoins = Math.floor(returnValue/coinValuesInStotinki[i]);
        if(numberOfCoins > 0) {
            console.log(numberOfCoins + " X " + coinTypes[i]);
            returnValue = returnValue - (numberOfCoins * coinValuesInStotinki[i]);
            //console.log(returnValue)
        }
    }
}

solve(0.76, 1);