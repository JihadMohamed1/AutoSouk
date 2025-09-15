const carServices= require("../Service/CarServices")

const createCar=async(req,res)=>{
try{
    const data = req.body
    await carServices.createCar(data)
res.status(201).json({sucess:true,msg:"car has created"})
}catch(err){
res.status(500).json({err})
}
}


const getAllCars=async(req,res)=>{
try{
const cars = await carServices.getAllCars()
res.status(200).json({sucess:true,Cars:cars})
}catch(err){
res.status(500).json({err})
}
}

const getCarById=async(req,res)=>{
   try{
const id = req.params.id
const car = await carServices.getCarById(id)
res.status(200).json({sucess:true,Car:car})
}catch(err){
res.status(500).json({err})
}

}
const updateCar=async(req,res)=>{
   try{
const data = req.body
await carServices.updateCar(data)
res.status(200).json({sucess:true,msg:"car has updated"})
}catch(err){
res.status(500).json({err})
}

}
const deleteCar=async(req,res)=>{
   try{
const id = req.params.id
await carServices.deleteCar(id)
res.status(200).json({sucess:true,msg:"car has deleted"})
}catch(err){
res.status(500).json({err})
}

}

module.exports={createCar,getAllCars,getCarById,updateCar,deleteCar}