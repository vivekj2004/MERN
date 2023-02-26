//console.log('Hello World')
// creating a function the es5 way
// function add(num1, num2){
//     return num1+ num2
// }
// creating anon function es5 way
// var add = function(num1, num2){
//     return num1 + num2
// }
// es6 way of writing a function - arrow function
let add = (num1, num2)=>{
    //sum = 0
    
    return num1 + num2
}
// by default it's var
{
     sum = 0
}
// function call
// since sum will be change based on num1 and num2 parameteres, sum cannot be a const
//const sum = 0 this is wrong
//let sum = 0
add(1,2)
console.log(sum)