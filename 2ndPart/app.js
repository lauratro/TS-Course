function add(n1, n2, showResult, phrase) {
    // if(typeof n1 !== "number"){
    //     throw new Error("it has to be a number")
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 7.8;
var printResult = true;
var resultPhrase = "The result is...";
add(number1, number2, printResult, resultPhrase);
