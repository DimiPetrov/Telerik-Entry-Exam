function solve(n, []) {
    var str = [];

    for (var i in str){
        var list = str[i].split(',').map(Number);
        console.log(list);
        var isSorted = true;
        for(var j = 0 ; j < list.length - 1 ; j++){
            if(list[j] > list[j+1]) {
                isSorted = false;
                break;
            }
        }
        console.log(isSorted);
    }
}

solve('3'
'1','2','3','4','5'
'1','2','8','9','9'
'1','2','2','3','2')