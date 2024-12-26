// for of
//[" ", " "]
//[{},{}]


const arr = [1,2,3,4,5,6]

for (const Number of arr) {
   // console.log(Number);
}

const stringArr = ["Abhishek","Sahil","Vedant"]

for(const frndNames of stringArr){
   // console.log(frndNames)
}

const newString = "Hello world"

for(const result of newString){
    if(result === " "){
        console.log("Break from here")
        break;
    }
 //   console.log(result)
}

//Maps - unique values

const map =new Map()
map.set("IN","India")
map.set("USA","United state of america")
map.set("Fr","france")

//console.log(map)

for (const [key, values] of map){
    console.log(key,":-", values)
}

const myObj = {
    userName:"Abhi",
    id: 97,
}

for (const [key1,value1] of myObj) {
    console.log(key1, ":-", value1) // this not works in maps
}