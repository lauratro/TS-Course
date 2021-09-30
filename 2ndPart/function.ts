//Functions and their return Type
function add(n1: number, n2: number): number {
    return n1 + n2
}
function printResult(num: number) { // type void because it doesn't return anything
    console.log('Result:' +num)
}
printResult(add(5, 12))
console.log(printResult(add(5, 12)))//return undefined

//callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
   console.log(result)
})
//how to store function in variable
//let combineValues: Function;//too generic type
let combineValues: (a: number, b: number) => number; //We describe which type of function it should accept
combineValues = add;
console.log(combineValues(8,8))