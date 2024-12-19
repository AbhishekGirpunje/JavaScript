//written object with function

const user = {
    userName:"Abhishek",
    price:699
}
function handleObject(anyObject){
    console.log(`User Name is ${anyObject.userName} and price is ${anyObject.price}`);  
}
// handleObject(user)

// handleObject({
//     userName: "sahil",
//     price:599
// })

//written array with function

const myNewArray = [1,2,3,4,5]

function handleArray(newArray){
    return newArray[1];
}
console.log(handleArray(myNewArray))

