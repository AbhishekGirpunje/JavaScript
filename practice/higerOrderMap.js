// const radius = [1,2,3,4];

// const area = function(radius){
//     return Math.PI * radius * radius;
// };

// const result = radius.map(area);
// console.log(result);

// const celsius = [0,10,20,30];

// const calculate = function(temp){
//     return temp * 9/5 + 32
// }

// const result = celsius.map(calculate);
// console.log(result)

// const numbers = [1,2,3,4];

// const logic = function(num){
//     return num * 2;
// };

// const result = numbers.map(logic)
// console.log(result)

// const words = ["apple", "banana", "grapes"];

// const logic = function(word){
//     return word.length;
// };

// const result = words.map(logic);
// console.log(result)

// const words = ["apple", "banana", "grapes"];

// const logic = function(word){
//     return word.toUpperCase();
// };

// const result = words.map(logic);
// console.log(result)

// const items = ["Book", "Pen", "Notebook"];

// const logic = function(things){
//     return `Items: ${things}`
// };

// const result = items.map(logic);
// console.log(result)

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// const getName = function(user){
//     return user.name
// };
// console.log(users.map(getName))


// const result = users.map(person => person.name);
// console.log(result)

// const words = ["hello", "world"];

// const reverseString = function(strings){
//     return strings.split("").reverse().join("");
// }; 

// const result = words.map(reverseString);
// console.log(result)


// const scores = [40, 60, 70, 20, 90];

// const marks = function(num){
//     if(num > 50){
//         return "high"
//     }else{
//         return "Less"
//     }
// };

// const result = scores.map(marks);
// console.log(result)

const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" }
];

const fullName = people.map(user => `${user.firstName} ${user.lastName}`)
console.log(fullName)