let input = ['273'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num = +gets();
let firstDigit = num[0];
let secondDigit = num[1];
let thirdDigit = num[2];

if(num.length === 1) {
    switch (num) {
        case 0: print(`zero`); break;
        case 1: print(`one`); break;          
        case 2: print('two'); break;
        case 3: print(`three`); break;
        case 4: print(`four`); break;
        case 5: print(`five`); break;
        case 6: print(`six`); break; 
        case 7: print(`seven`); break; 
        case 8: print(`eight`); break;
        case 9: print(`nine`); break;
    }
} else if(num.length === 2) {
    if(num >= 10 && num <= 19) {
        switch(num) {
            case 10: print(`ten`); break;
            case 11: print(`eleven`); break;
            case 12: print(`twelve`); break;
            case 13: print(`thirteen`); break;
            case 14: print(`fourteen`); break;
            case 15: print(`fifteen`); break;
            case 16: print(`sixteen`); break;
            case 17: print(`seventeen`); break;
            case 18: print(`eighteen`); break;
            case 19: print(`nineteen`); break;
        }
    } else if (num > 19 && num < 100) {
        if (num % 10 == 0) {
            switch (num) {
            case 20: print(`twenty`); break;
            case 30: print(`thirty`); break;
            case 40: print(`fourty`); break;
            case 50: print(`fifty`); break;
            case 60: print(`sixty`); break;
            case 70: print(`seventy`); break;
            case 80: print(`eighty`); break;
            case 90: print(`ninety`); break;
            }
        } else { }
}

} 
    } else {
        numberAsWord = tensAsWord + ' ' + onesAsWord;
    } 
} else if (num > 99 && num < 999) {
    if (num % 10 == 0) {
        numberAsWord = hundredsAsWord;
        switch (number) {
          case 100:
            numberAsWord = 'one hundred';
            break;
          case 200:
            numberAsWord = 'two hundred';
            break;
          case 300:
            numberAsWord = 'three hundred';
            break;
          case 400:
            numberAsWord = 'four hundred';
            break;
          case 500:
            numberAsWord = 'five hundred';
            break;
          case 600:
            numberAsWord = 'six hundred';
            break;
          case 700:
            numberAsWord = 'seven hundred';
            break;
          case 800:
            numberAsWord = 'eight hundred';
            break;
            case 900:
            numberAsWord = 'nine hundred';
            break;
        }
    } else {
        numberAsWord = hundredsAsWord + 'and' + tensAsWord + ' ' + onesAsWord;
    }
}

print(numberAsWord)