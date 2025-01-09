// function outer(){
//     let a = 10;
//     setTimeout (function inner(){
//         console.log(a)
//     },3000)
//     console.log("Abhishek")
// }
// outer();


function outermost(){
for (let i = 1 ; i < 5 ; i++){
function outter(x){
    setTimeout (function inner(){
        console.log(x)
    },x * 1000)
   }
   outter(i);
  }

}
outermost();