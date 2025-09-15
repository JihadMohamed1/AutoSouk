const userController=require("../Controllers/UserController")
const express=require("express")
const router=express.Router()

router.route("/")
.get(userController.getallusers)
.post(userController.CreateNewUser)
.put(userController.updateUser)

router.route("/:id")
.get(userController.getUserById)
.delete(userController.DeleteUser)

module.exports=router