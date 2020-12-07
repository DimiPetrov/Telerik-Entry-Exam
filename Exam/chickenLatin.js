function solve(input) {
    var sentence = input;
    let word = sentence.split(' ');
    let letter = word.split('');
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < letter.length; j++) {
            let vowelFirst = 0;
            let consonantFirst = 0;
            let vowel = 0;
            let consonant = 0;
            if (j[0] === 'a' || j[0] === 'e' || j[0] === 'i' || j[0] === 'o' || j[0] === 'u' || j[0] === 'A' || j[0] === 'E' || j[0] === 'I' || j[0] === 'O' || j[0] === 'U') {
                vowelFirst++;
            } else {
                consonantFirst++;
            }
            if (j === 'a' || j === 'e' || j === 'i' || j === 'o' || j === 'u' || j[0] === 'A' || j === 'E' || j === 'I' || j === 'O' || j === 'U') {
                vowel++;
            } else {
                consonant++;
            }
        }
        var oldString = word;
        if (vowelFirst++) {
            var newString = oldString.substr(1);
            var firstLetter = j[0];
            if (vowell === consonant) {
                console.log(`${newString} + ${firstLetter} + 'chee'`);
            } else {
                console.log(`${newString} + ${firstLetter} + 'che'`);
            }
        } else if (consonantFirst++) {
            if (vowell === consonant) {
                console.log(`${oldString} + 'chee'`);
            } else {
                console.log(`${oldString} + 'che'`);
            }
        }

    }

}

solve('He is no spring chicken anymore')