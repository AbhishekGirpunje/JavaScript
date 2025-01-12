setTimeout(function() {
    console.log("Timer")
},3000)
function a(b){
    console.log("a")
    b();
}a(function b(){
    console.log("b")
}) 