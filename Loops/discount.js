let input = ['2',
    '50',
    '40'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let items = +gets();

    for (let i = 0; i < items; i++) {
        let price = +gets();
        let discPrice = Math.round(price * 35) / 100;
        print(discPrice.toFixed(2));
    }

