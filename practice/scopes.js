// Global Scope

let a = "Abhishek" // variable declared outside of the any function or block.
function global(){
return a; // 
}
//console.log(global());

// local scope

function local(){
    const b = "Sachin"// variable declared inside the function.
    console.log(b)
}
//local();

//block scope

{
    let c = "sid"
    //console.log(c)// variable declared using let and const inside a block.
}
// console.log(c)// it will throw error

// lexical scope

function outer(){
    var c = "vedant"
    function inner(){
        console.log(c)//Scope determined by where variables and functions are written in the code
    }
    //inner();
}
//outer();

//shadowing

let d = "Abhishek this side"

function shadow(){
    let d = "Ohh!!! hey abhishek how are you"
    console.log(d)
}
//shadow();
//console.log(d) // global variable remains unchanged.


// illegal shadowing

let e = "Java"

{
    var e = "JS"// we cant do this
}

var f = "Java"

{
    let f = "JS"// we can do this
}

