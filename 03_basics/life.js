//IIFC(Immediately invoke function expression)

(function newFunction(){
    console.log("Abhishek");
})();

((name) => {
    console.log(`${name}, your name`);
})("sahil");