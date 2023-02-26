//console.log('Hello world')
//creating a function the ES5 way
// function add(num1, num2){
//     return num1 + num2
    
// }

// //function call
// var add = function(num1, num2) {
//     return num1 + num2
// }

//es6 way of writing a function - arrow function
var add = (num1, num2)=>{    
    return num1 + num2
}
// const sum=0 - wrong
let sum=0
sum = add(1, 2)
console.log(sum)

