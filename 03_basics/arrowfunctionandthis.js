const userDetails ={
    userName : "Abhishek",
    id : 98,

    welcomMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
        // console.log(this);//current context
        
    }

}
// userDetails.welcomMessage();
// userDetails.userName = "sahil"
// userDetails.welcomMessage();

//console.log(this);//{}

// function watch(){
//     let userName1 = "Abhishek"
//     console.log(this.userName1);// it will only work in object not in function
    
// }
// watch();

// const watch = function(){
//     let userName3 = "Abhishek"
//     console.log(this.userName3);//undefined
// }
//  watch();

const arrowFunction = () => {
    userName4 = "Abhishek"
    console.log(this.userName4)//undefined
    console.log(this)//{}
}
// arrowFunction();

//()=>{}//arrow function

const newArrFunction = (num, num1) =>{
    return num + num1;
} 
//console.log(newArrFunction(2,7));

const alternativeArrfuntion = (num2, num3) => num2 + num3;
// console.log(alternativeArrfuntion(2,5));//7

const returninObject = (num4,num5) =>({userName5:"Abhi"})
console.log(returninObject(2,6)) //{ userName5: 'Abhi' }

