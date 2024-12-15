//Number.isInteger
let num1 = 5;
console.log(Number.isInteger(num1)); //true

let num2 = 5.5;
console.log(Number.isInteger(num2));//false

//Number.isNaN
let num3 = NaN;
console.log(Number.isNaN(num3)) //true

let num4 = 4;
console.log(Number.isNaN(num4));//false

//Number.parceFloat()
let num5 = "1.2"
console.log(Number.parseFloat(num5));//1.2

let num6 = "5.2abc"
console.log(Number.parseFloat(num6));//5.2

//Number.parseInt()
let num7 = "5.1"
console.log(Number.parseInt(num7));

let num8 = '2.9abhi'
console.log(Number.parseInt(num8));

//Number.tofixed(
let num9 = 3.1442;
console.log(num9.toFixed(2));//3.14

//Number.toString()
let num10 = 12;
let str = num10.toString();//"12"
console.log(str);

//Number.isSafeInteger()
let num11 = 123;
console.log(Number.isSafeInteger(num11));//true

let num12 = 12345678901234567890;
console.log(Number.isSafeInteger(num12));// false


