/*
Datatypes - Primitive and Non-Primitive(Reference)

Primitive datatype - String, Number, Boolean, Null(empty), Undefined(Not decide value), Symbol(to make Unique), BigInt(Big Values)

Non-Primitive - Array, Function, Object

*/

const str = "Abhishek" //(typeof String)

const myNumber = 987654 //(type of Number)

const myBoolean = true //(typeof boolean)

const weatherTemp = null //(type of object)

let age;//(typeof undefined)

const uniqueSymbol = Symbol('123'); //(typeof Symbols)
const unique1Symbol = Symbol('123');

//console.log( uniqueSymbol === unique1Symbol )// false

let highNumber = 12345678n

//Non- primitive

const productNames = ["Vasline","Lamps","Mobiles"]

console.log(productNames);


let myObj = {
    Name: "Abhishek",
    age: 34,
}

// console.log(myObj);


let myFunc = function(){
    console.log("Hello");
}
myFunc();




