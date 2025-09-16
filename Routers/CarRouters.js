const express = require("express")
const router = express.Router()
const carController = require("../Controllers/CarController")
const { identifier } = require("../Middlewares/identification")

router.route("/")
.post(identifier,carController.createCar)
.get(identifier,carController.getAllCars)
.put(identifier,carController.updateCar)

router.route("/:id")
.get(identifier,carController.getCarById)
.delete(identifier,carController.deleteCar)

router.route("/sellerId/:id")
.get(identifier,carController.getCarBySeller)


module.exports=router