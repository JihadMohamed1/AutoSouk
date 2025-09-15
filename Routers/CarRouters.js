const express = require("express")
const router = express.Router()
const carController = require("../Controllers/CarController")

router.route("/")
.post(carController.createCar)
.get(carController.getAllCars)
.put(carController.updateCar)

router.route("/:id")
.get(carController.getCarById)
.delete(carController.deleteCar)


module.exports=router