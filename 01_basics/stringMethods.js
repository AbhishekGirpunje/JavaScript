//charAt(index)
let str = "Hello";
console.log(str.charAt(1));  // "e"

//charCodeAt(index)
let str1 = "Hello";
console.log(str1.charCodeAt(1));  // 101 (Unicode for "e")

//concat(str1,str2,.....)
let str2 = "Hello";
let str3 = "World";
console.log(str2.concat(" ", str3));  // "Hello World"

//includes(search String)
let str4 = "Hello World";
console.log(str4.includes("  Hello  "));  // false
console.log(str4.includes("Hello"));  // false

//indexOf(Search String)
let str5 = "Hello World";
console.log(str5.indexOf("r"));  // 8

//lastIndexOf(search String)
let str6 = "Hello World";
console.log(str6.lastIndexOf("l"));  // 9

//match(regexp)
let str7 = "Hello 123";
console.log(str7.match(123));  // ["123"]

//replace(searchValue, newValue)
let str8 = "Hello World";
console.log(str8.replace("World", "JavaScript"));  // "Hello JavaScript"

//search(regexp)
let str9 = "Hello World";
console.log(str9.search("l"));  // 2

//slice(startIndex, endIndex)
let str10 = "Hello World";
console.log(str10.slice(0, 5));  // "Hello"

//split(seperator)
let str11 = "Hello World"
console.log(str11.split(" ")); //[ 'Hello', 'World' ]

//startsWith(search String)
let str12 = "Hello World"
console.log(str12.startsWith("Hello")); //true

//endsWith(search String)
let str13 = "Hello World"
console.log(str13.endsWith("World"));//true

//toLowerCase()
let str14 = "HELLO"
console.log(str14.toLowerCase());//hello

//toUpperCase()
let str15 = "hello"
console.log(str15.toUpperCase());//HELLO

//trim()
let str16 = "  hello  "
console.log(str16.trim());//hello

//padStart(targetLength, pathString)
let str17 = "5"
console.log(str17.padStart(3,"0"));//005

//padEnd(targetLength, padString)
let str18 = "5"
console.log(str18.padEnd(3,"0"));//500

//repeat(count)
let str19 = "abhi"
console.log(str19.repeat(3));//abhiabhiabhi

//toLocaleLowerCase()
let str20 = "HELLO"
console.log(str20.toLocaleLowerCase())//hello

//toLocaleUpperCase()
let str21 = "hello"
console.log(str21.toLocaleUpperCase())//HELLO

//valueOf()
let str22 = new String ("Hello")
console.log(str22.valueOf())

//normalize()
let str23 = "e\u0301";  // "e" + accent
console.log(str23.normalize());  // "é"





// const firstName = new String("Abhishek")

// console.log(firstName);

// console.log(firstName.__proto__);



