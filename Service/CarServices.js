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
const updateCar=async(data)=>{
return await car.findByIdAndUpdate(data._id,data)
}
const deleteCar=async(id)=>{
return await car.deleteOne({_id:id})
}
const getCarsBySeller=async(id)=>{
    return await car.find({Seller:id})
}
module.exports={createCar,getAllCars,getCarById,updateCar,deleteCar,getCarsBySeller}