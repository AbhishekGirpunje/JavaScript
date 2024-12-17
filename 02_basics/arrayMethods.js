//Creating an Array
let arr = [];

//Creating an array by index
let arr1 = [1,2,3,4]

//push()
let arr2 = [1,2,3,4]
arr2.push(6)
console.log(arr2);//[ 1, 2, 3, 4, 6 ]

//pop()
let arr3 = [1,2,3,4]
arr3.pop()
console.log(arr3);//[ 1, 2, 3 ]

//unshift()
let arrr4 = [1,2,3,4]
arrr4.unshift(0);
console.log(arrr4);//[ 0, 1, 2, 3, 4 ]

//shift()
let arr5 = [1,2,3,4]
arr5.shift();
console.log(arr5);//[ 2, 3, 4 ]

//splice()
let arr6 = [1,2,3,4]
arr6.splice(3, 0, 6);
console.log(arr6);//[ 1, 2, 3 ]
console.log(arr6);//[ 1, 2, 3, 6, 4 ]

//sort()
let arr7 = [1,6,3,9,5]
arr7.sort();
console.log(arr7);//[ 1, 3, 5, 6, 9 ]

//indexof()
let arr8 = [1,2,3,4]
console.log(arr8.indexOf(1));//0

//includes()
let arr9 = [1,2,3,4]
console.log(arr9.includes(1));//true

//reverse()
let arr10 = [1,2,3,4]
console.log(arr10.reverse());//[ 4, 3, 2, 1 ]

//concat()
let arr11 = [1,2,3,4]
let arr12 = [6,7,8,9]
console.log(arr11.concat(arr12));//[ 1, 2, 3, 4, 6, 7, 8, 9 ]

//slice()
let arr13 = [1,2,3,4]
let sliceArr = arr13.slice(1,4)
console.log(sliceArr);//[ 2, 3, 4 ]

//join()
let arr15 = [1,2,3,4,5]
let joinArr = arr15.join();
console.log(joinArr);//1,2,3,4,5

//flat()
let arr16 = [1,[2,3],4]
console.log(arr16);//[ 1, [ 2, 3 ], 4 ]
console.log(arr16.flat());//[ 1, 2, 3, 4 ]

//Array.from()
let arr17 = [1,2,3,4,5];
console.log(Array.from("hello"));

//fill(value, startIndex, endIndex)
let arr18 = [1,2,3,4,5]
let fillArr = arr18.fill(8,1,3);
console.log(fillArr);

//copyWithIn(target, first index, end index);
let arr19 = [1,2,3,4,5,6]
console.log(arr19.copyWithin(0,2,5));












