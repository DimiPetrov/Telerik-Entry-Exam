function solve(input) {
    const array = [input];
    array.filter((item, index) => {
        console.log(item, index, array.indexOf(item), array.indexOf(item) === index);
        return array.indexOf(item);
    });
}

solve(['1','2','2','2','2','18','3','12'])