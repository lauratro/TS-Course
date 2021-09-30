//UNION
function combine(n1, n2) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2; //TS see the union type but not what there is 
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine('Terry', 'Mary');
console.log(combineNames);
