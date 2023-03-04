//import { jest } from '@jest/globals'

//import the function to be tested
//const carsDay1Assignment = require('./carsDay1Assignment')
const { carArray, findCarsUnderMilage, findCarsWithinMinMaxPrice, avgPrice, findByModel } = require('./carsDay1Assignment')
//const findCarsUnderMilage = require('./carsDay1Assignment')
//const {findCarsUnderMilage, findCarsWithinMinMaxPrice} = require('./carsDay1Assignment')
//const findCarsWithinMinMaxPrice = require('./carsDay1Assignment')

//describe("carsDay1Assignment", () => {
 test('Create a method to find cars under certain milage: takes the milage then returns an array of cars', ()=> {
     expect(findCarsUnderMilage(50000)).toStrictEqual(
         [
             { model: 'Honda', milage: 24000, price: 24055 },
             { model: 'Tata Jaguar', milage: 24, price: 84575 },
             { model: 'Ford Focus', milage: 10544, price: 7554 },
             { model: 'Mercedes', milage: 38038, price: 57751 },
             { model: 'Toyota', milage: 15038, price: 22051 }
           ]
     )
 })
 

 test('Create a method to find cars within a min and max price: takes the min and max then returns an array of cars', ()=> {
     expect(findCarsWithinMinMaxPrice(24000, 44000)).toStrictEqual(
        [
            { model: 'Honda', milage: 24000, price: 24055 }
          ]
     )
 })

test('Create a method to find average price: takes an array and returns a price number', ()=> {
    expect(avgPrice(carArray)).toEqual( 32790.142857142855 ) //32790.142857142855, 65580.28571428571-This number will be received if avgPrice function does not initialize carArray.Total to 0, since the numbers are being added twice in the test run )
})

test('Create a method to find cars under certain milage: takes the milage then returns an array of cars', ()=> {
    expect(findByModel('toyota')).toStrictEqual(
        [
            { model: 'Toyota', milage: 70000, price: 15000 },
            { model: 'Toyota', milage: 15038, price: 22051 }
          ]
    )
})





