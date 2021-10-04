let userInput: unknown; //we can store any values without getting errors
let userName: string;
userInput = 5;
userInput = "Max;"
userName = userInput; //I get error because unknown is more restrictive than any

if (typeof userInput === "string") {
    userName = userInput //I need an extra type check to be able to assign userInput to userName
}

//NEVER TYPE

function generateError(message: string, code: number):never {
    throw {message: message, errorCode: code} //this function never return a value
}
generateError("there is an Error", 500)