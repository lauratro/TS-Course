//UNION and UNION TYPE COMBINE WITH LITERAL TYPE
type Combinale = number | string; // I can store an union in the type
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(n1: Combinale, n2: Combinale, resultConversion: ConversionDescriptor ) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number'|| resultConversion ==="as-number") {
        result = +n1 + +n2; //TS see the union type but not what there is 
   
     
    } else {
        result = n1.toString() + n2.toString();
    }
  /*   if (resultConversion == 'as-number') {
        return +result
    }
    else {
        return result.toString()
    } */
   return result;
    
}
const combineAges = combine(30, 26, "as-number");
console.log(combineAges)
const combineStringAges = combine('30', '26', "as-number");
console.log(combineStringAges)
const combineNames = combine('Terry', 'Mary', 'as-text');
console.log(combineNames)
