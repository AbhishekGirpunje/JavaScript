// var b = 100
let a = 100; // global scope

if(true){
    let a = 1;
    // var b = 2;
    // const c =3; // block scope
    console.log(a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){

    const myName = "Abhishek"

    function two(num1, num2){
        const site = "website"
        console.log(myName); // child function can access parent function 
        return num1 + num2
    }
    console.log(two(2, 8));
    

    // console.log(site);// parent function cant access child function

}
// one();

if(true){
    const carName = "lambo";
    if(carName === "lambo"){
        const website = "google"
        console.log(carName + website); // we can access parent 
    }
    // console.log(website);// we cant access
    
}
//console.log(carName);// we cant access

console.log(myFunction(4));

function myFunction(numb){// we can do hoisting in function
    return numb + 1;
}

console.log(myVariable(3));
const myVariable = function(number){ // we cant do hoisting while holding fuction in variable
    return number + 2;
}

