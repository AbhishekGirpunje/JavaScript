// for

let arrNew = "Abhishek"

for (let i = 0; i < 5; i++) {
    const element = i;
    if(element == 2){
      //  console.log("here is 2")
    }
    //console.log(element)
}

for (let i = 1 ; i <= 10; i++) {
   // console.log(`Tables of: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and inner loop: ${i}`)
        //console.log( i + "*" + j + "=" + i*j)
        
    }
    
}

const userNames = ["Abhishek","Sahil","Mohaseb"]
//console.log(userNames.length)

for (let i = 0; i < userNames.length; i++) {
    const element = userNames[i];
  //  console.log(element)
}

//break and continue

for (let i = 1; i <=20 ; i++) {
    
    if(i == 5){
     //   console.log("Move out loop")
        break;
    }
    //console.log(`Value of i is ${i}`)
    
}

for (let i = 1; i <=20 ; i++) {
    
    if(i == 5){
        console.log("Move out loop")
        continue;
    }
    console.log(`Value of i is ${i}`)
    
}