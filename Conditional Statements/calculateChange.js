function solve(input1, input2) {
    let price = Number(input1);
    let money = Number(input2);
    let returnValue = (money - price).toFixed(2);
    var change = {};

    const coinTypes = ['1 lev', '50 stotinki', '20 stotinki', '10 stotinki', '5 stotinki', '2 stotinki', '1 stotinka'];
    const coinValues = [1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];

    var amount;

    for(var i = 0; i < coinValues.length; I++) {
        amount = Math.floor(returnValue/coinValues[i]);
        if(amount > 0) {
            change[coinTypes[i]] = amount;
            returnValue = returnValue / coinValues[i];
            console.log()
        }
    }
}