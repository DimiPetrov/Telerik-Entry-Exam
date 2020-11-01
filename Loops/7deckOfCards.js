let input = [];
let suits = ["spades", "clubs", "hearts", "diamonds"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let i = 0;
for (values[i]; values.length; i++) {
    let arr = [];
    for (let j = 0; j < suits.length; j++) {
        arr += values[i] + " of " + suits[j] + ", ";
    }
    print(arr.toString());
}

