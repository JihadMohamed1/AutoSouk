const express = require("express")
const router = express.Router()
const carController = require("../Controllers/CarController")

router.route("/")
.post(carController.createCar)
.get(carController.getAllCars)

module.exports=router