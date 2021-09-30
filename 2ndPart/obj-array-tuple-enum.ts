function add(n1:number,n2:number, showResult: boolean, phrase:string){
    // if(typeof n1 !== "number"){
    //     throw new Error("it has to be a number")
    // }
    const result= n1 + n2
    if(showResult){
        console.log(phrase + result )
    }else{
        return result ;
    }
    
}

const number1 = 5;
const number2 =7.8;
const printResult= true
const resultPhrase ="The result is..."
add(number1, number2, printResult, resultPhrase)
// Ts and Arrays
const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number, string] //tuple
}={
    name:"Laura",
    age:20,
    hobbies:['sports', "cooking"],
    role:[2,"Author"]
}
person.role.push('admin'); //Typescript doesn't recognize this error
//person.role[1] =10 // Error it should be a string
let favoriteActivities: string[];
//ENUM - costum type
enum Role {ADMIN ='Admin', READ_ONLY=100, AUTHOR='Author' }; //ASSIGN LABEL TO NUMBER. I can assign a different number instead to start with 0, or he can be a string
const person2={
    name:"Laura",
    age:20,
    hobbies:['sports', "cooking"],
    role: Role.ADMIN
}