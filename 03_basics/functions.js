function myName (){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log(("I"));
}
// myName();

function addTwoNumber(num1, num2){
    console.log(num1 + num2);
    
}
// addTwoNumber(2, 5);

function newOne (numb1, numb2) {

   let Addition = numb1 + numb2
    return Addition

    //second way to write code

    return numb1 + numb2
}
let finalAns = newOne(1, 5)
// console.log(finalAns)

// console.log(newOne(2,3));

function loggedInUser(username){
    return `${username} Just logged In `
}
// console.log(loggedInUser("Abhishek"));

function loggedInUser(username1){
    if(!username1){
        console.log("Enter a valid name please");
        return
    }
    return `${username1} Just logged In `
}
// console.log(loggedInUser("Abhi"));

function loggedInUser(username1 = "sahil"){
    if(!username1){
        console.log("Enter a valid name please");
        return
    }
    return `${username1} Just logged In `
}
console.log(loggedInUser(9));