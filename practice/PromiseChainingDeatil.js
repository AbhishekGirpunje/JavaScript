// // create a promise

// const myPromise = new Promise((resolve, reject)=>{
//     const success = true;
// // resolve("succeeded")
// // reject("failed");

//     if(success){
//         resolve("Operation succeeded");
//     }else{
//         reject("Operation failed");
//     }
// })

// myPromise
// .then(result => console.log(result))
// .catch(error => console.error(error))

// createOrder, processedToPayment, showOrderSummary, updateOrder

function createOrder(orderStatus){
    return new Promise((resolve, reject)=>{
        console.log("Creating order");
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Order Created")
            }else{
                reject("failed to create order");
            }
        },5000)
    })
}
function processedToPayment(paymentStatus){
    return new Promise((resolve, reject)=>{
        console.log("Payment Processing")
        setTimeout(() =>{
            let success = true;
            if(success){
                resolve("Payment successful")
            }else{
                reject("Payment failed")
            }
        },5000)
    })
}

function showOrderSummary(updateStatus){
    return new Promise((resolve,reject) =>{
        console.log("Showing Order Summary...")
        setTimeout(() =>{
            let success = true;
            if(success){
                resolve("Display Summary")
            }
        },5000)
    })
}

function updateOrder(){
    return new Promise((resolve, reject)=>{
        console.log("updating order")
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Order Updated")
            }
        },5000)
    })
}

// createOrder()
// .then(orderStatus => processedToPayment(orderStatus))
// .then(paymentStatus => showOrderSummary(paymentStatus))
// .then(updateStatus => updateOrder(updateStatus))
// .catch(error => console.error("Error:"+ error))
// .finally(()=> console.log("Order process completed"))

createOrder()
.then(orderStatus =>{
    console.log(orderStatus);
    return processedToPayment(orderStatus)
})
.then(paymentStatus =>{
    console.log(paymentStatus);
    return showOrderSummary(paymentStatus)
})
.then(summaryStatus => {
    console.log(summaryStatus);
    return updateOrder(summaryStatus)
})
.then(updateStatus =>{
    console.log(updateStatus);
})
.catch(error => console.error("Error: "+error))
.finally(()=> console.log("Order process complete"))