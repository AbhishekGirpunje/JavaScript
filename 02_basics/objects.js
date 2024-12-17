Object.create 
// Contructor Method
//singketon created in the object

const mySym = Symbol("key")

const myObj = {
    name : "Abhishek",
    age : 19,
    email : "abhi@gmail.com",
    [mySym] : "Key1",
}
// console.log(myObj["name"]);//Abhishek
// console.log(myObj[name]);//error
// console.log(myObj[mySym])//key1(symbol)

//Object.freeze(myObj)

myObj.email = "Abhishek@gmail.com"

// console.log(myObj);

myObj.greeting = function(){
    console.log("Hey abhi");
}

myObj.greetingtwo = function () {
    console.log(`hey Abhi, ${this.name}`);
    
}

console.log(myObj.greeting());
console.log(myObj.greetingtwo());
