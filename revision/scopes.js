//global scope

const globalVar = "I am Global"

function test(){
    console.log(globalVar)// accessible here
}
test();
console.log(globalVar)// accessible here

//local scope or dunctional scope

function greet(){
    let message = "Hey"  //function/local scope
    console.log(message)
}
greet();
// console.log(message)// error

//block scope(introduce by ES6 with let and const)

{
    let blockScoped = "Im inside block scope" // this is block scope
    console.log(blockScoped)
}
// console.log(blockScoped)// errror


//Lexical Scope/static scope

function outer(){
    let outerVar = "Im outter"
    function inner (){
        console.log(outerVar) // accessible due to laxical scope
    }
    return inner;
}
const innerfunction = outer();
innerfunction();