// function outer(){
//     let a = "outer";
//     console.log(a)
//     setTimeout(function() {
//         console.log("Hey "+ a)
//     }, 5000); 
// }
// outer();

console.log("Start")

setTimeout(function() {
    console.log("Timer")
}, 5000);
console.log("End")