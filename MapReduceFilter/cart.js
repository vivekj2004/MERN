//creating an object in javaScript
let cart = {
    products: [
        {
            name: "iPhone",
            price: 1000},
        {
            name:"iPad",
            price:800
        },
        {
            name: "Mac Pro",
            price:2000
        }
    ],
    total: 0
}

// cart.products.forEach((product, i)=>{
//     console.log(product.name+" is at "+i)
// })

let discountedCart = cart.products.map((product)=>{
    return {name: product.name, price: product.price*0.6}    
})

console.log(discountedCart)

let under = cart.products.filter((product)=> { return product.price < 2000 }) //return is not necessary if curly braces are not used.
console.log(under)
//let sum=0
cart.total = cart.products.reduce((previous, current)=>previous+current.price, cart.total)

cart.total = cart.products.reduce( (result, current) =>  result+current?.price, 0  )
console.log(cart)