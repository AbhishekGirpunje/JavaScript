function x(){ //call back function
    console.log("Hey")
}
function y(x){// function y is higher order function
    x();
}
y(x);

