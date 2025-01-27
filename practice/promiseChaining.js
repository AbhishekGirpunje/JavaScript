const cart = ["shoes", "pant","kutra"];

creatOrder(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})
.then(function(orderId){
    console.log("anyhow it calls")
})


///producer

function creatOrder(cart){
    const pr = new Promise(function (reslove, reject){
        //create an order
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }
        //logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                reslove(orderId)
            },5000)
            // reslove(orderId);
        }
    });

    return pr;
}

function proceedToPayment(orderId){
    //
    return new Promise(function(resolve, reject){
        resolve("payment successful");
    })
}

function validateCart(cart){
    return true;
}