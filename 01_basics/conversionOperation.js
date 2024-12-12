// let age = "df42"

// let age = null

let age = undefined

    console.log(typeof age);
    console.log(typeof (age)) // Method()

let valueInNumber = Number(age) //String into number conversion
    console.log(typeof valueInNumber);

    console.log(valueInNumber); //NaN


//Conversions


let score1 = 10
let str = String(score1) //String conversion
    console.log(str);



let score2 = "10"
let num = Number(score2) // number conversion
    console.log(num);



 let score3 = "Abhi"
 let bool1 = Boolean(score3)// string to boolean
    console.log(bool1);
 


 let score4  = 0
 let bool2 = Boolean(score4)// number to boolean
    console.log(bool2);
 


let score5 = null
let value1 = Number(score5)// null to number(o/p- 0)
    console.log(value1);



let score6 = undefined
let value2 = Number(score6)// undefined to number(o/p-NaN)
    console.log(value2);

 console.table([str, num, bool1, bool2, value1, value2])