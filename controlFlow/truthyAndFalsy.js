// falsy value

//false, 0, -0, BigInt , 0n, ""/'', null,undefined, NaN

//turthy values

//"0", 'false'," ",[],{},function(){}

const newArr = [1,2]

if(newArr.length === 0){
console.log(`Array is empty and length of array is ${newArr.length}`)
}else{
    console.log(`Array is not empty and length of array is ${newArr.length}`)
}

const emptyObj = {
    userName: "Abhi",
    id: 123
}
//console.log(Object.keys(emptyObj))//[ 'userName', 'id' ]

// if(Object.keys(emptyObj).length === 0){
//     console.log(`Object is empty ${Object.keys(emptyObj).length}`)
// }else{
//     console.log(`Object is not empty ${Object.keys(emptyObj).length}`)
// }

//Nullish coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 20
val1 = null ?? 10 ?? 20
val1 = null ?? 30 ?? undefined ?? 10

console.log(val1)

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80"):console.log("more than 80")