var userInput; //we can store any values without getting errors
var userName;
userInput = 5;
userInput = "Max;";
userName = userInput; //I get error because unknown is more restrictive than any
if (typeof userInput === "string") {
    userName = userInput; //I need an extra type check to be able to assign userInput to userName
}
//NEVER TYPE
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("there is an Error", 500);
