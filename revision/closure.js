function outer(){
    let a = 0;
    return function inner(){
        console.log(a)
    }
}
// outer();// we cant call like that it will just 
// store inner function. To call outer function properly 
// we have to create a variable and store that outer function 
// in it and that call that variable

const outerFun = outer();
outerFun();