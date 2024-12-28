// const coding = ["ruby","js","java","python"]

// const value = coding.forEach( (item)=>{
//     //console.log(item)
//     return item
// } )

// console.log(value);//undefined

const myNumber = [1,2,3,4,5,6,7,8,9,10]

const newNumbs = myNumber.filter( (num)=> {
   return num > 4
})

// const newNums = []

// myNumber.forEach((num)=>{
//     if(num > 4){
//         newNumbs.push(num)
//     }
// })

// console.log(newNumbs)

const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    { title: "War and Peace", author: "Leo Tolstoy", year: 1869 }
  ];

  const userBooks = books.filter((bks) => {
    return bks.year > 1800 && bks.title === "To Kill a Mockingbird"
} )
  console.log(userBooks)

  const booktitle = books.map((bks) => bks.title)
  console.log(booktitle)



