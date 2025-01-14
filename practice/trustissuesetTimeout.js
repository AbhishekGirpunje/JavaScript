// console.log("Start")

// setTimeout(function cb(){
//     console.log("Timer")
// },5000) // its will register a place in runtime environment and after wards it will go to the callback queue and then after allowing event loop to go
//         //  in call stack it will go after that

// console.log("End")



console.log("Start")

setTimeout(function cb(){
    console.log("Timer")
},0)  // this will still print after the end cuz it register a value in run time environment

console.log("End")

//start, end , timer


