const myNums = [1,2,3]

// const myToatl = myNums.reduce(function (acc,cv) {
//     console.log(`acc: ${acc} and current value: ${cv}`)
//     return acc + cv
// }, 4)

// const myToatl = myNums.reduce((acc,cv) =>acc + cv,0)


// console.log(myToatl)

const shoppingCart = [
    {
        itemName : "js-course",
        price:199
    },
    {
        itemName : "py-course",
        price:299
    },
    {
        itemName : "css-course",
        price:399
    }
]

const totalValue = shoppingCart.reduce((acc,course)=>(acc + course.price),0)

console.log(totalValue)
