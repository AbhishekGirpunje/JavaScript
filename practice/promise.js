const cart = ["shoes", "pant","kutra"];

const promise = creatOrder(cart); //order ID // get cartItem
// console.log(promise)

promise.then(function(orderId){
    console.log(orderId)
    // proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message)
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
function validateCart(cart){
    return false;
}