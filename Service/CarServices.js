const car = require("../Models/car")


const createCar=async(data)=>{
return await car.create(data)
}
const getAllCars=async()=>{
     const cars = await car.find()
     return cars
}
const getCarById=async(id)=>{
return await car.findById({_id:id})
}
module.exports={createCar,getAllCars,getCarById}