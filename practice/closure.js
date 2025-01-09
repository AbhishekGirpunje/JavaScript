function outer(){
    let a = 10;
    function inner(){
        console.log(a)
    }
    return inner;
}
let z = outer();
z();
 // Executing outer function and returning inner function is called closure.

 function outermost(){
    let b = 100
    function outer(){
        let a = 10;
        function inner(){
            console.log(a, b)
        }
        return inner;
    }
    return outer();
 }
 let c = outermost();
 c();