const EmailID= "abhi@gmail.com"
let Name = "Abhishek"
var RandomNumbers = 1234
MobileNO = 981729

let city;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


RandomNumbers = 2314
Name = "sahil"
MobileNO = 9876543
city = "Amravati"


console.table([EmailID, Name, RandomNumbers, MobileNO, city])

