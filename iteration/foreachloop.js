const coding = ["ruby","js","java","python"]

// coding.forEach( function (item) {
//  // console.log(item)  
// } );

// coding.forEach((item)=>{
//    // console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

const mycoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
mycoding.forEach((item)=>{
    console.log(item.languageName)
})