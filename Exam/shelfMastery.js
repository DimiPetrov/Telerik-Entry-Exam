const input = ['6', '1 2 3 3 5 10'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const ranks = gets().split(' ').map(Number);
let maxRank = ranks.pop();
ranks.push(maxRank);
let firstShelf = [];
let secondShelf = [];
let thirdShelf = [];
let fourthShelf = [];

for(let i = 0; i < ranks.length; i++) {
    if(ranks[i] > maxRank * 0.9) {
        firstShelf.push(ranks[i]); 
    } else if(ranks[i] > maxRank * 0.5 && ranks[i] <= maxRank * 0.9) {
        secondShelf.push(ranks[i]);
    } else if(ranks[i] > maxRank * 0.2 && ranks[i] <= maxRank * 0.5) {
        thirdShelf.push(ranks[i]);
    } else if(ranks[i] <= maxRank * 0.2) {
        fourthShelf.push(ranks[i]);
    }
}

if(firstShelf.length > 0) {
    firstShelf.sort(function(a, b) {return b - a});
    print(firstShelf.join(' '));
} else {
    print(`empty`);
}
if(secondShelf.length > 0) {
    secondShelf.sort(function(a, b) {return b - a});
    print(secondShelf.join(' '));
} else {
    print(`empty`);
}
if(thirdShelf.length > 0) {
    thirdShelf.sort(function(a, b) {return b - a});
    print(thirdShelf.join(' '));
} else {
    print(`empty`);
}
if(fourthShelf.length > 0) {
    fourthShelf.sort(function(a, b) {return b - a});
    print(fourthShelf.join(' '));
} else {
    print(`empty`);
}
