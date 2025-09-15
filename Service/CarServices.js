const car = require("../Models/car")


const createCar=async(data)=>{
return await car.create(data)
}
const getAllCars=async()=>{
     const cars = await car.find()
     return cars
}

module.exports={createCar,getAllCars}