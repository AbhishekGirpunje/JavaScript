// shadwoing using var

var a =10;
if(true){
    var a =20; //shadowing
    console.log(a)// 20
}
console.log(a)// 20 global variable affected

// shadowing using let

let b = 10;
if(true){
    let b =40;
    console.log(b);//40
}
console.log(b)//10

const c = 10;
if(true){
    const c = 20;
    console.log(c);
}
console.log(c)
