//map
// const number = [5,1,3,2,6]

// function double(x){
//     return x * 2
// };

// function triple(y){
//     return y * 3;
// }

// function binary(z){
//     return z.toString(2)
// }

// const final = number.map(binary);
// console.log(final)

// const result = number.map(triple);
// console.log(result)


// const ouput = number.map(double);
// console.log(ouput)

// //filter

// const arr = [1,2,3,4,5]

// function oddNumber(x){
//     return x % 2
// }; 

// const finalOutput = arr.filter(oddNumber);
// console.log(finalOutput)

// function evenNumber(y){
//     return y % 2 === 0;
// }
// const outputfinal = arr.filter(evenNumber);
// console.log(outputfinal)

// function GreaterVal(z){
//     return z > 3
// };

// const last = arr.filter(GreaterVal);
// console.log(last)

// reduce

const arr = [1,2,3,4,5,6]

const sum = arr.reduce((acc,curr)=>acc + curr,0);
console.log(sum)

const maxi = arr.reduce((acc,curr)=> acc > curr ? acc : curr,0 )
console.log(maxi)

const max = function(y){
    let max = 0;
    for(let i = 0;i<y.length;i++){
        if(y[i]>max){
            max = y[i];
        }
    }
    return max;
}

console.log(`Max number:  ${max(arr)}`)

const maxNumb = arr.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0)

console.log(maxNumb)



const withOut = function(x){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + x[i]
    }
    return sum;
}

console.log(withOut(arr))

const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0)

console.log(output)

const users = [
    {firstName:"Abhishek",age:21},
    {firstName:"sahil",age:24},
    {firstName:"vedant",age:21},
];

const ouptu = users.reduce(function(acc, curr){
    if( acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{});

console.log(ouptu)