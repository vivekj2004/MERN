

//1. Create an array of cars, each car will have: model, mileage, and price (fill in your own data)
let carArray = {
    cars: [
        {
            model: "Toyota",
            milage: 70000,
            price: 15000,
        },
        {
            model:"Honda",
            milage: 24000,
            price: 24055,
        },
        {
            model: "Tata Jaguar",
            milage: 24,
            price: 84575,
        },
        {
            model: "Ford Focus",
            milage: 10544,
            price: 7554,
        },
        {
            model: "Mercedes",
            milage: 38038,
            price: 57751,
        },
        {
            model: "Honda",
            milage: 55004,
            price: 18545,
        },
        {
            model: "Toyota",
            milage: 15038,
            price: 22051,
        }

    ],
    total: 0,
    average: 0,
}




//2. Create a method to find cars under certain milage: takes the milage then returns an array of cars
let findCarsUnderMilage = (xMiles) => {
    let underMilage = carArray.cars.filter((car)=>{return car.milage < xMiles})
    return underMilage
}

//3. Create a method to find cars within a min and max price: takes the min and max then returns an array of cars
var findCarsWithinMinMaxPrice = (min, max) => {
    let carPriceRange = carArray.cars.filter((car)=>car.price>=min && car.price<=max)
    return carPriceRange
}

//4. Create a method to find average price: takes an array and returns a price number
function avgPrice(carArray){
    carArray.total = 0
    carArray.total = carArray.cars.reduce((previous, current) => previous + current.price, carArray.total)
    var size = Object.keys(carArray.cars).length
    carArray.average = carArray.total / size
    return carArray.average
}

//5. Create a method to find by model: takes a model and returns array of cars
var findByModel = (modelName) => {
    let modelMatch = carArray.cars.filter( ( car ) => { return car.model.toLowerCase()==modelName.toLowerCase() } )
    return modelMatch
}
console.log('Total: '+ carArray.cars.reduce((previous, current) => previous + current.price, carArray.total))

//6.	Call each method with your own parameters and render results into the terminal
 console.log("cars under certain milage ",  findCarsUnderMilage(50000))
 console.log("cars within price range ", findCarsWithinMinMaxPrice(24000, 44000))
 console.log( "average car price ",  avgPrice(carArray) )
 console.log( "find cars by model ", findByModel( "toyota" ) )

//exports.findCarsUnderMilage = findCarsUnderMilage
module.exports = { carArray, findCarsUnderMilage, findCarsWithinMinMaxPrice, avgPrice, findByModel }//, findCarsWithinMinMaxPrice } //, avgPrice, findByModel } 
//module.exports = findCarsWithinMinMaxPrice 
//module.exports = findCarsWithinMinMaxPrice
// module.exports = averagePrice
// module.exports = findByModel

